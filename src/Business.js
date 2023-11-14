import React from 'react';

// const props = {
//   imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }

function Business(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.category}</h1>
      <h1>{props.rating}</h1>
      <h1>{props.reviewCount}</h1>
    </div>
  )
}

export default Business;
