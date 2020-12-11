import app from "firebase/app";

const config = {
  apiKey: "AIzaSyDIKugEGJ-VoWoIUusEvZEKxRwYN-uS2J8",
  authDomain: "genius-brand-ad7f3.firebaseapp.com",
  projectId: "genius-brand-ad7f3",
  storageBucket: "genius-brand-ad7f3.appspot.com",
  messagingSenderId: "565291783185",
  appId: "1:565291783185:web:208770ad2154fba3448db0",
  measurementId: "G-076DTRRSL5",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
//export const db = Firebase.database();
