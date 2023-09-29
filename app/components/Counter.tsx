
import { useState } from "react";

interface CounterProps {
  incrementValue?: number;
}

const Counter = ({ incrementValue = 1 }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + incrementValue);
  };

  const decrement = () => {
    setCount(count - incrementValue);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-[25px] mx-2">
       <p className='font-bold my-2'>Count: {count}</p>

  <div className='flex flex-row gap-10'> 
  
    <button  onClick={increment} type="button" className=" text-white bg-green-700 hover:bg-green-800   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600">Increment</button>


        <button onClick={decrement}  type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Decrement </button>
      
</div>
     
    </div>
  );
};

export default Counter;