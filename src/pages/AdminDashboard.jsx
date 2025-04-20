import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { useNavigate } from 'react-router-dom';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";
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

export default function CoordinatorHomePage() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "volunteerApplications"),
      (snapshot) => {
        const appData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApplications(appData);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6", fontFamily: "Helvetica, sans-serif" }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: "16px 32px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img src={NAMILogo} alt="NAMI Logo" style={{ maxWidth: "100px", maxHeight: "100px" }} />
        </div>

        <button
        onClick={() => navigate('/staff_login')}
        style={{
          padding: "8px 20px",
          backgroundColor: "#3174ad",
          color: "white",
          fontWeight: "bold",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Sign Out
        </button>
      </header>

      <div style={{ maxWidth: "1120px", margin: "24px auto", padding: "24px" }}>
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#3174ad", marginBottom: "16px" }}>Calendar of Events</h2>
          <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#3174ad", marginBottom: "16px" }}>Volunteer Applications</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {applications.map((app) => (
              <li key={app.id} style={{
                backgroundColor: "#ffffff",
                padding: "16px",
                borderRadius: "8px",
                marginBottom: "16px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)"
              }}>
                <strong>{app.first_name} {app.last_name}</strong><br />
                {app.email} | {app.phone}<br />
                {app.address}, {app.city}, {app.state} {app.zip_code}<br />
                Lived Experience: <strong>{app.lived_experience}</strong> | One Year Commitment: <strong>{app.one_year_commitment}</strong><br />
                <strong>Previous Classes:</strong> {app.previous_classes?.join(', ') || 'None'}<br />
                <strong>Lived Experience Opportunities Interested In:</strong> {app.lived_opportunities?.join(', ') || 'None'}<br />
                <strong>General Opportunities Interested In:</strong> {app.general_opportunities?.join(', ') || 'None'}<br />
                <strong>Languages:</strong> {app.languages || 'None'}<br />
                <strong>Other Info:</strong> {app.additional_information || 'N/A'}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
