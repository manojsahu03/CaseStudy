import React, { useEffect } from 'react'
import { useState } from 'react';

function UseEffect() {
    const [count, setcount] = useState(0);
   useEffect(()=>{
    alert('i am clicked')
   },[count])
    
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={()=>{setcount(count+1)}}>click me</button> 
    </div>
  )
}

export default UseEffect
