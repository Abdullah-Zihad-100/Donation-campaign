// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqc8n_lqRYKbrULa6OneXpyXNMJjql14Y",
  authDomain: "dontaion-campaign.firebaseapp.com",
  projectId: "dontaion-campaign",
  storageBucket: "dontaion-campaign.appspot.com",
  messagingSenderId: "419833172840",
  appId: "1:419833172840:web:eff341dc228438031d7cdd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)