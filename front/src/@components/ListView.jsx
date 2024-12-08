import React from 'react';
import tempImage from './temp.jpg';

const stays = [
  {
    id: 1,
    name: "Cozy Cottage",
    location: "California",
    description: "A cozy place to relax and unwind.",
    available: true,
    image: tempImage,
  },
  {
    id: 2,
    name: "Beachfront Bungalow",
    location: "Florida",
    description: "Enjoy stunning views and modern amenities.",
    available: false,
    image: tempImage,
  },
  {
    id: 3,
    name: "Mountain Retreat",
    location: "Colorado",
    description: "Perfect for a family getaway or romantic retreat.",
    available: true,
    image: tempImage,
  },
  {
    id: 4,
    name: "Urban Loft",
    location: "New York",
    description: "A stylish urban escape in the heart of the city.",
    available: true,
    image: tempImage,
  },
  {
    id: 5,
    name: "Luxury Villa",
    location: "Hawaii",
    description: "An elegant stay with luxurious touches.",
    available: false,
    image: tempImage,
  },
];

export default function ListView() {
  return (
    <div>
      <h1 style={{ padding: '20px 0', textAlign: 'center' }}>Available Stays</h1>
      <ul>
        {stays.map((stay) => (
          <li key={stay.id} style={{ display: 'flex', marginBottom: '20px', border: '1px solid #ccc', padding: '10px', alignItems: 'center' }}>
            <img 
              src={stay.image} 
              alt={stay.name} 
              style={{ width: '100px', height: 'auto', borderRadius: '5px', marginRight: '10px' }} // Adjust width as needed
            />
            <div>
              <h2>{stay.name}</h2>
              <p><strong>Location:</strong> {stay.location}</p>
              <p><strong>Description:</strong> {stay.description}</p>
              <p><strong>Available:</strong> {stay.available ? "Yes" : "No"}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}