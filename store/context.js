import {createContext,useReducer } from "react";


const Context = createContext();

const ContextProvider = ({ children }) => {
   
    
const reducer = (state,action) => {
    switch(action.type) {
        case 'startGame': {
            return {
                ... state,
                operator: 'add',
                operand: 0,
                isRunning: !state.isRunning,
                skipped: 0,
                clickedFields: [],
                checkedHooks: 0,
                lastBtnIsOperand: false

            }
        }
        case 'gameIsCompleted' : {
            return {
                ... state,
                isRunning: false,
                gameCompleted: true
            }
        }
        case 'checked' : {
            return {
                ... state,
                checkedHooks: state.checkedHooks + 1,
            }
        }
        case 'skip': {
            return {
                ... state,
                operand: 0,
                clickedFields: [],
                skipped: state.skipped + 1,
                lastBtnIsOperand: false,
                operator: 'add'
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
        case 'updateState': {
            return {
                ... state,
                lastBtnIsOperand: true,
                ArrOfValues: [...state.ArrOfValues, action.payload.number],
                lastValue: action.payload.number,
                validFields: action.payload.validFields

            }
        }
        case 'add': {
            return {
                ... state,
                operand: !state.lastBtnIsOperand ? parseInt(state.operand) + parseInt(action.payload.number) : parseInt(state.operand),
                clickedFields: [...state.clickedFields, action.payload.index]      
            }
        }
        case 'subtract': {
            return {
                ... state,
                operand: !state.lastBtnIsOperand ? parseInt(state.operand) - parseInt(action.payload.number) : parseInt(state.operand),
                clickedFields: [...state.clickedFields, action.payload.index]
            }
        }
        case 'divide': {
            return {
                ... state,
                operand: !state.lastBtnIsOperand ?   parseInt(state.operand) / parseInt(action.payload.number) : parseInt(state.operand),
                clickedFields: [...state.clickedFields, action.payload.index]
            }
        }
        case 'multiply': {
            return {
                ... state,
                operand: !state.lastBtnIsOperand ? parseInt(action.payload.number) * parseInt(state.operand) : parseInt(action.payload),
                clickedFields: [...state.clickedFields, action.payload.index]

            }
        }
        case 'setRandomArray': {
            return {
                ... state,
                ArrOfValues: action.payload
            }
        }
        case 'resetAfterSolved': {
            return {
                ... state,
                randomNumber: action.payload,
                operand: 0,
                clickedFields: [],
                lastBtnIsOperand: false,
                operator: 'add'
               
            }
        }
        case 'saveTime': {
                return {
                ... state,
                finalTime: action.payload
            }               
        }
        case 'showLoginForm': {
            return {
            ... state,
            loginForm: true
        }               
    }
        case 'openModal': {
            return {
                ... state,
                modalIsOpen: true
            }
        }
        case 'closeModal': {
            return {
                ... state,
                modalIsOpen: false,
                loginForm: true
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
    randomNumber: null,
    checkedHooks: 0,
    gameCompleted: false,
    finalTime: '',
    loginForm: false,
    modalIsOpen: false,
    registration: false
}
    const [state, dispatch] = useReducer(reducer, initialState)
  return <Context.Provider value={{state,dispatch}}>{children}</Context.Provider>;
};

export {ContextProvider,Context};

