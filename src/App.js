import logo from './logo.svg';
import './App.css';

import Business from './Business';
// import BusinessList from './BusinessList';

function App() {
  return (
    <div className="App">
      <Business name='MarginOtto Pizzeria' category='Italian' rating={4.5} reviewCount={90} />
    </div>
  );
}

export default App;
