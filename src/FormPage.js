// FormPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FormPage.css"; // Import your CSS file for this page

function FormPage() {
  const [inputValue, setInputValue] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  useEffect(() => {
    // Fetch user's IP address using ipify
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Display "submitting..." popup
    setIsSubmitting(true);

    try {
      // Make a real API call using axios
      await axios.post("https://updater-67vk.onrender.com/api/save/", {
        text: inputValue,
        ip_address: ipAddress,
      });

      // Set success message
      setSubmitMessage("Text saved successfully");

      // Clear any previous error message
      setErrorMessage("");
    } catch (error) {
      // Handle API request error
      console.error("Error submitting text:", error);

      // Set error message
      setErrorMessage("Error saving text");
    } finally {
      // Hide the "submitting..." popup
      setIsSubmitting(false);

      // Reset the input field
      setInputValue("");
    }
  };

  return (
    <div className="FormPage">
      <div className="center">
        <form onSubmit={handleSubmit} className="form">
          <label>
            Enter Text:
            <input
              name="text"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>

          {/* Display error message below input field */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {isSubmitting && <div className="popup">Submitting...</div>}
          {submitMessage && <div className="popup">{submitMessage}</div>}
        </form>

        
      </div>
    </div>
  );
}

export default FormPage;
