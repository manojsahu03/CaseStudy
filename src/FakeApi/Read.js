import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Read() {
  const [apiData, setApidata] = useState([]);
  function getData() {
   
    axios .get("https://63d5586820b08498cbcc50ba.mockapi.io/Crud1-react")
      .then((response) => {
        setApidata(response.data);
      });
  }
  function handleDelete(id){
    axios.delete(`https://63d5586820b08498cbcc50ba.mockapi.io/Crud1-react/${id}`)
    .then(()=>{
      getData();
       
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className='mb-2 mt-2'>
        <Link to='/create'>
            <button className='btn btn-primary'>Create New data</button>
        </Link>
        </div>
        <tabel className="table table-bordered table table-striped table-dark table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.e_name}</td>
                  <td>{item.e_age}</td>
                  <td>{item.e_email}</td>
                  <td>
                    <Link to='/edit'>
                    <button className="btn btn-primary ">Edit</button>
                    </Link>
                  </td>
                  <td>
                  <button className="btn btn-danger " onClick={()=>{if(window.confirm('Are You Sure To Delete Data??')){handleDelete(item.id)}}}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </tabel>
      </div>
    </div>
  );
}

export default Read;
