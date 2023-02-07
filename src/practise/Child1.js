import React from 'react'

function Child1(props) {
    const data={name:"manoj",id:"23"};
  return (
    <div>
      <h1>my name is </h1>
      <button onClick={()=>props.alert(data)}>click</button>
    </div>
  )
}

export default Child1
