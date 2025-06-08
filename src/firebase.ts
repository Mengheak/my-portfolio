import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEgHjBavUF0FJwsnANOt61800Bean-U_c",
  authDomain: "my-portfolio-92aab.firebaseapp.com",
  projectId: "my-portfolio-92aab",
  storageBucket: "my-portfolio-92aab.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
