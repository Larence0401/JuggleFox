import React from 'react'
import {useContext,useState,useEffect} from 'react'
import {Context} from '../store/context'
import Authentication from './Authentication'
import FirebaseFirestoreService from '../FirebaseFirestoreService'
import FirebaseAuthService from '../FirebaseAuthService'


const Menu = () => {
    const {state,dispatch} = useContext(Context)
    const {username} = state
    const [modalIsOpen,setModalIsOpen] = useState(false)
    const [user, setUser] = useState(null)
    const usernameFromDB = user ? FirebaseFirestoreService.getUsername(user.uid) : console.log("no user")
    FirebaseAuthService.subscribeToAuthChanges(setUser)

    useEffect(() => {
                      if(user) {FirebaseFirestoreService.createUser(user.uid,username)}
                    },[user])

    const handleClick = () => user ? FirebaseAuthService.logoutUser() : dispatch({type: "openModal"})
    user ? console.log(usernameFromDB) : null

    return (
        <div className="w-1/6 h-full bg-blue-500 p-4 pl-8 pt-8 flex flex-col">
                <button
                className="w-32 bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-8 uppercase"
                type="button"
                onClick={() => handleClick()}
              >
                {!user ? "sign in" : "sign out"}
              </button> 
              { user && user.email}
            {modalIsOpen ? <div className='fixed inset-0 bg-black opacity-80 z-48' onClick={() => setModalIsOpen(false)}></div> : null}
            {modalIsOpen ? <Authentication/> : null}
        </div>
    )
}

export default Menu
