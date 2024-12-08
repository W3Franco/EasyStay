import React from 'react';

// Sample data (this would typically come from an API)
const stays = [
  {
    id: 1,
    name: "Cozy Cottage",
    location: "California",
    description: "A cozy place to relax and unwind.",
    available: true,
  },
  {
    id: 2,
    name: "Beachfront Bungalow",
    location: "Florida",
    description: "Enjoy stunning views and modern amenities.",
    available: false,
  },
  {
    id: 3,
    name: "Mountain Retreat",
    location: "Colorado",
    description: "Perfect for a family getaway or romantic retreat.",
    available: true,
  },
  {
    id: 4,
    name: "Urban Loft",
    location: "New York",
    description: "A stylish urban escape in the heart of the city.",
    available: true,
  },
  {
    id: 5,
    name: "Luxury Villa",
    location: "Hawaii",
    description: "An elegant stay with luxurious touches.",
    available: false,
  },
];

export default function ListView() {
  return (
    <div>
      <h1>Available Stays</h1>
      <ul>
        {stays.map((stay) => (
          <li key={stay.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h2>{stay.name}</h2>
            <p><strong>Location:</strong> {stay.location}</p>
            <p><strong>Description:</strong> {stay.description}</p>
            <p><strong>Available:</strong> {stay.available ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}