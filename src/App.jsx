import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, toggleStatus } from './boxSlice';

function App() {
  const dispatch =  useDispatch();
   const box1 = useSelector(state =>  state.box); 
  const box2 = useSelector(state => state.box); 
  return (
    <div className="container mx-auto flex justify-evenly items-center h-screen">
      <div className="flex flex-col gap-3 justify-between items-center w-[100px] text-center">
         <h1 className='px-5 py-2 rounded-lg text-white bg-slate-500 w-full'>{box1.count}</h1>
          <button className='px-5 py-2 rounded-lg text-white bg-green-500 w-full' onClick={() => dispatch(increment() )}>+</button>
          <button className='px-5 py-2 rounded-lg text-white bg-yellow-500 w-full'  onClick={( ) => dispatch(decrement())}>-</button>
        <button className='px-5 py-2 rounded-lg text-white bg-red-500 w-full' onClick={() =>  dispatch(toggleStatus())}>Stop</button>
      </div>
      <div className="flex flex-col gap-3 justify-between items-center w-[100px] text-center">
        <h1 className='px-5 py-2 rounded-lg text-white bg-slate-500 w-full'>{box2.count}</h1>
         <button className='px-5 py-2 rounded-lg text-white bg-green-500 w-full' onClick={() =>  dispatch(increment()) }> +</button>
         <button className='px-5 py-2 rounded-lg text-white bg-yellow-500 w-full'  onClick={() => dispatch(decrement())}>-</button>
        <button className='px-5 py-2 rounded-lg text-white bg-red-500 w-full' onClick={() => dispatch(toggleStatus())}>Stop</button>
       </div>
    </div>
  );
}

export default App;
