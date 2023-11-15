import React from 'react';
// import '.SearchBar.css';

const sortingOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most reviewed': 'review_count'
};

function SearchBar() {
  return (
    <div>
      <ul>
        {Object.entries(sortingOptions).map(each => (
          <li key={each[0]}>{each[1]}</li>
        ))}
      </ul>
      <input placeholder="Search Businesses"></input>
      <input placeholder="Where?"></input>
      <button>Let's go</button>
    </div>
  )
}

export default SearchBar;
