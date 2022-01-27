import React from 'react'

const Calculator = ({children}) => {

    return (
        <div id="calculator" className="flex w-fill p-8 h-3/4">
            {children}
        </div>
    )
}

export default Calculator

