import React, { useState } from "react";
 import "./LoginForm1.css"
function LoginForm() {
  const [values,setValues]=useState({
    FirstName:"",
    LastName:"",
    Age:""
  })
  function changehandle(e){
   SetInputdata({...inputdata,[e.target.name]:e.target.value})
  }
  let{FirstName,LastName,Age}=inputdata;
  function changehandle(){
    setInputarr([...inputarr,{FirstName,LastName,Age}])
    console.log(inputarr)
    console.log(inputdata)
    SetInputdata()
  }

  return (
    <div className="main">
      <h1>Login Form</h1>
      <form onSubmit={loginHandle}>
        <div id={"id1"}></div>
          <label id="fn">FirstName:</label>
          <input type={"text"} id={"m1"} placeholder={"FirstName"} value={iputdata.FirstName} onChange={changehandle}></input>
          <br>
          </br>
          <br></br>
          <label>LastName:</label>
          <input type={"text"} id={"m2"} placeholder={"LastName"} value={inputdata.LastName} onChange={changehandle}></input>
          <br>
          </br>
          <br></br>
          <label> Age</label>
          <input type={"number"} id={"m3"} placeholder={"Enter Age"}></input>
          <br>
          </br>
          <br></br>
        
       <button type="submit" onClick={changehandle}>submit</button>
      </form>
      
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
          </tr>
        </thead>
      
      {/* <LoginForm1/> */}
    </div>
    
  );
}

export default LoginForm;
