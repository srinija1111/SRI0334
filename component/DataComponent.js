import React, { useState, useEffect } from 'react';

function DataComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('data.json'); // Replace 'data.json' with the path to your JSON file
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Data component</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            Name: {item.name}, Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataComponent;



