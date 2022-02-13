import React from 'react';
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/context";
import { ContextProvider } from "../store/context";
import FirebaseFirestoreService from "../FirebaseFirestoreService";
import Table from '../components/Table';
import Link from 'next/link'

const hallofFame = () => {
 
  return <div className='flex flex-col text-2xl justify-start bg-blue-300 h-screen'>
            <div className='w-full bg-gradient-to-r from-amber-400 to-amber-300 flex justify-center mb-8'> 
                <h1 className='text-6xl uppercase text-slate-700 inline-block p-8 flex flex-start'>Hall of fame</h1>
                <Link href="/">
                    <a className='fixed top-8 right-6 uppercase text-blue-600 text-3xl hover:text-blue-900'>back to game</a>
                </Link>

            </div>
            
            <ContextProvider>
                  <Table/>
            </ContextProvider>

  </div>;
};

export default hallofFame;