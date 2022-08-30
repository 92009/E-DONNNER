import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7KegZVL9FuZFdgKazPv877HYGqB8dmRc",
  authDomain: "e-donner.firebaseapp.com",
  projectId: "e-donner",
  storageBucket: "e-donner.appspot.com",
  messagingSenderId: "993301965649",
  appId: "1:993301965649:web:fa3bcff0d49abe7518c170"
};


if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();