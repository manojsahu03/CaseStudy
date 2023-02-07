import { click } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'

export default function colorchange() {
    const[color,setColor]=useState["Red"]
    const click=color=>{
        setColor(color)
    }
  return (
    <div className='main'>
        <button onClick={()=>click("green")}>change color</button>
      
    </div>
  )
}
