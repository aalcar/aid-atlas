import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import VolunteerLogin from "./pages/volunteer_login";
import StaffLogin from "./pages/staff_login";
import AdminDashboard from "./pages/AdminDashboard";
import ApplicationPage from "./pages/ApplicationPage";
import CoordinatorHomePage from "./pages/CoordinatorHomePage";

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/volunteer_login" element={<VolunteerLogin />} />
          <Route path="/staff_login" element={<StaffLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/coordinator-homepage" element={<CoordinatorHomePage />} />
          <Route path="/application" element={<ApplicationPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
