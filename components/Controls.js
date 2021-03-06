import React, {useState} from 'react'
import { useContext,useEffect} from 'react'
import {Context} from '../store/context'

const Controls = () => {

 const {state,dispatch} = useContext(Context)
 const {isRunning} = state

    const buttonClass = isRunning ? "bg-orange-400 hover:bg-orange-500" : "bg-green-700 hover:bg-green-800"
    return (
        <div id="action-buttons" className='flex space-between py-8 pb-12 col-start-1 col-span-3 row-start-4 row-span-1 px-0'>
            <div id="start" 
                className={`w-1/2 p-4 mr-8 h-full text-3xl text-center rounded-md uppercase shadow-lg cursor-pointer ${buttonClass}`}
                onClick={() => dispatch({type: 'startGame'})}
            >{isRunning ? "reset" : "start"}</div>
            <div id="skip" 
                 className='w-1/2 p-4 mr-8 bg-red-500 hover:bg-red-600 h-full text-3xl text-center rounded-md uppercase shadow-lg cursor-pointer'
                 onClick={() => dispatch({type: 'skip'})}>skip</div>
        </div>
    )
}

export default Controls
