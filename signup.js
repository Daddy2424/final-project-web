// const { BSON } = require("mongodb");

let landlordEl = document.getElementById("landlord");
let tenentEl = document.getElementById("tenent");
let signupBtn = document.getElementById("signUpBtn");
let form = document.getElementById("form");
let landlord;
let tenent;


landlordEl.addEventListener("change", ()=>{
  if (landlordEl.checked) {
    console.log('Landlord selected');
    landlord = true;
    tenent = false;
  }
  else{
    landlord = false;
  }
})

tenentEl.addEventListener('change', () => {
  if (tenentEl.checked) {
    console.log('Tenant selected');
    tenent = true;
    landlord = false;
  }
  else{
    tenent = false;
  }
});

let errorExist = false;

signupBtn.addEventListener("click", async (event)   => {
  event.preventDefault();

  let firstName = document.getElementById("FirstName").value;
  let lastName = document.getElementById("LastName").value;
  let phone = document.getElementById("Phone").value;
  let email = document.getElementById("Email").value;
  let password = document.getElementById("Pass").value;

  const formData = {
    FirstName : firstName,
    LastName : lastName,
    Phone : phone,
    Email : email,
    Password : password,
    if_landlord : landlord,
    if_tenant : tenent
  }

  if (landlord && firstName && lastName && !isNaN(phone) && email && password) {
    // window.location.href = 'landlord.html';
      const response = await fetch('/storeuser',{
        method : 'POST',
        headers : {
          'content-type': 'application/json'
        },
        body : JSON.stringify(formData)
      });

      if(!response.ok){
        console.log("Something went wrong check js file");
      } 
      window.location.href = 'admin.html';
  }
  else if (tenent && firstName && lastName && !isNaN(phone) && email && password) {
    
    const response = await fetch('/storeuser',{
      method : 'POST',
      headers : {
        'content-type': 'application/json'
      },
      body : JSON.stringify(formData)
    });

    if(!response.ok){
      console.log("Something went wrong check js file");
    }

    window.location.href = 'index.html';

  }
    else {

    if (errorExist == false){
      let msg = document.createElement('p');
      msg.textContent = "Please complete the form !"
      msg.style.color = "red";
      errorExist = true;
      form.appendChild(msg);
    }else if(errorExist == true){
    }
    
  }
});
