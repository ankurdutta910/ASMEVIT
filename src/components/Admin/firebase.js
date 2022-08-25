import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
      apiKey: "AIzaSyBrqsxfpgvnranZURCMdJqcXqvYXtjv1dg",
      authDomain: "asmeportal.firebaseapp.com",
      projectId: "asmeportal",
      storageBucket: "asmeportal.appspot.com",
      messagingSenderId: "831583795108",
      appId: "1:831583795108:web:c2290b92d03722b34db331",
      measurementId: "G-CGZKGS5MVH"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
