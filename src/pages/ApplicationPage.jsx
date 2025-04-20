import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase.js';

function ApplicationPage() {
    console.log("ApplicationPage component loaded");
  // blank form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  // update as stuff go in
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // hopefully the form submits
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    
    try {
        const docRef = await addDoc(collection(db, "volunteerApplications"), formData);
        console.log("Document written with ID: ", docRef.id);
        alert("Application submitted!");
    } catch (error) {
        console.error('Error submitting form: ', error); // Show data in console if everything explodes
    }
  };

  // basic form
  return (
    <form onSubmit={handleSubmit}>
      <h1>Volunteer Application</h1>

      {/* Name Input */}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      {/* Email Input */}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      {/* Role Dropdown */}
      <label htmlFor="role">Role Interested In:</label>
      <select
        id="role"
        name="role"
        value={formData.role}
        onChange={handleChange}
      >
        <option value="">-- Select --</option>
        <option value="facilitator">Support Group Facilitator</option>
        <option value="presenter">Presenter</option>
        <option value="tabling">Tabling</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ApplicationPage;