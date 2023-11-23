// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppPage from "./AppPage"; // Assuming you already have this component
import FormPage from "./FormPage"; // Your new FormPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppPage />} />
        <Route path="/add" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
