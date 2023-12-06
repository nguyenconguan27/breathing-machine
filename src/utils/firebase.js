import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-i-3hRItOK7vEhFGH7E0Y-rwX8eRPCPM",
  authDomain: "breathing-machine-bf198.firebaseapp.com",
  databaseURL: "https://breathing-machine-bf198-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "breathing-machine-bf198",
  storageBucket: "breathing-machine-bf198.appspot.com",
  messagingSenderId: "120822442898",
  appId: "1:120822442898:web:72de314358ecbf51a82f4b",
  measurementId: "G-LCZ639J863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);