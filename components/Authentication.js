import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const icon = <FontAwesomeIcon icon={faFacebook} />

const Authentication = () => {

const [LoginSelected,setLoginSelected] = useState(true)

let bgColorLogin = LoginSelected ? "bg-slate-200" : "bg-slate-100"
let bgColorRegister = LoginSelected ? "bg-slate-100" : "bg-slate-200"

  return (
    <div className="fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-white z-50 p-4 rounded-lg flex flex-col w-1/5">
      <div className="flex flex-row">
        <div onClick={() => setLoginSelected(true)} className={`${bgColorLogin} w-2/4 text-center text-2xl text-slate-800 font-semibold hover:font-bold p-4 py-2 border-r-2 border-slate-300 m-1 mb-0`}>
          LOGIN
        </div>
        <div onClick={() => setLoginSelected(false)} className={`${bgColorRegister} w-2/4 text-center text-2xl text-slate-800 font-semibold hover:font-bold p-4 py-2 m-1 border-r-2 border-slate-300 uppercase mb-0`}>
          Register
        </div>
      </div>
      {LoginSelected ? <LoginForm/> : <SignupForm/>}

    </div>
  );
};

export default Authentication;

/*
</div>
<div class="mb-4 mx-1 pt-8 bg-slate-200">
    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
</div>
</div>
<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>

*/
