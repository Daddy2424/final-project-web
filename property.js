const propertyListings = [
  //Calgary
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
  },
  {
      id: 5,
      title: "Townhouse in Trendy Neighborhood",
      location: "Calgary",
      price: "$550,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      imageUrl: "https://cdn.sitephotos.sierrastatic.com/1807_hero_bigstock-luxury-house-with-beautiful-la-87727472-20200118105326.jpg",
  },
  {
      id: 6,
      title: "Riverside Cottage Retreat",
      location: "Calgary",
      price: "$800,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,000 sqft",
      imageUrl: "https://s3.us-east-2.amazonaws.com/havenlifestyles/a1232488-1.jpg",
  },
  {
      id: 7,
      title: "Modern Apartment with Balcony",
      location: "Calgary",
      price: "$300,000",
      bedrooms: 1,
      bathrooms: 1,
      area: "800 sqft",
      imageUrl: "https://www.settlersrealty.ca/src/img/post/small2464.jpg",
  },
  {
      id: 8,
      title: "Family-Friendly Home near Schools",
      location: "Calgary",
      price: "$500,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,600 sqft",
      imageUrl: "https://www.justinhavre.com/thumbs/416x284/uploads/Calgary%20Homes%2001.jpg",
  },
  {
      id: 9,
      title: "Historic Inner-City House",
      location: "Calgary",
      price: "$900,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,000 sqft",
      imageUrl: "https://www.shutterstock.com/image-photo/luxury-house-sunny-day-calgary-600nw-440051536.jpg ",
  },

  //Edmonton

  {
      id: 10,
      title: "Downtown High-Rise Apartment",
      location: "Edmonton",
      price: "$400,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,000 sqft",
      imageUrl: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1008i215%2Fvr05nbf6ncmbmgycrm0jhvheb5i215&option=N&h=472&permitphotoenlargement=false",
  },
  {
      id: 11,
      title: "Spacious Family Home in Suburban",
      location: "Edmonton",
      price: "$600,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,400 sqft",
      imageUrl: "https://www.edmontonhomes.ca/inc/skins/havre-2016/img/featured/1644334380.webp",
  },
  {
      id: 12,
      title: "Cozy Condo in Edmonton's Historic",
      location: "Edmonton",
      price: "$350,000",
      bedrooms: 1,
      bathrooms: 1,
      area: "700 sqft",
      imageUrl: "https://iss-cdn.myrealpage.com/BdOoz2sQFysIM8cOGF5Ichm0FG0t9WKA6viwi0O81Sw/rs:auto:0:0:0/g:sm/bG9jYWw6Ly8vZGF0YS9hcHAvd3BzL2Ivci9hL24vYnJhbmRvbmxlZS1hYnVhbi1ibG9ja3MxLm15cmVhbHBhZ2V3ZWJzaXRlLmNvbS9fbWVkaWEvQ29tbXVuaXRpZXMvU291dGh3ZXN0L1JpdmVyYmVuZC9Ccm9va3NpZGUuanBnP3Q9MTY4ODE0MjczODUzNg?t=1688142738536",
  },
  {
      id: 13,
      title: "Luxury Estate with Private Pool",
      location: "Edmonton",
      price: "$1,800,000",
      bedrooms: 6,
      bathrooms: 5,
      area: "5,000 sqft",
      imageUrl: "https://www.topedmontonrealestate.com/uploads/225000842.JPG",
  },
  {
      id: 14,
      title: "Modern Loft in Downtown Edmonton",
      location: "Edmonton",
      price: "$700,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      imageUrl: "https://www.edmontonrealestate.ca/r/1.1.1//uploads/featured/401094198.jpg",
  },
  {
      id: 15,
      title: "Riverside Cottage with Stunning Views",
      location: "Edmonton",
      price: "$900,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,200 sqft",
      imageUrl: "https://www.edmontonrealestate.ca/r/1.1.1//uploads/featured/1947925109.jpg",
  },
  {
      id: 16,
      title: "Charming Townhouse",
      location: "Edmonton",
      price: "$500,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,500 sqft",
      imageUrl: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1008i215%2F49kp299y058gmrysgx4chwrrd4i215&option=N&h=472&permitphotoenlargement=false",
  },
  {
      id: 17,
      title: "Stylish Apartment with City Views",
      location: "Edmonton",
      price: "$300,000",
      bedrooms: 2,
      bathrooms: 1,
      area: "1,000 sqft",
      imageUrl: "https://www.topedmontonrealestate.com/uploads/225034373-1.JPG",
  },
  {
      id: 18,
      title: "Family-Friendly Home near Parks",
      location: "Edmonton",
      price: "$550,000",
      bedrooms: 4,
      bathrooms: 2,
      area: "2,000 sqft",
      imageUrl: "https://www.edmontonrealestate.pro/uploads/luxury-homes-edmonton-2.jpg",
  },
  //Red deer
  {
      id: 19,
      title: "Cozy Bungalow in Red Deer's Quiet Neighborhood",
      location: "Red Deer",
      price: "$320,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,200 sqft",
      imageUrl: "https://photos.zillowstatic.com/fp/bdd216002d3fa9d62a411198be19f0e9-p_e.jpg",
  },
  {
      id: 20,
      title: "Charming Family Home with Large Yard",
      location: "Red Deer",
      price: "$450,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,000 sqft",
      imageUrl: "https://photos.zillowstatic.com/fp/d0af762feb0816d6a8764e5bab4c762d-p_e.jpg",
  },
  {
      id: 21,
      title: "Lakefront Cottage Retreat in Red Deer County",
      location: "Red Deer",
      price: "$550,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      imageUrl: "https://static1.realtyexecutives.com/site-files/412b45c7-1560-4f3a-9068-518e96fb4e3b",
  },
  {
      id: 22,
      title: "Ranch-style Home with Acreage in Red Deer",
      location: "Red Deer",
      price: "$680,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,500 sqft",
      imageUrl: "https://www.propertyinreddeer.com/uploads/Red_Deer_Nice_House.46.jpg",
  },
  {
      id: 23,
      title: "Modern Townhouse in Red Deer's Urban Core",
      location: "Red Deer",
      price: "$380,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,500 sqft",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/56de03938259b504dca79755/1646157499137-5ZID6ILI3R0VLXK9ZABE/5I2A5042.jpg",
  },
  {
      id: 24,
      title: "Country Living Retreat with Scenic Views",
      location: "Red Deer",
      price: "$590,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,200 sqft",
      imageUrl: "https://remax-listingphotos-ca5.imgix.net/rets-images-pillar-can/44047d66d69253661a900c088da5bb7b9c8462a3-1-large.jpeg",
  },

  //Canmore
  {
      id: 25,
      title: "Luxury Mountain Lodge with Panoramic Views",
      location: "Canmore",
      price: "$2,000,000",
      bedrooms: 6,
      bathrooms: 5,
      area: "4,500 sqft",
      imageUrl: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1008i215%2Fgwjntt2mv94d4ej5503wd9jdg4i215&option=N&h=472&permitphotoenlargement=false",
  },
  {
      id: 26,
      title: "Cozy Cabin Retreat in Canmore's Wilderness",
      location: "Canmore",
      price: "$500,000",
      bedrooms: 2,
      bathrooms: 1,
      area: "900 sqft",
      imageUrl: "https://assets.site-static.com/userFiles/2549/image/186.jpg",
  },
  {
      id: 27,
      title: "Sleek Modern Apartment in Canmore's Downtown",
      location: "Canmore",
      price: "$650,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,700 sqft",
      imageUrl: "https://assets.site-static.com/userFiles/2549/image/Silvertip-4-870x580.jpg",
  },
  {
      id: 28,
      title: "Rustic Mountain Chalet in Canmore",
      location: "Canmore",
      price: "$850,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,300 sqft",
      imageUrl: "https://distinctivehomescanmore.com/wp-content/uploads/2021/03/unnamed.jpeg",
  },
  {
      id: 29,
      title: "Golf Course Estate Home in Canmore",
      location: "Canmore",
      price: "$1,500,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,800 sqft",
      imageUrl: "https://www.avenuecalgary.com/wp-content/uploads/2023/05/1-scaled-e1683734275217.jpg",
  },
  {
      id: 30,
      title: "Contemporary Condo",
      location: "Canmore",
      price: "$900,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,900 sqft",
      imageUrl: "https://distinctivehomescanmore.com/wp-content/uploads/2020/05/Newcastle-Exterior.jpg",
  },
  //Toronto
  {
      id: 31,
      title: "Luxury Condo in Downtown Toronto",
      location: "Toronto",
      price: "$1,500,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      imageUrl: "https://media.blogto.com/articles/202088-buying-house-toronto.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70",
  },
  {
      id: 32,
      title: "Charming Victorian Home in Leslieville",
      location: "Toronto",
      price: "$1,200,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,200 sqft",
      imageUrl: "https://assets.hgtv.ca/wp-content/uploads/2021/12/Average-Price-of-Toronto-Home-20.jpg",
  },
  {
      id: 33,
      title: "Modern Loft in Entertainment District",
      location: "Toronto",
      price: "$900,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,500 sqft",
      imageUrl: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1008i215%2F4ytxcajzt7be4aatm43bwg97r4i215&option=N&h=472&permitphotoenlargement=false",
  },
  {
      id: 34,
      title: "Family-Friendly Home in North York",
      location: "Toronto",
      price: "$850,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,600 sqft",
      imageUrl: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1008i215%2Fa2y70j6b889mmgeffsyyc0kfm5i215&option=N&h=472&permitphotoenlargement=false",
  },
  {
      id: 35,
      title: "Luxury Penthouse with Lake Views",
      location: "Toronto",
      price: "$2,800,000",
      bedrooms: 4,
      bathrooms: 4,
      area: "3,500 sqft",
      imageUrl: "https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/b/e4/be46b7f3-2037-54be-bc56-5291ed16f196/6504b7c20947b.image.jpg?resize=1200%2C900",
  },
  {
      id: 36,
      title: "Townhouse in Liberty Village",
      location: "Toronto",
      price: "$750,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sqft",
      imageUrl: "https://images.mansionglobal.com/im-34250257?width=784&height=524",
  },
  //London
  {
      id: 37,
      title: "Modern Apartment in Central London",
      location: "London",
      price: "£750,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sqft",
      imageUrl: "https://www.londonontariorealestate.com/uploads/homes-for-sale-north-london.jpg",
  },
  {
      id: 38,
      title: "Victorian Terrace in Kensington",
      location: "London",
      price: "£1,500,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,500 sqft",
      imageUrl: "https://homesforlife.ca/wp-content/uploads/2023/03/luxury-real-estate-london-ontario.jpg",
  },
  {
      id: 39,
      title: "Riverside Penthouse with Thames Views",
      location: "London",
      price: "£3,200,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,800 sqft",
      imageUrl: "https://www.movemeto.com/ontario/img/medium/real-estate.jpg",
  },
  {
      id: 40,
      title: "Townhouse in Notting Hill",
      location: "London",
      price: "£2,000,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,000 sqft",
      imageUrl: "https://boomtown-production-consumer-backup.s3.amazonaws.com/6122/files/2019/05/Sunningdale-London-Ontario-Neighbourhood.jpg",
  },
  {
      id: 41,
      title: "Modern Loft Conversion in Shoreditch",
      location: "London",
      price: "£950,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      imageUrl: "https://theagencyrealestate.ca/wp-content/uploads/2019/02/alcovemodel.jpg",
  },
  {
      id: 42,
      title: "Luxury Mansion in Hampstead",
      location: "London",
      price: "£5,500,000",
      bedrooms: 7,
      bathrooms: 6,
      area: "6,000 sqft",
      imageUrl: "https://pic.le-cdn.com/thumbs/520x390/08/1/properties/Property-126d6fe7166f3dafe21c76701c28d97c-129361182.jpg",
  },
  //Ottawa
  {
      id: 43,
      title: "Executive Condo in Downtown Ottawa",
      location: "Ottawa",
      price: "$850,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,400 sqft",
      imageUrl: "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/14/rockcliffe-park-1-6231295-1673744157846.png",
  },
  {
      id: 44,
      title: "Charming Victorian Home in Centretown",
      location: "Ottawa",
      price: "$1,200,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,200 sqft",
      imageUrl: "https://www.movemeto.com/ontario/img/medium/real-estate.jpg",
  },
  {
      id: 45,
      title: "Riverside Cottage in Ottawa River",
      location: "Ottawa",
      price: "$950,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      imageUrl: "https://www.upfrontottawa.com/wp-content/uploads/2016/07/06-1-5812-Red-Castle-Ridge-OsgodeRideau-Ottawa-outside.jpg",
  },
  {
      id: 46,
      title: "Family-Friendly Home in Barrhaven",
      location: "Ottawa",
      price: "$600,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,600 sqft",
      imageUrl: "https://www.movemeto.com/ontario/img/medium/single-family-homes-for-sale.jpg",
  },
  {
      id: 47,
      title: "Modern Loft in ByWard Market",
      location: "Ottawa",
      price: "$700,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sqft",
      imageUrl: "https://photos.zillowstatic.com/fp/9feb87d1281a9abf39fc82ba428d681f-p_e.jpg",
  },
  {
      id: 48,
      title: "Luxury Estate in Rockcliffe Park",
      location: "Ottawa",
      price: "$2,500,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,000 sqft",
      imageUrl: "https://www.housesforsaleottawa.ca/wp-content/uploads/sites/1160/2022/01/homes-for-sale-ottawa.png",
  },
  //Hamilton
  {
      id: 49,
      title: "Modern Condo in Downtown Hamilton",
      location: "Hamilton",
      price: "$500,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,000 sqft",
      imageUrl: "https://assets.hgtv.ca/wp-content/uploads/2021/12/Exterior-2-scaled.jpg",
  },
  {
      id: 50,
      title: "Victorian Home in Kirkendall",
      location: "Hamilton",
      price: "$800,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      imageUrl: "https://www.point2homes.com/news/wp-content/uploads/sites/51/2016/02/403-Queens-Street-Hamilton.jpg",
  },
  {
      id: 51,
      title: "Riverside Cottage near Dundas",
      location: "Hamilton",
      price: "$650,000",
      bedrooms: 2,
      bathrooms: 1,
      area: "1,200 sqft",
      imageUrl: "https://www.insauga.com/wp-content/uploads/2021/08/Maplemain.jpg",
  },
  {
      id: 52,
      title: "Family-Friendly Home in Ancaster",
      location: "Hamilton",
      price: "$700,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,000 sqft",
      imageUrl: "https://img.jamesedition.com/listing_images/2023/12/12/12/48/24/347b811a-4351-4618-8bcf-7e46fff76a22/je/507x312xc.jpg",
  },
  {
      id: 53,
      title: "Loft Conversion in James Street North",
      location: "Hamilton",
      price: "$450,000",
      bedrooms: 1,
      bathrooms: 1,
      area: "800 sqft",
      imageUrl: "https://www.theglobeandmail.com/resizer/5zx8vHMfVmFuezlnzdSpWZFudjg=/arc-anglerfish-tgam-prod-tgam/public/LUMRMCBYOJEGVKOYTHR4RTH4NY.JPG",
  },
  {
      id: 54,
      title: "Country Estate in Flamborough",
      location: "Hamilton",
      price: "$1,200,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,500 sqft",
      imageUrl: "https://photos.zolo.ca/44-sherway-street-hamilton-X7040592-1.jpg",
  },
  //Vancouver
  {
      id: 55,
      title: "Luxury Condo in Downtown Vancouver",
      location: "Vancouver",
      price: "$1,200,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,500 sqft",
      imageUrl: "https://photos.zillowstatic.com/fp/b3343d29f8e2499524c090ac1f4dddbd-p_e.jpg",
  },
  {
      id: 56,
      title: "Heritage Home in Kitsilano",
      location: "Vancouver",
      price: "$1,800,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,200 sqft",
      imageUrl: "https://www.engelvoelkers.com/images/5c277e0a-b5d0-405f-af26-f8775784c939/single-family-in-north-vancouver-british-columbia?w=576&h=432",
  },
  {
      id: 57,
      title: "Waterfront Penthouse in Coal Harbour",
      location: "Vancouver",
      price: "$3,500,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,800 sqft",
      imageUrl: "https://www.vmcdn.ca/f/files/via/import/2018/11/07071159_luxury_home_vancouver.jpg;w=960",
  },
  {
      id: 58,
      title: "Family-Friendly Home in East Vancouver",
      location: "Vancouver",
      price: "$900,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,600 sqft",
      imageUrl: "https://drkdesign.files.wordpress.com/2021/07/r2599074_3.jpg",
  },
  {
      id: 59,
      title: "Modern Loft in Yaletown",
      location: "Vancouver",
      price: "$1,000,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sqft",
      imageUrl: "https://www.northshorerealty.ca/uploads/gb3.jpg",
  },
  {
      id: 60,
      title: "Luxury Estate in Shaughnessy",
      location: "Vancouver",
      price: "$8,000,000",
      bedrooms: 6,
      bathrooms: 7,
      area: "8,000 sqft",
      imageUrl: "https://www.mikestewart.ca/wp-content/uploads/2018/05/brookhouse-heritage-house.jpg",
  },
  //Victoria
  {
      id: 61,
      title: "Luxury Condo in Downtown Victoria",
      location: "Victoria",
      price: "$900,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,300 sqft",
      imageUrl: "https://darrendayrealestate.com/_media/Images/01-exterior-605-wide.jpg",
  },
  {
      id: 62,
      title: "Heritage Home in James Bay",
      location: "Victoria",
      price: "$1,500,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,000 sqft",
      imageUrl: "https://u.realgeeks.media/homeinvictoria/realtor-victoria-bc-main-image-hvic.png",
  },
  {
      id: 63,
      title: "Waterfront Estate in Oak Bay",
      location: "Victoria",
      price: "$5,000,000",
      bedrooms: 5,
      bathrooms: 5,
      area: "6,000 sqft",
      imageUrl: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1008i215%2Fmebe03d5zn3dmnpg22ycsfn362i215&option=N&h=472&permitphotoenlargement=false",
  },
  {
      id: 64,
      title: "Family-Friendly Home in Saanich",
      location: "Victoria",
      price: "$800,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "1,800 sqft",
      imageUrl: "https://www.clippervacations.com/magazine/wp-content/uploads/sites/10/2018/08/Wesley-Brandon-Rosenblum_CROP.jpg",
  },
  {
      id: 65,
      title: "Modern Loft in Fernwood",
      location: "Victoria",
      price: "$700,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,100 sqft",
      imageUrl: "https://www.thepinnaclelist.com/wp-content/uploads/2017/04/01-Armada-House-Residence-Arbutus-Rd-Victoria-BC-Canada.jpg",
  },
  {
      id: 66,
      title: "Seaside Cottage in Esquimalt",
      location: "Victoria",
      price: "$1,200,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,500 sqft",
      imageUrl: "https://sothebysrealty.ca/insightblog/wp-content/uploads/2023/02/236-Dallas-Road-Victoria-BC-sothebys-international-realty-canada.jpg",
  },
  //Surrey
  {
      id: 67,
      title: "Modern Condo in Central Surrey",
      location: "Surrey",
      price: "$500,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,000 sqft",
      imageUrl: "https://www.engelvoelkers.com/images/4926122e-0d74-489c-9cea-802025544c6b/single-family-in-surrey-british-columbia",
  },
  {
      id: 68,
      title: "Family Home in Fleetwood",
      location: "Surrey",
      price: "$800,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,000 sqft",
      imageUrl: "https://www.engelvoelkers.com/images/635c9b9f-b763-4dfe-bcff-707ec461889a/single-family-in-south-surrey-british-columbia",
  },
  {
      id: 69,
      title: "Riverside Cottage near Fraser River",
      location: "Surrey",
      price: "$650,000",
      bedrooms: 2,
      bathrooms: 1,
      area: "1,200 sqft",
      imageUrl: "https://mediavault.point2.com/p2h/listing/d2aa/2db3/1d3e/dcd813fb73d1f5cc8c82/nwm_large.jpg",
  },
  {
      id: 70,
      title: "Townhouse in Guildford",
      location: "Surrey",
      price: "$700,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,400 sqft",
      imageUrl: "https://s1.rea.global/img/400x300-fit/realtor/ca/734777f3a0b7fe7a90ab2d22f81a11f9.jpg",
  },
  {
      id: 71,
      title: "Modern Loft in City Centre",
      location: "Surrey",
      price: "$550,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sqft",
      imageUrl: "https://www.engelvoelkers.com/images/bf79d763-3d62-400e-bba6-cfd6098cb0a6/single-family-in-surrey-british-columbia",
  },
  {
      id: 72,
      title: "Luxury Mansion in South Surrey",
      location: "Surrey",
      price: "$2,500,000",
      bedrooms: 6,
      bathrooms: 4,
      area: "4,000 sqft",
      imageUrl: "https://img.jamesedition.com/listing_images/2023/06/07/12/54/09/dc5d1e62-555f-49f5-91ef-6c6536c00ad5/je/760x470xc.jpg",
  },
  //Burnaby
  {
      id: 73,
      title: "Modern Condo in Metrotown",
      location: "Burnaby",
      price: "$600,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,100 sqft",
      imageUrl: "https://img.jamesedition.com/listing_images/2023/06/07/12/54/09/dc5d1e62-555f-49f5-91ef-6c6536c00ad5/je/760x470xc.jpg",
  },
  {
      id: 74,
      title: "Family Home in Brentwood",
      location: "Burnaby",
      price: "$950,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,200 sqft",
      imageUrl: "https://img.jamesedition.com/listing_images/2023/09/28/14/08/18/13e331c4-0839-404d-9492-46be48251425/je/1040x620xc.jpg",
  },
  {
      id: 75,
      title: "Riverside Cottage near Deer Lake",
      location: "Burnaby",
      price: "$750,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,500 sqft",
      imageUrl: "https://www.engelvoelkers.com/images/9aa7aca3-ea58-4978-96ef-8b231e43f486/single-family-in-burnaby-british-columbia",
  },
  {
      id: 76,
      title: "Townhouse in Highgate",
      location: "Burnaby",
      price: "$700,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,400 sqft",
      imageUrl: "https://img.jamesedition.com/listing_images/2023/11/23/15/37/42/b3da5492-fa7e-4230-bd38-0d36372c1055/je/760x470xc.jpg",
  },
  {
      id: 77,
      title: "Modern Loft in Lougheed",
      location: "Burnaby",
      price: "$550,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,000 sqft",
      imageUrl: "https://www.vmcdn.ca/f/files/burnabynow/images/burnabypoint2buckinghamheightsluxuryhomepalettecreative2023front.JPG;w=960;h=640;bgcolor=000000",
  },
  {
      id: 78,
      title: "Luxury Mansion in Burnaby Mountain",
      location: "Burnaby",
      price: "$3,000,000",
      bedrooms: 6,
      bathrooms: 5,
      area: "5,000 sqft",
      imageUrl: "https://assets-listings.rew.ca/listing/brc_idx_rew/262882107/00_R2860480_01.jpeg?crop=",
  }
];


//******************************************************** */
const queryString = window.location.search;
// Parse the query string into key-value pairs
const params = new URLSearchParams(queryString);
// Get the value of the 'city' parameter
const city = params.get('city');
//******************************************************** */

for (let i = 0; i < propertyListings.length; i++) {
  const property = propertyListings[i]; // Access current property object

  if (property.location == city) {

      document.getElementById("main-div").innerHTML += `
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
              <button type="button" class="btn btn-sm btn-outline-secondary viewBtn" id="viewBtn" onclick = "rentpage()">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-muted">${property.id}</small>
          </div>
        </div>
      </div>
    </div>
  `;
  }
 
}

function rentpage(){
    console.log('brhhhh')
    window.location.href = 'rent.html';
}


// database getting data
const mainDiv = document.getElementById('main-div');

function createPropertyCard(property) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col', 'cursor');

    cardDiv.innerHTML = `
    <div class="card shadow-sm">
      <img src="${property.imgUrl}" class="bd-placeholder-img card-img-top" width="100%" height="225" aria-label="Property Image" alt="Property Image">
      <div class="card-body">
        <h5 class="card-title">${property.title}</h5>
        <p class="card-text">Location: ${property.location}</p>
        <p class="card-text">Price: ${property.price}</p>
        <p class="card-text">Bedrooms: ${property.bedrooms}</p>
        <p class="card-text">Bathrooms: ${property.bathrooms}</p>
        <p class="card-text">Area: ${property.area}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" id="viewBtn">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-muted">${property.id}</small>
        </div>
      </div>
    </div>
  `;

    return cardDiv;
}


// display data for user database
function showData(){

  fetch('/showproperty', {
    method: "GET"
  })
  .then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log("Data received successfully:", data);
    // Process the received data here

    for (let i = 0; i < propertyListings.length; i++) {
        const property = propertyListings[i]; // Access current property object
      
            document.getElementById("main-div").innerHTML += `
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
                    <button type="button" class="btn btn-sm btn-outline-secondary viewBtn" id="viewBtn" onclick = "rentpage()">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">${property.id}</small>
                </div>
              </div>
            </div>
          </div>
        `;
       
      }

  
    console.log(data[0].imgUrl)
  for(let i = 0; i < data.length; i++ ){
    document.getElementById("main-div").innerHTML += `
    <div class="col cursor">
      <div class="card shadow-sm">
        <img src="${data[i].imgUrl}" class="bd-placeholder-img card-img-top" width="100%" height="225" aria-label="Property Image" alt="Property Image">
        <div class="card-body">
          <h5 class="card-title">${data[i].title}</h5>
          <p class="card-text">Location: ${data[i].location}</p>
          <p class="card-text">Price: ${data[i].price}</p>
          <p class="card-text">Bedrooms: ${data[i].bedrooms}</p>
          <p class="card-text">Bathrooms: ${data[i].bathrooms}</p>
          <p class="card-text">Area: ${data[i].area}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-muted">${data[0]._id}</small>
          </div>
        </div>
      </div>
    </div>
  `;
  }
    
  
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });


 }
showData();


function fetchProperties(city) {
    fetch(`/properties?city=${city}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        // .then(data => {
        //     data.forEach(property => {
        //         const card = createPropertyCard(property);
        //         mainDiv.appendChild(card);
        //     });
        // })
        .catch(error => {
            console.error('Error fetching property data:', error);
        });
}

fetchProperties(city);


// Get references to the select element and the Apply button
const sortSelect = document.getElementById('sort');
const applyButton = document.getElementById('applyFilters');

// Define variables to track sorting options
let valueAscending = false;
let valueDescending = false;

// Add event listener to the select element to track changes
sortSelect.addEventListener('change', function() {
    // Update sorting variables based on selected option
    if (sortSelect.value === 'ascending') {
        valueAscending = true;
        valueDescending = false;
    } else if (sortSelect.value === 'descending') {
        valueAscending = false;
        valueDescending = true;
    } else {
        valueAscending = false;
        valueDescending = false;
    }
});

let filteredItems = propertyListings.slice();

// Add event listener to the Apply button to trigger sorting
applyButton.addEventListener('click', function() {
    filterListings();
    document.getElementById("main-div").innerHTML = '';

    // Render filtered listings for the selected city
    for (let i = 0; i < filteredItems.length; i++) {
        const property = filteredItems[i];
        console.log(property) // Access current property object
  
        if (property.location == city) {
            document.getElementById("main-div").innerHTML += `
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
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small class="text-muted">${property.id}</small>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
  
  
});

// Function to filter listings based on sorting options
function filterListings() {
     // Create a copy of propertyListings array

    if (valueAscending) {
        // Sorting logic for ascending order\
        filteredItems.sort((a, b) => {
            const priceA = parseFloat(a.price.replace('$', '').replace(/,/g, ''));
            const priceB = parseFloat(b.price.replace('$', '').replace(/,/g, ''));
            return priceA - priceB;
        });
    } else if (valueDescending) {
        // Sorting logic for descending order
        filteredItems.sort((a, b) => {
            const priceA = parseFloat(a.price.replace('$', '').replace(/,/g, ''));
            const priceB = parseFloat(b.price.replace('$', '').replace(/,/g, ''));
            return priceB - priceA;
        });
    }
}




  //Clear previous listings


