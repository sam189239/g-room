import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAaXQxdV9Lr15jQPlkj9yXCW2wKb1npP3o",
    authDomain: "groomba-27fd6.firebaseapp.com",
    projectId: "groomba-27fd6",
    storageBucket: "groomba-27fd6.appspot.com",
    messagingSenderId: "177643143650",
    appId: "1:177643143650:web:b3b5323b0440df1075b9bb",
    measurementId: "G-PSL9Y8FCM9"
  };

firebase.initializeApp(firebaseConfig);
  
const db = firebase.firestore();
const auth = firebase.auth();
const provider = firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default db;
