import { useEffect, useState } from "react";

export default function App(){

  const [time,setTime]=useState(0);
  const [running,setRunning]=useState(false);
  useEffect(()=>{
    let interval;
    if(running){
        interval=setInterval(()=>{
            setTime((prev)=>prev+10);
        },10)
    }else if(running==false){
      clearInterval(interval);
    }
    return ()=>clearInterval(interval)
  },[running]);
  return(

      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-green-400 ">
          <h1 className="text-4xl font-bold mb-4">Stop Timer</h1>

          <div className="text-6xl mb-8 font-mono">
            <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
            <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
            <span>{("0"+Math.floor((time/10 )%100)).slice(-2)} </span>
          </div>

          <div className="flex space-x-4 text-white">
            <button className={`px-4 py-2 rounded transition ${running?"bg-red-500":"bg-blue-500"}`} onClick={()=>setRunning(!running)}>{running?"stop":"start"}</button>
            <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-600" onClick={()=>setTime(0)}>Reset</button>
          </div>
      </div>
  );
}