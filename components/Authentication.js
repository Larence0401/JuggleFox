import React, {useState} from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

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

