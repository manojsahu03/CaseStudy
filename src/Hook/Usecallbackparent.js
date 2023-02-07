import React, { useCallback, useState } from "react";
import UsecallbackChild from "./UsecallbackChild"
export default function Usecallbackparent() {

  const [x, setNumber_x] = useState(20);

  const [y, setNumber_y] = useState(5);

  let callFun=useCallback(()=>{

    console.log("I am a callback function");
  },[]);
  
  // let callFun=()=>{
  //   console.log("I am a callback function");

  // }
  return (
    <div>
      <h1>New value of x :{x}</h1>
      <h2>New value of y :{y}</h2>
      <UsecallbackChild callFun={callFun}/>
      <button onClick={() => setNumber_x(x + 1)}>Increment x</button>
      <button onClick={() => setNumber_y(y * 5 )}>Multiply y</button>
    </div>
  );
}
