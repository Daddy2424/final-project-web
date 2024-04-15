

document.addEventListener("DOMContentLoaded", function () {
  const uploadButton = document.querySelector(".signup-butt-form");
  const form = document.getElementById('form');

  

  

  uploadButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      let title = document.getElementById("title").value
      let location =  document.getElementById("location").value
      let price = document.getElementById("price").value
      let bedrooms = document.getElementById("bedrooms").value
      let bathrooms = document.getElementById("bathrooms").value
      let area =  document.getElementById("area").value

      const fileInput = document.getElementById('image');
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append('image', file);
      formData.append('title', title);
      formData.append('location', location);
      formData.append('price', price);
      formData.append('bedrooms', bedrooms);
      formData.append('bathrooms', bathrooms);
      formData.append('area', area);

      // Send the form data to the backend using fetch
      fetch('/property', {
          method: "POST",
          body: formData
      })
          .then(response => {
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              return response.json();
          })
          .then(data => {
              console.log("Form data sent successfully:", data);
              // Optionally, perform any actions after successful form submission
              window.location.href = 'property.html';
          })
          .catch(error => {
              console.error("Error sending form data:", error);
          });
  });




});