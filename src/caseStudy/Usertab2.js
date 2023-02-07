import {
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { fontWeight } from "@mui/system";
import React, { useState } from "react";

import TransitionsModal from "./Modal1";
import {deletedData} from "./Userinfo"
import Alert from "react-dom"
import { Margin } from "@mui/icons-material";


let ls = localStorage.getItem("database");
let local = ls ? JSON.parse(ls) : [];

function Usertab2() {

  const [first, setFirst] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  let deletedData=(index)=>{
    // let local = localStorage.getItem("database")
    local.splice(index,1);
    localStorage.setItem("database",JSON.stringify(local));}
    const tableStyle={
      backgroundColor:"skyblue",
   margin:"20"
    };
    const headerStyle={
     color:"blue"
    }
    

  return (
    <>
      <TableContainer component={Paper} style={tableStyle} elevation={22}>
        <center>
        <Button onClick={() => handleOpen()} variant="contained" >
          Add Task
        </Button>
        </center>
        <Table>
          <TableHead  style={headerStyle} >
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Plan</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {local.map((database,index) => (
              <TableRow key={index} id={index}>
                
                <TableCell>{database.name}</TableCell>
                <TableCell>{database.plan}</TableCell>
                <TableCell>{database.date}</TableCell>
                <TableCell>{database.price}</TableCell>
                <TableCell>
                  <Button variant="contained" color="warning" onClick={()=>{if(window.confirm('Are You Sure To Delete Data??')){deletedData(index);setFirst(!first)}}}>
                    Delete
                  </Button>
                  <Button variant="contained" color="success" >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>

      <TransitionsModal open={open} setOpen={setOpen} />
    </>
  );
}

export default Usertab2;
