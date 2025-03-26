import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtao5yn3yKnQk09yfW7DLD9k4Fk_umdHY",
  authDomain: "sasasas-7fa2b.firebaseapp.com",
  projectId: "sasasas-7fa2b",
  storageBucket: "sasasas-7fa2b.firebasestorage.app",
  messagingSenderId: "677535894583",
  appId: "1:677535894583:web:02178b3061e21d92da43b2",
  measurementId: "G-ZEYXJ20D6D"
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
