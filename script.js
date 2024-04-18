const email = document.getElementById("email");
const password = document.getElementById("password");
const profileContainer = document.getElementById("profileContainer");
const userName = document.getElementById("username");
const usernameContainer = document.getElementById("usernameContainer");
const ontario = document.getElementById('ontario');
const alberta = document.getElementById('alberta');
const bc = document.getElementById('BC');
const aboutMe = document.getElementById('aboutMe');
const h1div = document.getElementById('h1Div');
const PlaceName = document.getElementById('placeName');
const contact =document.getElementById('contact');


async function signupPageDisplay(){

  const response = await fetch('/signuppagedisplay',{
    method : 'GET',
    headers : {
      'content-type': 'application/file'
    }
  });

  if(!response.ok){
    console.log("Something went wrong check js file");
  }

  let file = response.body;
  console.log(file);

  if(file.locked == false){
    location.href = 'signup.html';
  }
}

async function logIn(){
  let emailVal = email.value;
  let passwordVal = password.value;

  const data = {
    Email : emailVal,
    Password : passwordVal
  }

  const response = await fetch('/login',{
    method : 'POST',
    headers : {
      'content-type': 'application/json'
    },
    body : JSON.stringify(data)
  });

  if(!response.ok){
    console.log("Something went wrong check js file");
  }

  let responseData = await response.json();
  console.log(responseData);

  if (responseData.Email === emailVal && responseData.Password === passwordVal) {
    console.log("Login successful!");
    profileContainer.style.display = 'none';
    contact.style.display = 'none';
    
    userName.textContent = `${responseData.FirstName} ${responseData.LastName}`;

    usernameContainer.style.display = 'flex';

  } else if (responseData.Email !== emailVal) {
    alert("Oops, the email is incorrect");
  } else if (responseData.Password !== passwordVal) {
    alert("Oops, the password is incorrect");
  } else {
    alert("Please enter valid details");
  }

}


const albertaCities = [
  { name: "Calgary", image: "calgary.jpg" },
  { name: "Edmonton", image: "edmonton.jpg" },
  { name: "Red Deer", image: "red deer.jpg" },
  { name: "Canmore", image: "canmore.jpg" },
];

const ontarioCities = [
  { name: "Toronto", image: "toronto.jpg" },
  { name: "London", image: "london.jpg" },
  { name: "Ottawa", image: "ottawa.jpg" },
  { name: "Hamilton", image: "hamilton.jpg" },
];

const britishCities = [
  { name: "Vancouver", image: "vancouver.jpg" },
  { name: "Victoria", image: "victoria.jpg" },
  { name: "Surrey", image: "surrey.jpg" },
  { name: "Burnaby", image: "burnaby.jpg" },
];

let boxesGenerated = false;

ontario.addEventListener('click', ()=>{
  ShowingCity(ontarioCities);
})
alberta.addEventListener('click', ()=>{
  ShowingCity(albertaCities);
})
bc.addEventListener('click', ()=>{
  ShowingCity(britishCities);
})



function ShowingCity(cities) {

  // Get the reference to the city-div element only once outside the loop
  let cityVar = document.getElementById("city-div");
  let provContainer = document.getElementById("back-div");

  if (!boxesGenerated) {

      
      // Create a container div to hold all the city cards
      let containerDiv1 = document.createElement("div");
      containerDiv1.className = "createdRow";

      for (let i = 0; i < cities.length; i++) {
          // Create a new div for each city and append it to containerDiv
          let cityDiv = document.createElement("div");
          cityDiv.className = "cityCard"; // Add a specific class for styling
          cityDiv.innerHTML = `
              <a href="property.html?city=${cities[i].name}" target="_blank" class="a-city">
              <img src="${cities[i].image}" class="card-img-city" alt="${cities[i].name}">
              <div class="card-body">
                  <h5 class="card-title">${cities[i].name}</h5>
              </div>
              </a>
          `;
          
          // Append the new cityDiv to containerDiv
    
              containerDiv1.appendChild(cityDiv);
      
          
      }
     
      //clear everything
      cityVar.innerHTML = '';
      aboutMe.style.display = 'none';
      PlaceName.textContent = 'Popular Cities';

      // Append the containerDiv to cityVar
      cityVar.appendChild(containerDiv1);

      //add back link
      provContainer.innerHTML = `<a href="index.html" class="back-div">Back -></a>`;

      boxesGenerated = true;
      
  }
}
