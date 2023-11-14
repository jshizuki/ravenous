import React from 'react';
// import './Business.css';

function Business(props) {
  return (
    <div>
      <img src={props.businessObject.imageSrc} alt={props.businessObject.name}/>
      <h2>{props.businessObject.name}</h2>
      <p>{props.businessObject.address}</p>
      <p>{props.businessObject.city}</p>
      <p>{props.businessObject.state} {props.businessObject.zipCode}</p>
      <p>{props.businessObject.category}</p>
      <p>{props.businessObject.rating}</p>
      <p>{props.businessObject.reviewCount}</p>
    </div>
  )
}

export default Business;
