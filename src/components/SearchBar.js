import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Button from 'react-bootstrap/Button';
import '../SearchBar.css';

const sortingOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most reviewed': 'review_count'
};

function SearchBar() {
  return (
    <div>
      <div className="search-options">
        <ul>
          {Object.entries(sortingOptions).map(each => (
            <li key={each[1]}>{each[0]}</li>
          ))}
        </ul>
      </div>
      <div className="search-bar">
        <TextField id="outlined-basic" label="Search Businesses" variant="outlined" />
        <TextField id="outlined-basic" label="Where?" variant="outlined" />
      </div>
      <div className="button">
        <Button variant="contained">Let's go</Button>
      </div>
    </div>
  )
}

export default SearchBar;
