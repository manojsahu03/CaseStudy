import React from 'react'
import Child1 from './Child1'

function Parent1() {
    function parentAlert(data){
        alert(data.name);
        console.log(data)
    }
  return (
    <div>
      <Child1 alert={parentAlert}/>
    </div>
  )
}

export default Parent1
