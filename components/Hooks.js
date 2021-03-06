import React, {useEffect } from 'react'
import {useContext} from 'react'
import {Context} from '../store/context'
import CheckIcon from '@mui/icons-material/Check';

const Hooks = () => {

    const {state,dispatch} = useContext(Context)
    const {operand,randomNumber,checkedHooks,clickedFields} = state
    const hooks = [0,0,0,0,0]
    const isSolved = operand === randomNumber && clickedFields.length > 2

    useEffect(() => isSolved ? dispatch({type: 'checked'}) : null,[operand,clickedFields])
    useEffect(() =>  checkedHooks === 5 ? dispatch({type: 'gameIsCompleted'}) : null, [checkedHooks])

    return (
        <div id="hooks" className="pb-8 flex self-start row-start-1 col-start-1 col-span-3">
                {hooks.map((el,i) =>    { 
                                        const hookColor = i + 1 <= checkedHooks ? "text-green-600" : "text-slate-800"
                                        return (<span key={i} className={`text-8xl ${hookColor}`}>
                                                        <CheckIcon sx={{ fontSize: 96}}/>
                                                </span>)
                                        })
                }
        </div>
    )
}

export default Hooks
