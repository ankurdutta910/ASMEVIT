import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"




var firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyBrqsxfpgvnranZURCMdJqcXqvYXtjv1dg",
      authDomain: "asmeportal.firebaseapp.com",
      projectId: "asmeportal",
      storageBucket: "asmeportal.appspot.com",
      messagingSenderId: "831583795108",
      appId: "1:831583795108:web:c2290b92d03722b34db331",
      measurementId: "G-CGZKGS5MVH"
});
  // Initialize Firebase
  var db = firebaseApp.firestore();
  export const auth = getAuth(firebaseApp);
  export const database = getDatabase(firebaseApp);

  export default db
