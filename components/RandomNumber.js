import React, {useContext,useEffect,useState} from 'react'
import { Context } from '../store/context'

const RandomNumber = () => {

const {state} = useContext(Context)
const {isRunning} = state   
const generateRandomNumber = () => Math.floor(Math.random()*100)
const [randNum,setRandNum] = useState(0)
useEffect(() =>   setRandNum(generateRandomNumber()),[isRunning])

    return (
        <div id="num" className='w-full text-slate-900 text-9xl text-left bg-white row-start-2 row-span-1 col-start-1 col-span-3'>
            {isRunning && randNum}
        </div>
    )
}

export default RandomNumber
