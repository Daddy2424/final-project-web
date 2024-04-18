
const propertyListings = [

    {
        id: 1,
        title: "Modern Downtown Condo",
        location: "Calgary",
        price: "$450,000",
        bedrooms: 2,
        bathrooms: 2,
        area: "1,100 sqft",
        imageUrl: "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/4/calgary-home--residential--house-1-6217330-1672855020133.jpg",
    },
    {
        id: 2,
        title: "Family Home in Suburbia",
        location: "Calgary",
        price: "$650,000",
        bedrooms: 4,
        bathrooms: 3,
        area: "2,200 sqft",
        imageUrl: "https://www.justinhavre.com/thumbs/416x284/uploads/Calgary%20Homes%2002.jpg",
    },
    {
        id: 3,
        title: "Cozy Bungalow near Parks",
        location: "Calgary",
        price: "$350,000",
        bedrooms: 3,
        bathrooms: 2,
        area: "1,500 sqft",
        imageUrl: "https://photos.zillowstatic.com/fp/dc0801c36da9078ae10061fa01b9488d-p_e.jpg",
    },
    {
        id: 4,
        title: "Luxury Penthouse with Views",
        location: "Calgary",
        price: "$1,200,000",
        bedrooms: 3,
        bathrooms: 3,
        area: "2,500 sqft",
        imageUrl: "https://www.kirbycox.com/thumbs/800x600/r/uploads/Tuscany-Homes-For-Sale-Calgary.jpg",
    }
  ];
  
  

function deleteProperty(id) {
    const index = propertyListings.findIndex(property => property.id === id);
    
    if (index !== -1) {
        propertyListings.splice(index, 1);
        
        renderPropertyListings();
    }
}

function renderPropertyListings() {
    const propertiesContainer = document.getElementById("properties-id");
    propertiesContainer.innerHTML = ""; 

    propertyListings.forEach(property => {
        propertiesContainer.innerHTML += `
            <div class="col cursor">
                <div class="card shadow-sm">
                    <img src="${property.imageUrl}" class="bd-placeholder-img card-img-top" width="100%" height="225" aria-label="Property Image" alt="Property Image">
                    <div class="card-body">
                        <h5 class="card-title">${property.title}</h5>
                        <p class="card-text">Location: ${property.location}</p>
                        <p class="card-text">Price: ${property.price}</p>
                        <p class="card-text">Bedrooms: ${property.bedrooms}</p>
                        <p class="card-text">Bathrooms: ${property.bathrooms}</p>
                        <p class="card-text">Area: ${property.area}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="deleteProperty(${property.id})">Delete</button>
                            </div>
                            <small class="text-muted">${property.id}</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

renderPropertyListings();

const rentProp = document.getElementById("rent");
rentProp.addEventListener('click', ()=>{
    window.location.href = 'landlord.html';
})