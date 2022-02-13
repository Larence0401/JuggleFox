import React from 'react'
import { app } from "./FirebaseConfig";
import {
    getFirestore,
    collection,
  } from "firebase/firestore"

function useFirestore() {

    const db = getFirestore(app)
    const colRef = collection(db, "users")


  return colRef
   
  
}

export default useFirestore