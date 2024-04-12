import React, { useState, useEffect } from 'react';
function DataFetching() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      <h2>Data Fetching</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li> // Assuming each item has a 'name' property
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetching;
