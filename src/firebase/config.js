import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7fsevp0PAwOYzdi5TbMk_WaaYGsfodHw",
  authDomain: "miniblog-929a8.firebaseapp.com",
  projectId: "miniblog-929a8",
  storageBucket: "miniblog-929a8.firebasestorage.app",
  messagingSenderId: "397870205993",
  appId: "1:397870205993:web:181b59faaf84f60aefe038"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };