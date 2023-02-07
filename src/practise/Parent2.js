import React from 'react'
import Child2 from './Child2'

function Parent2() {
    function getData(name){
        console.log(name)
    }
  return (
    <div>
      <Child2 getData={getData}/>
    </div>
  )
}

export default Parent2
