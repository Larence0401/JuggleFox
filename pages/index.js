import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Operands from "../components/Operands";
import Operators from "../components/Operators";
import Controls from "../components/Controls";
import RandomNumber from "../components/RandomNumber";
import StopWatch from "../components/StopWatch";
import Hooks from "../components/Hooks";
import Display from "../components/Display";
import Highscore from "../components/Highscore";
import {useReducer} from 'react'
import {ContextProvider} from "../store/context";
import Calculator from "../components/Calculator";


export default function Home() {

  return (
    <ContextProvider>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
            crossOrigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </style>
      </head>
      <div id="container" className="flex bg-blue-300 w-full h-screen">
        <div
          id="container_left"
          className="w-1/2 h-full flex flex-col space-between"
        >
          <Display />
          <Calculator>
            <Operands />
            <Operators />
          </Calculator>
        </div>
        <div
          id="container_right"
          className="w-1/3 h-full flex flex-col p-8 space-between"
        >
          <StopWatch />
          <div className="w-fill h-3/4 grid grid-cols-3 grid-rows-4 p-12 pr-0 pb-0">
            <Hooks />
            <RandomNumber />
            <Highscore />
            <Controls />
          </div>
        </div>
        <div className="w-1/6 h-full bg-blue-500"></div>
      </div>
    </ContextProvider>
  );
}
