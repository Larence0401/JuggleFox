import React from 'react'
import {useContext,useState,useEffect} from 'react'
import {Context} from '../store/context'
import WinningMessage from './WinningMessage'
import Authentication from './Authentication'
import FirebaseAuthService from "../FirebaseAuthService"

const Modal = () => {

    const {state,dispatch} = useContext(Context)
    const {gameCompleted,loginForm,modalIsOpen} = state  
    const [user, setUser] = useState(null)
    FirebaseAuthService.subscribeToAuthChanges(setUser)

    useEffect(() => gameCompleted ? dispatch({type: "openModal"}) : null,[gameCompleted])
    useEffect(() => user ? dispatch({type: "closeModal"}) : null,[user])

    return (  
        
        <>   {modalIsOpen /*&& !currentUser*/ ? <div className='fixed inset-0 bg-black opacity-80 z-48' onClick={() => dispatch({type: "closeModal"})}></div> : null}
             {loginForm && modalIsOpen ? <Authentication/> : null}
             {modalIsOpen && !loginForm && gameCompleted ? <WinningMessage/> : null}
        </>
    )
}

export default Modal

