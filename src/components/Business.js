import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import './Business.css';

function Business(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.businessObject.imageSrc} alt={props.businessObject.name}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h2>{props.businessObject.name}</h2>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>{props.businessObject.address}</p>
          <p>{props.businessObject.city}</p>
          <p>{props.businessObject.state} {props.businessObject.zipCode}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>{props.businessObject.category}</p>
          <p>{props.businessObject.rating}</p>
          <p>{props.businessObject.reviewCount}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default Business;
