// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const initializeFirebase = () => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAXwmcKTQFWVFIpGIkYCi9_3SLG26lT1Bg",
      authDomain: "anise-ecommerce.firebaseapp.com",
      projectId: "anise-ecommerce",
      storageBucket: "anise-ecommerce.appspot.com",
      messagingSenderId: "822308999798",
      appId: "1:822308999798:web:41a055be2eaa2fe05ac557"
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);
}

export default initializeFirebase;
