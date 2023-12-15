import React from "react";
import BusinessList from "./components/BusinessList";
import "./App.css";

const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "ITALIAN",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [];

for (let i = 0; i < 10; i++) {
  businesses.push(business);
}

function App() {
  return (
    <div>
      <BusinessList businesses={businesses} />;
    </div>
  );
}

export default App;
