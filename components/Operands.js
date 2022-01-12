import React, {useEffect,useContext} from 'react'
import Operand from './Operand'
import {Context} from '../store/context'

const createRandomArray = () => {
        let array_of_zeros = new Array(16).fill("")
        let array = array_of_zeros.map((el,i) => el = (i % 9) + 1)
        const shuffledArray = array.sort((a, b) => 0.5 - Math.random())
        return shuffledArray
}


let shuffledArray = createRandomArray()


const Operands = () => {

        const {state,dispatch} = useContext(Context)
        const {isRunning,validFields,checkedHooks,ArrOfValues,skipped} = state   
        useEffect(() => {        
                dispatch({type: 'setRandomArray',payload: createRandomArray()})
           }, [isRunning,checkedHooks,skipped])    
        
           let array = !isRunning ? shuffledArray : ArrOfValues.slice(0,16)
           
    return (  <div className='w-3/4 h-full grid grid-cols-4 rows-4 gap-4'>
                        {array.map((num,i) => <Operand num={num} i={i} disabled={validFields.indexOf(i) === -1}></Operand>)}
            </div>    
                
    )
}

export default Operands
