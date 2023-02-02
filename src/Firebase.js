import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNAKqTPL7Hrb3tG6zvmgywPjhva7FqT_8",
  authDomain: "linkedin-clone-yt-eab35.firebaseapp.com",
  projectId: "linkedin-clone-yt-eab35",
  storageBucket: "linkedin-clone-yt-eab35.appspot.com",
  messagingSenderId: "12718131152",
  appId: "1:12718131152:web:8d5e31b9e3003935d89bd5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
