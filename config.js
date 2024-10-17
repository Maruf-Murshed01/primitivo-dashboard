// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA37NGuefPq0f8xTVJ3L2k_JsrEixnBWrI",
  authDomain: "little-italy-dashboard-f3bbe.firebaseapp.com",
  projectId: "little-italy-dashboard-f3bbe",
  storageBucket: "little-italy-dashboard-f3bbe.appspot.com",
  messagingSenderId: "581620546112",
  appId: "1:581620546112:web:e2c1974e7a95b1185c3da5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;