'use client'
import { useState } from "react";

  interface CounterState{
    count:string
  }
const Counter=()=> {
const [state,setState]=useState<CounterState>({count:0})
const increment=()=>{
  setState(prevState=>({...prevState,count:prevState.count+1}))
}

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>shomare:{state.count}</p>
      <button onClick={increment}>afzayesh</button>
    </div>


  );
}


export default Counter