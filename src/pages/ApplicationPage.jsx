import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase.js';
import { useNavigate } from 'react-router-dom';

const CLASS_OPTIONS = [
    "Peer to Peer Class",
    "Basics Class",
    "Family to Family Class",
    "Familia a Familia Class",
    "Homefront Class",
    "Connection Support Group",
    "Connection Young Adult Support Group",
    "Basics Support Group",
    "Family Support Group",
    "El Grupo de Apoyo Familiar",
  ];

const LIVED_OPTIONS = [
    "Speaking to large or small groups",
    "Attending a two-day NAMI training (currently all virtual)",
    "Teaching a 6- to 8-session class",
    "Leading or co-leading an ongoing support group",
    "Working with family members supporting a loved one with a mental health condition",
    "Working with people living with a mental health condition",
];

const GENERAL_OPTIONS = [
    "CAN-Do support: providing meals, playing BINGO, or doing activities with residents living with serious mental health conditions. One-day event support: working registration, etc.",
    "Farmer's Market or other event tabling",
    "Administrative: mailings, answering calls, etc.",
    "Communications: social media, email newsletters, etc.",
    "Advocacy: writing letters, contacting legislators",
    "Fundraising",
];

function ApplicationPage() {
    const navigate = useNavigate();

    console.log("ApplicationPage component loaded");
  // blank form
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    lived_experience: '',
    one_year_commitment: '',
    languages: '',
    additional_information: '',
    previous_classes: [],
    lived_opportunities: [],
    general_opportunities: [],
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
        const sanitizedData = Object.fromEntries(
            Object.entries(formData).filter(([key, value]) => {
              if (Array.isArray(value)) return true; // ✅ keep arrays even if empty
              return value !== "" && value !== null;
            })
          );
          
        const docRef = await addDoc(collection(db, "volunteerApplications"), sanitizedData);
        console.log("Document written with ID: ", docRef.id);
        alert("Application submitted!");
        navigate("/thank-you");
    } catch (error) {
        console.error('Error submitting form: ', error); // Show data in console if everything explodes
    }
  };

  // basic form
  return (
    <div style={{
        maxWidth: '800px',
        width: '90%',
        margin: '40px auto',
        padding: '40px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        fontFamily: 'Helvetica, sans-serif'
    }}>
      <form onSubmit={handleSubmit}>
      <h1>Volunteer Interest Form</h1>
    
      <h3>Personal Information</h3>
      <div style={{ textAlign: 'left' }}>
        <input
        type="text"
        id="first_name"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="Enter your first name. EX: John"
        required
        style={{
            width: '100%',
            padding: '12px',
            marginTop: '6px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            backgroundColor: '#f9fafb',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
            fontSize: '14px',
            outline: 'none',
        }}
        />
      </div>

      <div style={{ textAlign: 'left' }}>
        <input
        type="text"
        id="last_name"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Enter your last name. EX: Doe"
        required
        style={{
            width: '100%',
            padding: '12px',
            marginTop: '6px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            backgroundColor: '#f9fafb',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
            fontSize: '14px',
            outline: 'none',
        }}
        />
    </div>

    <div style={{ textAlign: 'left' }}>
        <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email. EX: johndoe@gmail.com"
        required
        style={{
            width: '100%',
            padding: '12px',
            marginTop: '6px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            backgroundColor: '#f9fafb',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
            fontSize: '14px',
            outline: 'none',
        }}
        />
    </div>

    <div style={{ textAlign: 'left' }}>
        <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Enter your address. EX: 397 Hutchison Dr"
        required
        style={{
            width: '100%',
            padding: '12px',
            marginTop: '6px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            backgroundColor: '#f9fafb',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
            fontSize: '14px',
            outline: 'none',
        }}
        />
    </div>

    <div style={{ textAlign: 'left' }}>
        <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number. EX: 555-123-4567"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // or any regex you want
        required
        style={{
            width: '100%',
            padding: '12px',
            marginTop: '6px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            backgroundColor: '#f9fafb',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
            fontSize: '14px',
            outline: 'none',
        }}
        />
    </div>

    <div style={{ textAlign: 'left' }}>
        <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Enter your city. EX: Davis"
        required
        style={{
            width: '100%',
            padding: '12px',
            marginTop: '6px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            backgroundColor: '#f9fafb',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
            fontSize: '14px',
            outline: 'none',
        }}
        />
    </div>

    <div style={{ textAlign: 'left' }}>
        <input
        type="text"
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="Enter your state. EX: California"
        required
        style={{
            width: '100%',
            padding: '12px',
            marginTop: '6px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            backgroundColor: '#f9fafb',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
            fontSize: '14px',
            outline: 'none',
        }}
        />
    </div>

    <div style={{ textAlign: 'left' }}>
        <input
        type="text"
        id="zip_code"
        name="zip_code"
        value={formData.zip_code}
        onChange={handleChange}
        placeholder="Enter your zip code. EX: 95636"
        required
        style={{
            width: '100%',
            padding: '12px',
            marginTop: '6px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            backgroundColor: '#f9fafb',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
            fontSize: '14px',
            outline: 'none',
        }}
        />
    </div>

    <h3>Experiences</h3>
    {/* Role Dropdown */}
    <p>Many volunteer opportunities are reserved for people with lived experience, meaning either you or someone you care about is  living with a mental health condition (https://nami.org/About-Mental-Illness/Mental-Health-Conditions.) </p>
    <label htmlFor="lived_experience">For many volunteer roles, we need people with lived experience who can provide important support, empathy, and information. Do you consider yourself to have lived experience with a mental health condition?</label>
      <select
        id="lived_experience"
        name="lived_experience"
        value={formData.lived_experience}
        onChange={handleChange}
        required
        style={{
            width: '100%',
            padding: '12px',
            marginTop: '6px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            backgroundColor: '#f9fafb',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
            fontSize: '14px',
            outline: 'none',
            color: formData.lived_experience ? '#000' : '#a0a0a0'
          }}
      >
        <option value="">-- Select --</option>
        <option value="True">Yes, I have had a lived experience.</option>
        <option value="False">No, I have not had a lived experience.</option>
      </select>

      <label htmlFor="one_year_commitment">Would you be able to make a one-year commitment to volunteering as a support group leader or class teacher?</label>
      <select
        id="one_year_commitment"
        name="one_year_commitment"
        value={formData.one_year_commitment}
        onChange={handleChange}
        required
        style={{
            width: '100%',
            padding: '12px',
            marginTop: '6px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            backgroundColor: '#f9fafb',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
            fontSize: '14px',
            outline: 'none',
            color: formData.one_year_commitment ? '#000' : '#a0a0a0'
          }}
      >
        <option value="">-- Select --</option>
        <option value="True">Yes, I can commit to volunteering for at least one year.</option>
        <option value="False">No, I cannot commit to volunteering for at least one year.</option>
      </select>

      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
            Have you taken any of these NAMI classes before?
        </label>

        {CLASS_OPTIONS.map((option) => (
            <div key={option} style={{ marginBottom: '8px' }}>
            <label>
                <input
                type="checkbox"
                value={option}
                checked={formData.previous_classes.includes(option)}
                onChange={(e) => {
                    const updated = formData.previous_classes.includes(option)
                    ? formData.previous_classes.filter((item) => item !== option)
                    : [...formData.previous_classes, option];
                    setFormData({ ...formData, previous_classes: updated });
                }}
                style={{ marginRight: '8px' }}
                />
                {option}
            </label>
            </div>
        ))}
    </div>

    <h3>Opportunities</h3>

    <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
            Lived Experience Opportunities
        </label>

        {LIVED_OPTIONS.map((option) => (
            <div key={option} style={{ marginBottom: '8px' }}>
            <label>
                <input
                type="checkbox"
                value={option}
                checked={formData.lived_opportunities.includes(option)}
                onChange={(e) => {
                    const updated = formData.lived_opportunities.includes(option)
                    ? formData.lived_opportunities.filter((item) => item !== option)
                    : [...formData.lived_opportunities, option];
                    setFormData({ ...formData, lived_opportunities: updated });
                }}
                style={{ marginRight: '8px' }}
                />
                {option}
            </label>
            </div>
        ))}
    </div>

    <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
            Opportunities for all Community Members
        </label>

        {GENERAL_OPTIONS.map((option) => (
            <div key={option} style={{ marginBottom: '8px' }}>
            <label>
                <input
                type="checkbox"
                value={option}
                checked={formData.general_opportunities.includes(option)}
                onChange={(e) => {
                    const updated = formData.general_opportunities.includes(option)
                    ? formData.general_opportunities.filter((item) => item !== option)
                    : [...formData.general_opportunities, option];
                    setFormData({ ...formData, general_opportunities: updated });
                }}
                style={{ marginRight: '8px' }}
                />
                {option}
            </label>
            </div>
        ))}
    </div>

    <h3>Additional Information</h3>

    <div style={{ textAlign: 'left' }}>
      <input
      type="text"
      id="languages"
      name="languages"
      value={formData.languages}
      onChange={handleChange}
      placeholder="Enter any spoken languages you know. EX: English, Spanish"
      required
      style={{
          width: '100%',
          padding: '12px',
          marginTop: '6px',
          borderRadius: '8px',
          border: '1px solid #d1d5db',
          backgroundColor: '#f9fafb',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
          fontSize: '14px',
          outline: 'none',
      }}
      />
  </div>
    
    <div style={{ textAlign: 'left' }}>
      <input
      type="text"
      id="additional_information"
      name="additional_information"
      value={formData.additional_information}
      onChange={handleChange}
      placeholder="Enter any additional skills or areas of volunteering you'd be interested in. EX: Mentoring skills"
      required
      style={{
          width: '100%',
          padding: '12px',
          marginTop: '6px',
          borderRadius: '8px',
          border: '1px solid #d1d5db',
          backgroundColor: '#f9fafb',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
          fontSize: '14px',
          outline: 'none',
      }}
      />
  </div>

      <button type="submit" style={{
      width: '100%',
      padding: '12px',
      backgroundColor: '#0760B3',
      color: 'white',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px',
      marginTop: '10px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    }}>Submit</button>

    </form>
    </div>
  );
}

export default ApplicationPage;