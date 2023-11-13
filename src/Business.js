import React from 'react';

const restaurant = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

function Business() {
  return (
    <div>
      <img src={restaurant.imageSrc} alt="restaurant"/>
      <h1>{restaurant.name}</h1>
      <h1>{restaurant.address}</h1>
      <h1>{restaurant.city}</h1>
      <h1>{restaurant.state}</h1>
      <h1>{restaurant.zipCode}</h1>
      <h1>{restaurant.category}</h1>
      <h1>{restaurant.rating}</h1>
      <h1>{restaurant.reviewCount}</h1>
    </div>
  )
}

export default Business;
