import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
    // Your Firebase configuration object goes here
    // You should replace this with your actual Firebase config
    apiKey: "AIzaSyBoqC6S8FvbWhud_PnD6IC4pF61iffe4tI",
    authDomain: "qatar22-d0e6a.firebaseapp.com",
    projectId: "qatar22-d0e6a",
    storageBucket: "qatar22-d0e6a.firebasestorage.app",
    messagingSenderId: "349776944758",
    appId: "1:349776944758:web:6a8dd2558e8ac248570957",
    measurementId: "G-079WEHH5KL"
  }
  
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  
export async function addData(data:any){
    try {
        const docRef = await doc(db, 'pays', data.id!);
        const ref = await setDoc(docRef, data)
  
        console.log("Document written with ID: ", docRef.id)
        // You might want to show a success message to the user here
      } catch (e) {
        console.error("Error adding document: ", e)
        // You might want to show an error message to the user here
      }
}
