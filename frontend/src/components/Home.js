import React, { useState, useEffect } from 'react';
import AxiosInstance from '../helpers/Axios';

const Home = () => {
  // Correctly initialize state with `useState`
  const [data, setData] = useState(null);

  // Use `useEffect` for side effects like API calls
  useEffect(() => {
    AxiosInstance
      .get('/api/')
      .then((response) => {
        setData(response.data); // Update state with API response
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      {/* Render data safely */}
      <h1>{data ? JSON.stringify(data) : 'Loading...'}</h1>
    </div>
  );
};

 

export default Home;
