import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VolunteerLogin from "./volunteer_login";

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<VolunteerLogin />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
