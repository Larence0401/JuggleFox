import React from 'react'
import {useContext,useState,useEffect} from 'react'
import {Context} from '../store/context'
import WinningMessage from './WinningMessage'
import LoginForm from './LoginForm'

const Modal = () => {

    const {state} = useContext(Context)
    const {gameCompleted,loginForm} = state  
    const [modalIsOpen,setModalIsOpen] = useState(false)
  
    useEffect(() => gameCompleted ? setModalIsOpen(true) : setModalIsOpen(false),[gameCompleted])


    return (  
        
        <>   {modalIsOpen ? <div className='fixed inset-0 bg-black opacity-80 z-48' onClick={() => setModalIsOpen(false)}></div> : null}
             {modalIsOpen && loginForm ? <LoginForm/> : null}
             {modalIsOpen && !loginForm ? <WinningMessage/> : null}
        </>
    )
}

export default Modal

//<div className='fixed inset-0 bg-black opacity-80 z-49' onClick={() => setModalIsOpen(false)}></div>