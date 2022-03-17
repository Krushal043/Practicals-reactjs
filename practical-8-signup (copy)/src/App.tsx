import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import Auth from './pages/Auth';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route  path="/" element={<SignupPage />} />
          <Route path="/home" element={<Auth component={HomePage} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
