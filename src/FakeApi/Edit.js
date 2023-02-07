import React from 'react'
import { Link } from 'react-router-dom'

function Edit() {
  return (
    <div className='row'>
        <div className='col-md-6'>
            <div className='bg-primary p-1 text-center'>
                <h1>Edit Data</h1>
            </div>
            <div className='mb-2 mt-2'>
        <Link to='/'>
            <button className='btn btn-info'>Read Data</button>
        </Link>
        </div>
            <form>
                <div className='form-group'>
                    <label>Enter Name:</label>
                    <input type='text'placeholder='Name'  className='form-control'  ></input>
                </div><br>
                </br>
                
                <div className='form-group'>
                    <label>Enter Age:</label>
                    <input type='number'placeholder='Age' className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label>Enter Email:</label>
                    <input type='email'placeholder='Email' className='form-control'></input>
                </div>
                <br/>
                <div className='d-grid'>
                <input type='submit'value='Update'className='btn btn-primary'/>
                </div>
            </form>
        </div>
      
    </div>
  )
}
      

export default Edit
