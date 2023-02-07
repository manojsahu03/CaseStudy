import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';


function Create() {
    const [name, setName] = useState(' ');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
const[nameError,setNameError]=useState(false);
const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://63d5586820b08498cbcc50ba.mockapi.io/Crud1-react',{
          e_name:name,
          e_age :age,
          e_email:email, 
        }).then(()=>{
            navigate('/');
        }).catch((err)=>{ 
            console.log(err)
        })}
        function handleName(){
        if(name.length<3){
            setNameError(true);

        }
        else{
            setNameError(false);
        }
        }
    
  return (
    <div className='row'>
        <div className='col-md-6'>
            <div className='bg-primary p-1 text-center'>
                <h1>Create Data</h1>
            </div>
            <div className='mb-2 mt-2'>
        <Link to='/'>
            <button className='btn btn-info'>Read Data</button>
        </Link>
        </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Enter Name:</label>
                    <input type='text'placeholder='Name'  className='form-control' onChange={(e)=>setName(e.target.value)}   required ></input>
                </div><br>
                </br>
                {nameError?"name length should be greater than 3":""}
                <div className='form-group'>
                    <label>Enter Age:</label>
                    <input type='number'placeholder='Age' className='form-control'onChange={(e)=>setAge(e.target.value)} required></input>
                </div>
                <div className='form-group'>
                    <label>Enter Email:</label>
                    <input type='email'placeholder='Email' className='form-control'onChange={(e)=>setEmail(e.target.value)} required></input>
                </div>
                <br/>
                <div className='d-grid'>
                <input type='submit'value='Submit'className='btn btn-primary'/>
                </div>
            </form>
            {name}
            <br/>
            {age}
            <br/>
            {email}
        </div>
      
    </div>
  )
}

export default Create
