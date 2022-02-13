import React from 'react';
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/context";
import FirebaseFirestoreService from '../FirebaseFirestoreService';


const Table = () => {
    const {state,dispatch} = useContext(Context)
    useEffect(async() => {
        const hof = await FirebaseFirestoreService.getHallofFame()
        dispatch({type: 'setHallOfFame', payload: hof})
},[])
    const {hallOfFame} = state
    let i = 0
  return <div className="flex flex-col p-8 px-12 w-1/4 h-screen mb-8 text-xl text-slate-900 w-full justify-start shadow-lg self-center bg-white opacity-70">
            <div className='flex font-bold uppercase pb-3'>
                <div className='pr-8 pb-2 w-16'>#</div>
                <div className='pr-16 pb-2 w-32'>time</div>
                <div className='pb-2 w-32'>username</div>
            </div>
            <div className='flex flex-row'>
                <div>
                    {hallOfFame.map((el,i) => <div key={i} className='pr-8 pb-3 w-16'>{i+1}</div>)}
                </div>
                <div>
                    {hallOfFame.map((el,i) => <div key={i} className='pr-16 pb-3 w-32'>{el[0]}</div>)}
            </div>
            <div>
                    {hallOfFame.map((el,i) => <div key={i} className='pb-3 w-32'>{el[1]}</div>)}
            </div>
            </div>
  </div>

        
}

export default Table;
