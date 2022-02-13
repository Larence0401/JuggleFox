import React from 'react';
import {useState, useEffect} from "react";
import FirebaseAuthService from "../FirebaseAuthService"
import useFirestore from '../useFirestore';
import {
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
 

const TopFive = () => {
  const [user, setUser] = useState(null)
  FirebaseAuthService.subscribeToAuthChanges(setUser)
  const [userData,setUserData] = useState([])
  const colRef = useFirestore()
  const topFive = user && userData && userData.length > 0 ? userData[0]['data']['times'].sort().slice(0,5) : null

useEffect(() => {
  if(!user) {return}
         const unsub =  onSnapshot(query(colRef, where("id", "==", user.uid)),(snapshot) => {
                setUserData(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
          })
},[user])

  return <div className='pt-8'>
    <h2 className='text-2xl text-blue-900 pl-2 pb-4 uppercase font-semibold'>{user ? "Your Top 5 Results" : null}</h2>
    <div>
    {user && userData && userData.length > 0 ? topFive.map((el,i) => <div key={i} className='divide-blue-200 divide-y-2 pb-2 text-2xl text-blue-900 pl-2'>{el}</div>) : null}
  </div>
  
  </div>
};

export default TopFive;
