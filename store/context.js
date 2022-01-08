import {createContext,useReducer } from "react";


const Context = createContext();

const ContextProvider = ({ children }) => {
   
    
const reducer = (state,action) => {
    switch(action.type) {
        case 'startGame': {
            return {
                ... state,
                operand: 0,
                isRunning: !state.isRunning,
                skipped: 0,
                clickedFields: [],
                numArr: []
            }
        }
        case 'skip': {
            return {
                ... state,
                skipped: state.skipped + 1
            }
        }
        case 'plus': {
            return {
                ... state,
                operator: 'add',
                lastBtnIsOperand: false
            }
        }
        case 'minus': {
            return {
                ... state,
                operator: 'subtract',
                lastBtnIsOperand: false
            }
        }
        case 'divided': {
            return {
                ... state,
                operator: 'divide',
                lastBtnIsOperand: false
            }
        }
        case 'times': {
            return {
                ... state,
                operator: 'multiply',
                lastBtnIsOperand: false
            }
        }
        case 'add': {
            return {
                ... state,
                operand: !state.lastBtnIsOperand ? parseInt(state.operand) + parseInt(action.payload.number) : parseInt(state.operand),
                lastBtnIsOperand: true,
                clickedFields: [...state.clickedFields, action.payload.index],
                ArrOfValues: [...state.ArrOfValues, action.payload.number],
                lastValue: action.payload.number,
                validFields: action.payload.validFields,
                calcStarted: true

            }
        }
        case 'subtract': {
            return {
                ... state,
                operand: !state.lastBtnIsOperand ? parseInt(state.operand) - parseInt(action.payload.number) : parseInt(state.operand),
                lastBtnIsOperand: true,
                clickedFields: [...state.clickedFields, action.payload.index],
                lastValue: action.payload.number,
                validFields: action.payload.validFields,
                calcStarted: true
            }
        }
        case 'divide': {
            return {
                ... state,
                operand: !state.lastBtnIsOperand ?   parseInt(state.operand) / parseInt(action.payload.number) : parseInt(state.operand),
                lastBtnIsOperand: true,
                clickedFields: [...state.clickedFields, action.payload.index],
                lastValue: action.payload.number,
                validFields: action.payload.validFields,
                calcstarted: true
            }
        }
        case 'multiply': {
            return {
                ... state,
                operand: !state.lastBtnIsOperand ? parseInt(action.payload.number) * parseInt(state.operand) : parseInt(action.payload),
                lastBtnIsOperand: true,
                clickedFields: [...state.clickedFields, action.payload.index],
                lastValue: action.payload.number,
                validFields: action.payload.validFields,
                calcStarted: true
            }
        }
        case 'setRandomArray': {
            return {
                ... state,
                ArrOfValues: [...action.payload]
            }
        }
    }
}

const initialState = {
    isRunning: false,
    skipped: 0,
    operand: 0,
    operator: 'add',
    lastBtnIsOperand: false,
    clickedFields: [],
    ArrOfValues: [],
    lastValue: 0,
    validFields: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    calcStarted: false
}
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state.operand)
  return <Context.Provider value={{state,dispatch}}>{children}</Context.Provider>;
};

export {ContextProvider,Context};

