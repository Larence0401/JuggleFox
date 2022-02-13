import React from 'react'
import { useContext, useState, useEffect} from "react";
import { Context } from "../store/context";
import FirebaseFirestoreService from "../FirebaseFirestoreService";
import FirebaseAuthService from "../FirebaseAuthService";
import useFirestore from '../useFirestore';
import {
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

const Highscore = () => {
    const colRef = useFirestore()
    const { state,dispatch } = useContext(Context);
    const { gameCompleted, finalTime, userdata, hallOfFame, personalHighscore } = state;
    const [user, setUser] = useState(null);
    const [data,setData] = useState([])
    const personalHighScore = (user && data[0]) ? data[0]['data']['times'].sort()[0] : null
    FirebaseAuthService.subscribeToAuthChanges(setUser);

    useEffect(async() => {
        const hof = await FirebaseFirestoreService.getHallofFame()
        dispatch({type: 'setHallOfFame', payload: hof})
},[])
    useEffect(() => getOverallHighscore(),[hallOfFame])

    const getOverallHighscore = () => {
        if(!hallOfFame) {return}
        const res = hallOfFame
        const highscore = res.length > 0 ? res[0][0] : ""
        return highscore
    }

    useEffect(() => {
        if(!user) {return}
               const unsub =  onSnapshot(query(colRef, where("id", "==", user.uid)),(snapshot) => {
                      setData(snapshot.docs.map(doc => ({
                          id: doc.id,
                          data: doc.data()
                      })))
                })
      
      },[user])

    const overallHighscore = hallOfFame ? getOverallHighscore() : ""

    
    useEffect(() => {
        if(user && gameCompleted) {
            console.log(userdata[0])
            FirebaseFirestoreService.updateResults(finalTime,userdata[0])
        }
    },[finalTime])

    return (
        <div className="row-start-3 flex flex-col py-6 col-span-3 text-3xl">
            <div className='mb-4 text-slate-900'>Personal Highscore: <span className='font-semibold'>{personalHighScore}</span></div>
            <div className='text-slate-900'>Overall Highscore: <span className='pl-4 font-semibold'>{overallHighscore}</span></div>
        </div>
    )
}

export default Highscore
