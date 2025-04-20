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
                        <strong>{app.name}</strong> | {app.email} | {app.role}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminDashboard;