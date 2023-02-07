import React from 'react'

function Event() {
    const shoot=()=>{
        alert ("great shot");
    }
  return (
    <div>
      <button onClick={shoot}>click me</button>
    </div>
  )
}

export default Event
