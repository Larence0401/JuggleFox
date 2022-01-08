import React, {useState} from 'react'
import { useContext,useEffect} from 'react'
import {Context} from '../store/context'

const Controls = () => {



 const {state,dispatch} = useContext(Context)
 const {isRunning} = state
 /*
 const populateArray = () => {
    let array_of_zeros = new Array(16).fill("")
    let array = array_of_zeros.map((el,i) => el = (i % 9) + 1)
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random())
    return shuffledArray
 }

 const randomArray = populateArray()
        

 useEffect(() => {   
                        dispatch({type: 'setRandomArray', payload: randomArray},[isRunning])
                                                            })*/

    const buttonClass = isRunning ? "bg-orange-400" : "bg-green-700"
    return (
        <div id="action-buttons" className='flex space-between py-8 pb-12 col-start-1 col-span-3 row-start-4 row-span-1 px-0'>
            <div id="start" 
                className={`w-1/2 p-4 mr-8 h-full text-3xl text-center rounded-md uppercase shadow-lg ${buttonClass}`}
                onClick={() => dispatch({type: 'startGame'})}
            >{isRunning ? "reset" : "start"}</div>
            <div id="skip" 
                 className='w-1/2 p-4 mr-8 bg-red-500 h-full text-3xl text-center rounded-md uppercase shadow-lg'
                 onClick={() => dispatch({type: 'skip'})}>skip</div>
        </div>
    )
}

export default Controls
