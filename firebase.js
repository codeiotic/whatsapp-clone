// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmeEE21oYSniUzVI6qz8OiXdHF_puPlio",
  authDomain: "whatsapp-clone-9d7a8.firebaseapp.com",
  projectId: "whatsapp-clone-9d7a8",
  storageBucket: "whatsapp-clone-9d7a8.appspot.com",
  messagingSenderId: "862332310190",
  appId: "1:862332310190:web:9a76b37e634ffa7ee7133f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
