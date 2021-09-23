
import firebase from 'firebase'
const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyDT3k_U2Jg598l_t-aomow9R0Z3xSmaM7U",
  authDomain: "linkedin-clone-427a0.firebaseapp.com",
  projectId: "linkedin-clone-427a0",
  storageBucket: "linkedin-clone-427a0.appspot.com",
  messagingSenderId: "1052371773660",
  appId: "1:1052371773660:web:6f0bc4c36fea34e83d6c19"
})

 const db=firebaseApp.firestore();
 export const auth=firebase.auth();
 export default db;