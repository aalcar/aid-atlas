import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../firebase'

function AdminDashboard() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(     
            collection(db, 'volunteerApplications'),
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
        <div>
            <h1>Admin Dashboard</h1>
            <p>Live feed of volunteer applications:</p>
            <ul>
                {applications.map((app) => (
                    <li key={app.id}>
                        <strong>{app.first_name} {app.last_name}</strong> | {app.email} | {app.phone} | {app.address}, {app.city}, {app.state} {app.zip_code}
                        {app.previous_classes}
                        <br></br>
                        Lived Experience: {app.lived_experience} | One Year Commitment: {app.one_year_commitment}
                        <br></br>
                        Lived Opportunities: {app.lived_opportunities} | General Opportunities: {app.general_opportunities}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminDashboard;