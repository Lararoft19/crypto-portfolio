import React, { useState, useEffect } from 'react';

function App() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/portfolio')
      .then(response => response.json())
      .then(data => setPortfolios(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="Crypto Portfolio App">
      <h1>Crypto Portfolio</h1>
      <ul>
        {portfolios.map((portfolio) => (
          <li key={portfolio._id}>{portfolio.name}: {portfolio.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

