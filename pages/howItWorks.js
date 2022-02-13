import React from 'react';
import Link from 'next/link'

const howItWorks = () => {
  return <div className='h-screen w-full bg-blue-100 flex flex-col'>
                <div className='w-full h-1/6 bg-blue-400 uppercase text-blue-100 text-8xl text-center align-middle pt-4'>how to play
                <Link href="/">
                    <a className='fixed top-8 right-6 uppercase text-blue-900 text-3xl hover:text-blue-700'>back to game</a>
                </Link>
                </div>
                <div className="flex flex-col p-8 px-12 h-screen my-8 text-xl text-slate-900 w-1/2 justify-start shadow-lg self-center bg-white opacity-80 px-16 text-2xl">
                        <h2 className='font-semibold'>Juggle Fox is a fun reaction game which is about performing simple calculations in the least amount of time possible.</h2>
                        <br/>
                        <p className='leading-relaxed'>Once you press the start button, a random number in the range of zero to fourty shows up in the right of the screen. 
                        At the same time, 12 numbers covering the range of 1 - 9 populate the calculator buttons in a random order. 
                        The stop watch is running and it is now up to you to perform simple arithemic calculations in order to get the random target number as a result.</p>
                        <p>However, the subsequent constraints apply:</p>
                        <br/>
                        <ul className='list-disc indent-12 list-inside'>
                            <li>Each field can only be clicked once</li>
                            <li>You can freely choose which field to click first</li>
                            <li>All subsequent fields must be adjacent to the field which had been clicked before</li>
                            <li>You need to click at least 3 number fields</li>
                            <li>When dividing numbers, the result must be smooth number</li>
                        </ul>
                        <br/>
                        <p>In case you get stuck you can always press the red <span className='font-semibold'>SKIP</span> button while the game is running. You then get a fresh random set 
                        of numbered fields. However, a <span className='font-semibold'>time penalty of 3 seconds</span> will take effect.</p>
                        <br/>
                        <p>Once you complete a calculation, one of the checkmarks turns green. You need to solve 5 calculations in total in order to complete the game. Your goal import 
                           is to complete the game as fast as possible. 
                        </p>
                        
                </div>
        </div>;
};

export default howItWorks;
