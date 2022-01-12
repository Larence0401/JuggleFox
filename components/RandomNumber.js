import React, {useContext,useEffect,useState} from 'react'
import { Context } from '../store/context'

const RandomNumber = () => {

const {state,dispatch} = useContext(Context)
const {isRunning,checkedHooks} = state   
const generateRandomNumber = () => Math.floor(Math.random()*40)
const [randNum,setRandNum] = useState(0)

useEffect(() =>   setRandNum(generateRandomNumber()),[isRunning,checkedHooks])
useEffect(() =>   dispatch({type: 'resetAfterSolved', payload: randNum}),[randNum,checkedHooks])

    return (
        <div id="num" className='w-full text-slate-900 text-9xl text-left bg-white row-start-2 row-span-1 col-start-1 col-span-3'>
            {isRunning && randNum}
        </div>
    )
}

export default RandomNumber
