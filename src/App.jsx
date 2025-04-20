import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import VolunteerLogin from "./volunteer_login";
import StaffLogin from "./staff_login";

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/volunteer_login" element={<VolunteerLogin />} />
          <Route path="/staff_login" element={<StaffLogin />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
