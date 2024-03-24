import React, { useState, useEffect } from "react";
import "./AppPage.css";

function App() {
  const [savedData, setSavedData] = useState([]);

  const fetchData = () => {
    fetch("http://127.0.0.1:8000/api/retrieve/")
      .then((response) => response.json())
      .then((data) => {
        // Reverse the order of the data array to display the newest entry at the top
        setSavedData(data.reverse());
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData(); // Initial fetch

    // Set up a timer to fetch data periodically (e.g., every 10 seconds)
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000); // 10 seconds in milliseconds

    // Clean up the timer on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="App">
      <div className="center">
        <table className="table">
          <tbody>
            <tr>
              <th>Message</th>
              <th>IP Address</th>
            </tr>
            {savedData.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.text}</td>
                <td>{entry.ip_address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
