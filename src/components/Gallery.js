import React, { useState } from 'react';


const Gallery = () => {
  
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const hotels = [
    {
        id: 1,
        name: 'Island Retreat',
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/106338924.jpg?k=c68c41eb5b84df1bf00b1c7e2da047b8b7422ab7a9d141b1e502d5904a07716a&o=&hp=1',
        description: 'A tropical paradise on a private island.',
        price: '$350 per night',
        location: 'New York, USA',
        
      },
   
    {
      id: 2,
      name: 'Beach Resort',
      imageUrl: 'https://www.theindia.co.in/blog/wp-content/uploads/2024/07/praveg-ghoghla-beach-resort-diu-1200x676.jpg',
      description: 'A beautiful resort by the beach.',
      amenities: 'Free Wi-Fi, Pool, Spa',
      price: '$350 per night',
      location: 'New York, USA',
    },
    {
      id: 3,
      name: 'Mountain Retreat',
      imageUrl: 'https://www.letsgomylove.com/wp-content/uploads/2022/09/belarosa-arosa-suisse-hotel-2-1024x619.jpg',
      description: 'Relax and unwind in the mountains.',
      amenities: 'Free Wi-Fi, Pool, Spa',
      price: '$350 per night',
      location: 'New York, USA',
    },
    {
      id: 4,
      name: 'City Stay',
      imageUrl: 'https://cityparkresort.com/images/slider/slider-2.jpg',
      description: 'Modern hotel with a city view.',
      amenities: 'Free Wi-Fi, Pool, Spa',
      price: '$350 per night',
      location: 'New York, USA',
    },
    {
      id: 5,
      name: 'Desert Resort',
      imageUrl: 'https://media.cntraveler.com/photos/548fbc38860c74c1162ca07c/16:9/w_1182,h_788,c_limit/Desert%20Hotels_Wolwedans%20Dunes%20Lodge_Namibia.jpg',
      description: 'An exotic resort in the desert.',
      amenities: 'Free Wi-Fi, Pool, Spa',
      price: '$350 per night',
      location: 'New York, USA',
    },
    {
        id: 6,
        name: 'Jungle Lodge',
        imageUrl: 'https://www.junglehut.in/images/recreation/2.jpg',
        description: 'A serene lodge nestled in the jungle.',
        amenities: 'Free Wi-Fi, Pool, Spa',
        price: '$350 per night',
        location: 'New York, USA',
      },
      {
        id: 7,
        name: 'Snowy Peak Chalet',
        imageUrl: 'https://robdeslauriers.com/wp-content/uploads/2016/09/030MountainChalet.jpg',
        description: 'A cozy chalet with snowy mountain views.',
        amenities: 'Free Wi-Fi, Pool, Spa',
        price: '$350 per night',
        location: 'New York, USA',
      },
      {
        id: 8,
        name: 'Historic Castle Stay',
        imageUrl: 'https://media.architecturaldigest.com/photos/59b93a225c17f056f0f54994/16:9/w_1280,c_limit/2LoughEskeCastleExterioratDusk.jpg',
        description: 'Live like royalty in a historic castle.',
        amenities: 'Free Wi-Fi, Pool, Spa',
        price: '$350 per night',
        location: 'New York, USA',
      },
      {
        id: 9,
        name: 'Riverfront Resort',
        imageUrl: 'https://www.kayak.com/rimg/himg/9a/6d/52/ice-100124-70220725_3XL-452544.jpg?width=1366&height=768&crop=true',
        description: 'A beautiful resort along the river.',
        amenities: 'Free Wi-Fi, Pool, Spa',
        price: '$350 per night',
        location: 'New York, USA',
      },
      {
        id: 10,
        name: 'Vineyard Villa',
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/422749178.jpg?k=bb2f1373aec0726032d2002d817bf09de8d0baf92ae3bac1dd1473a5a1ac60ae&o=&hp=1',
        description: 'A villa surrounded by stunning vineyards.',
        amenities: 'Free Wi-Fi, Pool, Spa',
        price: '$350 per night',
        location: 'New York, USA',
      },
      {
        id: 11,
        name: 'Boutique Hotel',
        imageUrl: 'https://www.koseahotel.com/uploads/nr_photos/1600/home_9075.webp',
        description: 'A chic and modern boutique hotel.',
        amenities: 'Free Wi-Fi, Pool, Spa',
        price: '$350 per night',
        location: 'New York, USA',
      },
      {
        id: 12,
        name: 'Clifftop Escape',
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/329842623.jpg?k=acac8b7bf12f9f0cd5af0a4963d9e7b64d4c31c1d6c14721b9ddb7a4c8c58161&o=&hp=1',
        description: 'A secluded escape on the clifftop.',
        amenities: 'Free Wi-Fi, Pool, Spa',
        price: '$350 per night',
        location: 'New York, USA',
      },
      {
        id: 13,
        name: 'Urban Loft',
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/179492840.jpg?k=fcb4b8abb6236541e3304c4fbdf2e00a6109b498f5d37b9f2a76a7b80e1a8256&o=&hp=1',
        description: 'Stylish loft located in the bustling city center.',
        amenities: 'Free Wi-Fi, Pool, Spa',
        price: '$350 per night',
        location: 'New York, USA',
      },
      {
        id: 14,
        name: 'Safari Lodge',
        imageUrl: 'https://www.hospitalitycourses.co.za/gallery_gen/f2a6f2e8ecb5c78d3ac3ca19558f9d1c_fit.webp',
        description: 'An adventurous safari lodge in the wilderness.',
        amenities: 'Free Wi-Fi, Pool, Spa',
        price: '$350 per night',
        location: 'New York, USA',
      },
      {
        id: 15,
        name: 'Luxury Hotel',
        imageUrl: 'https://soneva-offload-media-library.storage.googleapis.com/wp-content/uploads/2021/09/01173238/14640_Soneva-Fushi-5-Bedrooms-Villa-Villa-37-1600x900.jpg',
        description: 'A luxury hotel in the heart of the city.',
        amenities: 'Free Wi-Fi, Pool, Spa',
        price: '$350 per night',
        location: 'New York, USA',
      },
      
  ];


 
  return (
    <div className="hotel-gallery">
    <h1 className="gallery-title">Our Featured Hotels</h1>
    <div className="gallery-grid">
      {hotels.map((hotel) => (
        <div
          className="gallery-item"
          key={hotel.id}
          onClick={() => setSelectedImage(hotel.imageUrl)}
        >
          <img src={hotel.imageUrl} alt={hotel.name} className="gallery-img" />
          <div className="gallery-overlay">
            <div className="overlay-text">
              <h2>{hotel.name}</h2>
              <p>{hotel.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {selectedImage && (
      <div className="lightbox" onClick={() => setSelectedImage(null)}>
        <div className="lightbox-content">
          <img src={selectedImage} alt="Selected" className="lightbox-img" />
        </div>
      </div>
    )}
  </div>
  );
};

export default Gallery;
