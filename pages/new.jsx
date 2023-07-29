import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post('https://gtmapp3-pmvgxtzxma-uc.a.run.app/get_responses/', {
        // Optional: Add data to be sent with the POST request in the request body
        json:{"user_input": 'An academy which teaches 9th 10th 11th 12th students to pass with good marks in board examinations'},
      });

      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {/* Display the fetched data */}
      {responseData ? (
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default YourComponent;