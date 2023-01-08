// firebase config key setup

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// your web app's firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDAN6dvAFofSLODnboKY7e1EIe2hF7ImBg",
  authDomain: "test-93783.firebaseapp.com",
  projectId: "test-93783",
  storageBucket: "test-93783.appspot.com",
  messagingSenderId: "606361447915",
  appId: "1:606361447915:web:551a0f1b7cfed1252e3dae",
  measurementId: "G-72ZW63P73H",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
