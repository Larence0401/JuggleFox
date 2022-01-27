import React, { useContext, useState, useEffect } from "react";
import FirebaseAuthService from "../FirebaseAuthService"
import FirebaseFirestoreService from "../FirebaseFirestoreService";
import {Context} from '../store/context'

const SignupForm = () => {

  useEffect(() => {console.log('registered' + isRegistered),
                    setIsRegistered(false)},[isRegistered])
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)
  const {state,dispatch} = useContext(Context)

  const [user,setUser] = useState(null)
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputFieldBorder = error ? "border-red-500" : null;
  
  FirebaseAuthService.subscribeToAuthChanges(setUser)

  const handleSubmit = async(event) => {
    event.preventDefault()
    dispatch({type: 'createUser', payload: username})
    FirebaseAuthService.subscribeToAuthChanges(setUser)
    if(password != passwordConfirm) {
      return
    }
    try {
      dispatch({type: 'createUser', payload: username})
      await FirebaseAuthService.signupUser(email,password)
      setUsername("")
      setPassword("")
      
      
    } catch(error) {
      alert(error.message)
    }
  }



  return (
    <div class="mb-2 mx-1 pt-8 bg-slate-200 flex flex-col justify-center pl-4 pb-4 border-b-2 border-slate-300 pr-4">
      <span className="text-red-500 italic mb-4">{error}</span>
      <form onSubmit={handleSubmit}>
      <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          User name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 mb-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="user name"
          value={username}
          onChange={e => setUsername(e.target.value)}
        ></input>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 mb-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></input>
        <div className="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`shadow appearance-none border ${inputFieldBorder} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></input>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            required
            className={`shadow appearance-none border ${inputFieldBorder} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="confirm-password"
            type="password"
            placeholder="******************"
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
          ></input>
        </div>
        <div className="flex items-center justify-left mr-4 pb-4">
          <button
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-8"
            type="submit"
          >
            Sign UP
          </button>
        </div>
        <hr></hr>
        <div className="flex justify-between items-center mt-3">
          <hr className="w-full bg-black"></hr>{" "}
          <span class="p-2 text-gray-400 mb-1">OR</span>
          <hr className="w-full bg-black"></hr>
        </div>
      </form>
      <div className="flex justify-between">
        <button 
        className="uppercase h-12 mt-3 text-white w-full rounded bg-blue-800 hover:bg-blue-900 m-1">
          Facebook
        </button>
        <button
          onClick={FirebaseAuthService.signupWithGoogle}
          className="uppercase h-12 mt-3 text-white w-full rounded bg-red-800 hover:bg-red-900 m-1"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
