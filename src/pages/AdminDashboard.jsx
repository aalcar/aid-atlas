import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { useNavigate } from 'react-router-dom';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import { collection, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore";
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
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const unsubscribeApps = onSnapshot(
      collection(db, "volunteerApplications"),
      (snapshot) => {
        const appData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApplications(appData);
      }
    );

    const unsubscribeVols = onSnapshot(
      collection(db, "currentVolunteers"),
      (snapshot) => {
        const volData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVolunteers(volData);
      }
    );

    return () => {
      unsubscribeApps();
      unsubscribeVols();
    };
  }, []);

  const acceptApplication = async (app) => {
    try {
      await addDoc(collection(db, "currentVolunteers"), app);
      await deleteDoc(doc(db, "volunteerApplications", app.id));
    } catch (error) {
      console.error("Error accepting application:", error);
    }
  };

  const rejectApplication = async (appId) => {
    try {
      await deleteDoc(doc(db, "volunteerApplications", appId));
    } catch (error) {
      console.error("Error rejecting application:", error);
    }
  };

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

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#3174ad", marginBottom: "16px" }}>Volunteer Applications</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
            <thead>
              <tr>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "left" }}>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Lived Exp</th>
                <th>1yr Commit</th>
                <th>Languages</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>{app.first_name} {app.last_name}</td>
                  <td>{app.email}</td>
                  <td>{app.phone}</td>
                  <td>{app.city}</td>
                  <td>{app.state}</td>
                  <td>{app.zip_code}</td>
                  <td>{app.lived_experience}</td>
                  <td>{app.one_year_commitment}</td>
                  <td>{app.languages}</td>
                  <td>
                    <button onClick={() => acceptApplication(app)} style={{ marginRight: "8px", color: 'green', fontWeight: 'bold' }}>✅</button>
                    <button onClick={() => rejectApplication(app.id)} style={{ color: 'red', fontWeight: 'bold' }}>❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#3174ad", marginBottom: "16px" }}>Current Volunteers</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
            <thead>
              <tr>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd", textAlign: "left" }}>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Opportunities</th>
                <th>Assign Event</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((vol) => (
                <tr key={vol.id}>
                  <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>{vol.first_name} {vol.last_name}</td>
                  <td>{vol.email}</td>
                  <td>{vol.phone}</td>
                  <td>{[...(vol.lived_opportunities || []), ...(vol.general_opportunities || [])].join(', ')}</td>
                  <td>
                    <select>
                      <option>Select Event</option>
                      {events.map((event, i) => (
                        <option key={i} value={event.title}>{event.title}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
