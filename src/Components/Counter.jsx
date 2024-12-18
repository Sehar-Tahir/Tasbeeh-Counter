import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, reset } from '../features/Counter/counterSlice';

const Counter = () => {

  // step 5 ;-
  //* fetch particular data from slic using - useSlector hook
  const count = useSelector((state) => state.counter.value);

  // step 5 (b) ;-
  //* used to perfom action (perform functionanlity of particular action of reducer) - useDispatch hook
  const dispatch = useDispatch();

  // click handler functions ;-

  function handleIncrement() {
    dispatch(increment());
  }

  function handleReset() {
    dispatch(reset());
  }
  
  return (
    <>

      <div className="bg-red-600 h-[180px] w-[180px] flex flex-col gap-4 justify-center items-center rounded-full border-white border-2
      ">
        <div className='flex flex-col gap-1'>
          <p className='text-white font-bold text-center text-2xl'>{count}</p>
          <button className='bg-white border-black rounded px-2 py-1 font-semibold border-2 text-xs' 
          onClick={handleIncrement}>Tap to Incr. Count</button>
          <button className='bg-white border-black rounded px-2 py-1 font-semibold border-2 text-xs' 
          onClick={handleReset}>Reset</button>
        </div>
      </div>

    </>
  )
}

export default Counter
