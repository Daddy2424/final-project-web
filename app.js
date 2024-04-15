const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({ auth: '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' });


// sen image to guthub
async function saveImageToGitHubRepo(owner, repo, path, message, imageFile) {
  try {
    // Convert image data to base64
    const imageDataBase64 = Buffer.from(imageFile.buffer).toString('base64');

    // Upload the image to GitHub repo
    await octokit.repos.createOrUpdateFileContents({
      owner: owner,
      repo: repo,
      path: path,
      message: message,
      content: imageDataBase64,
      encoding: 'base64'
    });

    // Get the image URL from the GitHub response
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${path}`;

    return rawUrl;
  } catch (error) {
    console.error("An error occurred while saving the image to GitHub:", error);
    return null;
  }
}

let temp = 0;




// Example usage:
const repoOwner = 'Daddy2424';
const repoName = 'img-propeties-final-web';
const timestamp = new Date().getTime(); 
const randomString = Math.random().toString(36).substring(7); 
const imagePath = `${timestamp}-${randomString}.jpg`;
const commitMessage = 'Add image to repository';




// database
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://webFinalProject:Black2024..@rentyourfuture.tx4vpx5.mongodb.net/?retryWrites=true&w=majority&appName=RentYourFuture";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// connect database
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }catch(error){
    console.log(error);
  }
}



app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) =>{
  res.sendFile('index.html')
})

app.get('/signuppagedisplay', (req, res) => {
  
  fs.readFile(__dirname + '/signUp.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    
    res.send(data);
  });
});


app.post('/storeuser', async (req, res)=>{

  const newData = req.body;

  async function createUser(client, newData){

    const result = await client.db("RentYourFuture").collection("profileData").insertOne(newData);
    console.log(`New listing created with the following id: ${result.insertedId}`);
  }

  createUser(client, newData);

  
  

  res.status(200).json({message : 'data stored succesfully'});

})

app.post('/login', async (req,res)=>{

  const newData = req.body;
  let email = newData.Email;
  console.log(email);


  async function getUserByEmail(client, email) {
    const result = await client.db("RentYourFuture").collection("profileData").findOne({ Email: email });
    if (result) {
        console.log("User found:", result);
        res.send(result);
    } else {
        console.log("User not found");
        return null;
    }
  }
  getUserByEmail(client, email);
  
})


app.post('/property', upload.single('image'), async (req, res) => {
  const newData = req.body;
  const imageFile = req.file; // Get the uploaded image file

  temp++;

  if (!imageFile) {
    return res.status(400).json({ message: 'No image uploaded' });
  }

  const imageUrl = await saveImageToGitHubRepo(repoOwner, repoName, imagePath, commitMessage, imageFile);

  newData.imgUrl = imageUrl;
  console.log(imageUrl);

  try {
    const db = client.db("RentYourFuture");
    const collection = db.collection("propertyData");

    const result = await collection.insertOne(newData);
    console.log(`New listing created with the following id: ${result.insertedId}`);
    res.status(200).json({ message: 'Data stored successfully' });
  } catch (error) {
    console.error("Error storing property data: ", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/showproperty', async (req, res) => {
  try {
      const database = client.db('RentYourFuture');
      const collection = database.collection('propertyData');

      // Query the collection to retrieve all documents
      const data = await collection.find({}).toArray();

      

      // Send the retrieved data as JSON response
      res.json(data);
  } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).send('Internal server error');
  }
});

run().catch(console.dir);
app.listen(port,()=>{
  console.log(`server listeniing in port : http://localhost:${port}`);
})