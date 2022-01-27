import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import React, {useContext} from 'react'
import { app } from "./FirebaseConfig";
import {Context} from './store/context'



const db = getFirestore(app);

const colRef = collection(db, "users");

const createUser = async (uid, username) =>
  await addDoc(colRef, { id: uid, username, times: [] })

const getUsername = (uid) => { 
    const {dispatch} = useContext(Context)
    const q = query(colRef, where("id", "==", uid))
    let username = ""
    onSnapshot(q, (snapshot) => { 
        snapshot.docs.forEach(doc => {
           username = doc.data().username
        })
        
      })
      dispatch(
        {type: 'setUsername', action: username}
      )
      return username
}

const FirebaseFirestoreService = {
  createUser,
  getUsername,
};

export default FirebaseFirestoreService;
