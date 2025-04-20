import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

import NAMILogo from "../assets/NAMI_logo.jpg";
import ProfilePic from "../assets/profile.jpg";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

// Sample events
const events = [
  {
    title: "NAMI Family-to-Family Course",
    start: new Date(2025, 3, 1, 18, 30),
    end: new Date(2025, 3, 1, 20, 30),
  },
  {
    title: "NAMI Young Adult Connection Support Group (In-Person)",
    start: new Date(2025, 3, 2, 19, 0),
    end: new Date(2025, 3, 2, 20, 0),
  },
  {
    title: "NAMI Basics Support Group (In-Person)",
    start: new Date(2025, 3, 7, 18, 0),
    end: new Date(2025, 3, 7, 19, 30),
  },
];

export default function VolunteerHomepage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src={NAMILogo} alt="NAMI Logo" style={{ maxWidth: '50px', maxHeight: '50px' }} />
        </div>
        <nav style={{ display: 'flex', gap: '32px', color: '#374151' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#374151' }}>Home</a>
          <a href="#" style={{ textDecoration: 'none', color: '#374151' }}>Progress</a>
          <a href="#" style={{ textDecoration: 'none', color: '#374151' }}>Opportunities</a>
        </nav>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{
            padding: '6px 16px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            backgroundColor: '#ffffff',
            color: '#374151',
            cursor: 'pointer'
          }}>
            Sign in
          </button>
          <button style={{
            padding: '6px 16px',
            borderRadius: '6px',
            backgroundColor: '#374151',
            color: 'white',
            cursor: 'pointer'
          }}>
            Register
          </button>
        </div>
      </header>

      <div style={{
        maxWidth: '1120px',
        margin: '24px auto',
        padding: '24px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          background: "#ffffff",
          color: "#374151",
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'Helvetica, sans-serif',
          marginBottom: '24px'
        }}>
          <img
            src={ProfilePic}
            alt="Profile"
            style={{ maxWidth: '50px', maxHeight: '50px', borderRadius: '50%' }}
          />
          <button type="submit" style={{
            margin: '10px',
            padding: '12px',
            backgroundColor: '#0760B3',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            width: '180px',
            transition: 'background-color 0.3s',
          }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#054A91')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#0760B3')}
          >
            Create new event
          </button>

          <button type="submit" style={{
            margin: '10px',
            padding: '12px',
            backgroundColor: '#0760B3',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            width: '180px',
            transition: 'background-color 0.3s',
          }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#054A91')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#0760B3')}
          >
            Assign hours
          </button>

          <button type="submit" style={{
            margin: '10px',
            padding: '12px',
            backgroundColor: '#0760B3',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            width: '180px',
            transition: 'background-color 0.3s',
          }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#054A91')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#0760B3')}
          >
            Feedback
          </button>
        </div>

        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#1d4ed8',
          marginBottom: '16px',
          fontFamily: 'Helvetica, sans-serif'
        }}>
          April, 2025
        </h2>

        <div style={{
          backgroundColor: 'white',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
      </div>
    </div>
  );
}
