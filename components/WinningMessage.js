import React from 'react'
import {useContext,useState,useEffect} from 'react'
import {Context} from '../store/context'

const WinningMessage = () => {

    const {state,dispatch} = useContext(Context)
    const {finalTime} = state 
    return (
        <div className='fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-white z-50 text-slate-700 p-16 rounded-3xl flex flex-col'>
                <h2 className='text-6xl text-center mb-8'>Congratulations, you won!</h2> 
                <p className='text-3xl text-center leading-relaxed mb-8'>It took you <span className='font-bold text-sky-800'>{finalTime}</span> to complete the game!</p>
                <hr></hr>
                <p className='text-3xl text-center mt-4 font-bold text-slate-700 inline-block bg-slate-100 hover:bg-slate-200 text-center p-4 rounded-xl'
                    onClick={() => dispatch({type: 'showLoginForm'})}>
                    <span className='text-sky-700'>Login / register</span> to save your progress?</p>
        </div>
    )
}

export default WinningMessage
