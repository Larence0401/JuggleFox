import React from 'react'
import { useContext} from 'react'
import {Context} from '../store/context'

const Operators = () => {

    const {state,dispatch} = useContext(Context)
    const {operator} = state

    return (
        <div id="operators" className='w-1/4 h-full grid grid-cols-1 rows-4 gap-4 ml-4 pl-16'>
            <div className='bg-slate-800 hover:bg-slate-900 rounded-md text-8xl text-slate-300 text-center align-middle font-semibold shadow-xl cursor-pointer'
                    onClick={() => dispatch({type: 'plus'})}>+</div>
            <div className='bg-slate-800 hover:bg-slate-900 rounded-md text-8xl text-slate-300 text-center align-middle font-semibold shadow-xl cursor-pointer'
                    onClick={() => dispatch({type: 'minus'})}>-</div>
            <div className='bg-slate-800 hover:bg-slate-900 rounded-md text-8xl text-slate-300 text-center align-middle font-semibold shadow-xl cursor-pointer'
                    onClick={() => dispatch({type: 'divided'})}>/</div>
            <div className='bg-slate-800 hover:bg-slate-900 rounded-md text-8xl text-slate-300 text-center font-semibold shadow-xl cursor-pointer'
                    onClick={() => dispatch({type: 'times'})}>x</div>
        </div>
    )
}

export default Operators
