// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHbrWXopTL91LcoxvghNKwmA_HmIQw5Bs",
    authDomain: "encoderspro-cyber.firebaseapp.com",
    projectId: "encoderspro-cyber",
    storageBucket: "encoderspro-cyber.appspot.com",
    messagingSenderId: "847467593360",
    appId: "1:847467593360:web:960184ba7ae14cb054e215",
    measurementId: "G-CFXGY5JGXH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);