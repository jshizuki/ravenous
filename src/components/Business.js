import React from "react";
// Manual CSS styling
import "../css/Business.css";
// Material UI styling
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

function Business(props) {
  return (
    <Card variant="outlined" className="card-container">
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={props.businessObject.imageSrc}
        alt={props.businessObject.name}
      />
      <Typography className="name">
        <b>{props.businessObject.name}</b>
      </Typography>
      <div className="info-container">
        <div className="left-content">
          <Typography>{props.businessObject.address}</Typography>
          <Typography>{props.businessObject.city}</Typography>
          <Typography>{props.businessObject.state} {props.businessObject.zipCode}</Typography>
        </div>
        <div className="right-content">
          <Typography className="category">{props.businessObject.category}</Typography>
          <Typography className="rating">{props.businessObject.rating} stars</Typography>
          <Typography className="review-count">
            {props.businessObject.reviewCount} reviews
          </Typography>
        </div>
      </div>
    </Card>
  );
}

export default Business;
