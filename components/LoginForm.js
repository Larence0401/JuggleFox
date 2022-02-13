import React, { useRef, useState, useContext } from "react";
import { Context } from "../store/context";
import FirebaseAuthService from "../FirebaseAuthService";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const LoginForm = () => {
  const {state,dispatch} = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [user, setUser] = useState(null)
  FirebaseAuthService.subscribeToAuthChanges(setUser)

  const handleSubmit = async(event) => {
    event.preventDefault()

    try {
      await FirebaseAuthService.loginUser(email,password)
      setEmail("")
      setPassword("")
      dispatch({type: 'setLoginState'})
    } catch(error) {
      alert(error.message)
    }
  }

  const handleSendResetPasswordEmail = async() => {
    if(!email) {
      alert("Missing email!")
      return
    }
    try {
        await FirebaseAuthService.sendPasswordResetMail(email)
        alert("sent the password reset email")
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
          for="emailaddress"
        >
          Email Address
        </label>
        <input
          required
          className="shadow appearance-none border rounded w-full py-2 mb-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="emailaddress"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email address"
        ></input>
        <div className="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="******************"
          ></input>
          <p class="text-red-500 text-xs italic mx-4">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-left mr-4 pb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-8"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
            onClick={handleSendResetPasswordEmail}
          >
            Forgot Password?
          </a>
        </div>
        <hr></hr>
        <div className="flex justify-between items-center mt-3">
          <hr className="w-full bg-black"></hr>{" "}
          <span class="p-2 text-gray-400 mb-1">OR</span>
          <hr className="w-full bg-black"></hr>
        </div>
      </form>
      <div className="flex justify-between">
        <button className="uppercase h-12 mt-3 text-white w-full rounded bg-blue-800 hover:bg-blue-900 m-1">
          <i class="icon"></i>Facebook
        </button>
        <button
          onClick={FirebaseAuthService.loginWithGoogle}
          className="uppercase h-12 mt-3 text-white w-full rounded bg-red-800 hover:bg-red-900 m-1"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
