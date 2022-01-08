import React from 'react'
import {useState,useEffect,useContext} from 'react'
import {Context} from '../store/context'

const StopWatch = () => {

    const {state} = useContext(Context)
    const {isRunning,skipped} = state
    const [time,setTime] = useState(0)
    let tip = isRunning ? time + (parseInt(skipped) * 300) : time// tip = time including penalties / for each skipped set there is a time penalty of 3 secons added to the time passed

    let tenMilliSecs = tip % 100 >= 10 ? (tip % 100).toString() : "0" + (tip % 100).toString()

    let seconds = Math.floor((tip % 6000)/100) >= 10 ? (Math.floor((tip % 6000)/100)).toString() : "0" + (Math.floor((tip % 6000)/100)).toString()

    let minutes = "0" + (Math.floor(tip / 6000)).toString()

    let timePassed = `${minutes}:${seconds}:${tenMilliSecs}`

    useEffect(() =>  {
        let interval = null
        if(isRunning) {
            interval = setInterval(() => {
                    setTime(prevTime => prevTime + 1)
            },10)
            }    
            else {
                clearInterval(interval)
                setTime(0)
            }
            return () => clearInterval(interval)
        },[isRunning])
    
    return (
        <div id="clock" className='h-1/4 bg-white text-9xl text-slate-700 border-black border-4 rounded-xl border-slate-700 p-8 mb-8 text-right row-start-2'>
            {timePassed}
        </div>
    )
}

export default StopWatch
