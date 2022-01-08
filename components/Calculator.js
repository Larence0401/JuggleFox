import React from 'react'


const Calculator = ({children}) => {


    return (
        <div id="calculator" className="flex w-fill p-8 h-3/4">
            {children}
        </div>
    )
}

export default Calculator


//1) number pressed // check if number => store as operand 
//2) operator pressed // check if NAN => // calc started in reducer
//3) 2nd number pressed //