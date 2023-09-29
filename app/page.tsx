'use client'

import { useState } from 'react';
import CounterComponent from './components/CounterComponent';
import { useDarkMode } from './hooks/useDarkMode';
import Counter from './components/Counter';
export default function Home({ incrementValue = 0 }) {

  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [customIncrement, setCustomIncrement] = useState<number>(incrementValue);


  return (
    <div className={`p-4 ${isDarkMode ? 'dark:bg-gray-900 dark:text-white' : ''} h-screen w-screen flex flex-col justify-center items-center text-[25px] mx-2 `}>

      <button onClick={toggleDarkMode} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        {isDarkMode ? `Disable Dark Mode ☀️ ` : 'Enable Dark Mode  🌙'}
      </button>

      <CounterComponent />

      <hr className="w-60 h-1 mx-auto my-6 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <div className="relative">
        <input
          type="number"
          value={customIncrement}
          onChange={(e) => setCustomIncrement(Number(e.target.value))}
          min="1" // Set a minimum value to ensure a positive increment
          className={`p-4 ${isDarkMode ? 'dark:bg-gray-900 dark:text-white' : ''} border-white`} placeholder=" "

        />

        <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Input Field Counter</label>

      </div>
      <h1 className='text-[25px]'>Counter 2 (Custom Increment)</h1>
      <Counter incrementValue={customIncrement} />
    </div>
  )
}














