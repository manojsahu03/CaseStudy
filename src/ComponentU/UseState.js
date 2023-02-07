import React from 'react'
import { useState } from 'react'

function UseState() {
    const [color,setColor]=useState("red")
  return (
    <div>
        <h1>My favcol is {color}</h1>
      <button onClick={()=>setColor("blue")}>Change Color</button>
      <button onClick={()=>setColor("red")}>Reset</button>
    </div>
  )
}

export default UseState
