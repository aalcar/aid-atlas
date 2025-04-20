import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// firebase configuration!
const firebaseConfig = {
  apiKey: "SIKE",
  authDomain: "volunteer-portal-747ad.firebaseapp.com",
  projectId: "volunteer-portal-747ad",
  storageBucket: "volunteer-portal-747ad.firebasestorage.app",
  messagingSenderId: "647760915710",
  appId: "1:647760915710:web:5d4747a065a7730fdec9af"
};

// intitialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
