import React from 'react'
import {useEffect,useContext,useState} from 'react'
import {Context} from '../store/context'


const Display = () => {

    const {state} = useContext(Context)
    const {operand,checkedHooks} = state
    const [value,setValue] = useState(operand)

    useEffect(() =>  setValue(operand), [operand])

    return (
        <div id="display" className='p-8 bg-white text-9xl text-slate-700 text-right border-black border-4 rounded-xl border-slate-700 m-8'>
            {!Number.isInteger(value) ? parseInt(value) : value}
        </div>
    )
}

export default Display
