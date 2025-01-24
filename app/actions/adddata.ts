import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
    // Your Firebase configuration object goes here
    // You should replace this with your actual Firebase config
 // Your Firebase configuration object goes here
 apiKey: "AIzaSyAdE8-9VwRjiqbKSImyUPu3hugol5jEMWA",
 authDomain: "ssdd-21562.firebaseapp.com",
 projectId: "ssdd-21562",
 storageBucket: "ssdd-21562.firebasestorage.app",
 messagingSenderId: "884523274527",
 appId: "1:884523274527:web:96d8f5c87cc5bfbe3a602a",
 measurementId: "G-0DPHLEMEBZ"
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
