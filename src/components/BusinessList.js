import React from 'react';
import { businesses } from '../businesses';
import Business from './Business';
// import './BusinessList.css';

function BusinessList() {
  return (
    <div>
      {
        businesses.map(business =>
          <Business key={business.id} businessObject={business}/>
        )
      }
    </div>
  )
}

export default BusinessList;
