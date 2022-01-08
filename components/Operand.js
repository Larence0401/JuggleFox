import React from 'react'
import {useContext,useEffect} from 'react'
import {Context} from '../store/context'
import useFieldValidator from '../hooks/useFieldValidator'


const Operand = ({num,i}) => {

    const {state,dispatch} = useContext(Context)
    const {operator,isRunning,clickedFields,lastBtnIsOperand,calcStarted} = state
    let arrOfValidFields = useFieldValidator(num,i)
    let isLastField = clickedFields[clickedFields.length-1] === i

    const fieldData = {number: num,
                       index: i,
                       validFields: arrOfValidFields }
    
        console.log(lastBtnIsOperand)

    const isClicked = clickedFields.includes(i)

    const buttonColor = isClicked ? isLastField ? "bg-slate-600" : "bg-slate-400" : "bg-slate-200"

    const isDisabled = ((clickedFields.length > 0 && arrOfValidFields.indexOf(i) === -1) || (lastBtnIsOperand && calcStarted)) ? "disabled" : null

    const border = arrOfValidFields.indexOf(i) !== -1 ? "border-4 border-slate-600" : null

    const textColor = isLastField ? "text-slate-200" : "text-slate-800"
/*
        useEffect(() => {
           isLastField ? dispatch({type: 'updateState', payload: fieldData}) : null
        }, [clickedFields])
 */  
   
    return (
        <div className={`${buttonColor} ${isDisabled} ${textColor} ${border} box-border text-center align-middle pt-[10%] rounded-md text-8xl shadow-md`}
                    onClick={isRunning && (() => dispatch({type: operator, payload: fieldData}))} >
            {num}
        </div>
    )
}

export default Operand


//-1,+1,-,-3,-4,-5,+3,+4,+5
// arr = adjacent.map(el => el + num)
//arr2 = arr.filter(el => validnum.includes(el))