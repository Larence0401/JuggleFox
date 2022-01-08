import React,{useContext} from 'react'
import { Context } from '../store/context'

const useFieldValidator = (num,i) => {

    const {state} = useContext(Context)
    const {clickedFields,operator,operand,ArrOfValues} = state
    const lastField = clickedFields[clickedFields.length-1]

    let adjacentFields = [-3,1,-5,-4,4,5,-1,3]  
    // lastfield % 4 === (0 || 3) ? rechts mod 3  modulus 2 oder 3 - links mod 0 modulus 0 oder 1 
    let arr1 = []
    if(lastField % 4 === 0) {
        arr1 = adjacentFields.slice(0,7)
    } else if(lastField % 4 === 3) {
        arr1 = adjacentFields.slice(2,9) 
    } else {arr1 = adjacentFields}
    const adjacentIndices = arr1.map(el => el + lastField)
    const validFields = adjacentIndices.filter(el => clickedFields.indexOf(el) === -1)

    let clickableFields = []
    operator === 'divide' ? clickableFields = validFields.filter(el => operand % ArrOfValues[el] === 0) : clickableFields = validFields
    return clickableFields
    
}

export default useFieldValidator
