import React from 'react'
import { useState } from 'react'

function UseState() {
    const [car, setcar] = useState({
        name:"venue",
        model:"sx",
        year:"2020",
        color:"green"

    })
  return (
    <div>
      <h1>my car {car.name} {car.model}</h1>
    </div>
  )
}

export default UseState
