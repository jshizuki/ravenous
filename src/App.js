import React from 'react';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
// import './App.css';

const mockBusinesses = [
  {
    id: 1,
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  }, {
    id: 1,
    imageSrc: 'https://ctkr.up.seesaa.net/image/gen_nakanosakaue01.jpg',
    name: 'Gen',
    address: 'Nakano Sakaue',
    city: 'Nakano Chuo',
    state: 'Tokyo',
    zipCode: '1640011',
    category: 'Japanese',
    rating: 5.0,
    reviewCount: 70,
  },
  // Add more businesses as needed
];

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList businesses={mockBusinesses}/>
    </div>
  );
}

export default App;
