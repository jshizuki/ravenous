import React from "react";
// Manual CSS styling
import "../css/Business.css";
// Material UI styling
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const example = {
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

function Business() {
  return (
    <Card variant="outlined" className="card-container">
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={example.imageSrc}
        alt={example.name}
      />
      <Typography className="name">
        <b>{example.name}</b>
      </Typography>
      <div className="info-container">
        <div className="left-content">
          <Typography>{example.address}</Typography>
          <Typography>{example.city}</Typography>
          <Typography>{example.state} {example.zipCode}</Typography>
        </div>
        <div className="right-content">
          <Typography className="category">{example.category}</Typography>
          <Typography className="rating">{example.rating} stars</Typography>
          <Typography className="review-count">
            {example.reviewCount} reviews
          </Typography>
        </div>
      </div>
    </Card>
  );
}

export default Business;
