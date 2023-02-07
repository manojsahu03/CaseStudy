import React from 'react'
import { useState } from 'react'

function Child2(props) {
    const [name, setname] = useState("")
    function handleSubmit(e){
        e.preventDefault();
    props.getData(name)
}
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}></input>
      <button type='submit' onClick={handleSubmit}></button>
    </div>
  )

  }
export default Child2
