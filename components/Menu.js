import React from "react";
import Link from 'next/link'
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/context";
import Authentication from "./Authentication";
import FirebaseFirestoreService from "../FirebaseFirestoreService";
import FirebaseAuthService from "../FirebaseAuthService";
import TopFive from "./TopFive";

const Menu = () => {
  const { state, dispatch } = useContext(Context);
  const { username, isNewSignup, userdata } = state;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const userName = userdata[1] ? userdata[1]['username'] : null
  const displayName = user ? user.providerData[0].displayName : null
  const displayedName = displayName && displayName.length > 0 ? displayName : userName

  FirebaseAuthService.subscribeToAuthChanges(setUser);


 useEffect(async() => {
    if(user) {
      if(isNewSignup) {
        const userName = !user.providerData[0].displayName === "" ? displayName : username
        await FirebaseFirestoreService.createUser(user.uid, userName)
        dispatch({ type: "updateSignupStateToFalse" })
      }
      const userdata = await FirebaseFirestoreService.getUserData(user.uid)
      dispatch({type: 'setUserData', payload: userdata})
    }
 }, [user,username])


  const logout = () => {
    FirebaseAuthService.logoutUser()
    dispatch({type: 'logoutUser'})
  }

  const handleClick = () =>
    {if(user) {logout()} else { 
      dispatch({ type: "openModal" })
      dispatch({ type: "showLoginForm" })
    }}


  return (
    <div className="w-1/6 h-full bg-blue-400 p-4 pl-8 pt-8 flex flex-col">
      <button
        className="w-32 bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-8 uppercase"
        type="button"
        onClick={() => handleClick()}
      >
        {!user ? "sign in" : "sign out"}
      </button>
      {user && <span className="pt-4 pl-2 text-3xl italic pb-2 text-blue-900">{displayedName}</span>}
      {modalIsOpen ? (
        <div
          className="fixed inset-0 bg-black opacity-80 z-48"
          onClick={() => setModalIsOpen(false)}
        ></div>
      ) : null}
      {modalIsOpen ? <Authentication /> : null}
      <div className="border-t-2 border-blue-300 py-4 hover:bg-blue-500 mt-8">
        <Link href="/hallOfFame">
          <a className="text-3xl text-blue-900 pt-4 pl-2 uppercase hover:text-slate-100 inline-box">Hall of Fame</a>
        </Link>
      </div>
      <div className="border-y-2 border-blue-300 py-4 hover:bg-blue-500">
      <Link href="/howItWorks">
        <a className="text-3xl text-blue-900 pt-4 pl-2 uppercase hover:text-slate-100">How to play</a>
      </Link>
      </div>
  
      <TopFive/>
    </div>
  );
};

export default Menu;
