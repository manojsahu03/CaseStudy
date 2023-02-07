// import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import {
  Avatar,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
  
} from "@mui/material";
import { padding } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import Button from '@mui/material/Button';
import axios from "axios";


function Register() {
  const [input, setinput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "",
  });
  const backStyle={
    backgroundColor:"skyblue"
  };
  let paperStyle={height:"85vh",padding:20,width:350,margin:"20px auto"}
  let Registerfetch = async () => {
    let response = await axios.post(
      "https://products-jwt.onrender.com/users/register",
      input
    );
    console.log(response);
    let Data = JSON.stringify(response.data);
    localStorage.setItem("token", Data);
    console.log(Data);
  };

  return (
    <Grid align="center" style={backStyle}>
      <Paper elevation={10}style={paperStyle}>
      <h3 style={{color:"blue"}}>Registration</h3>
      <p>Please fill this form to create account</p>
      <TextField
          label="Firstname"
          placeholder="Firstname"
          fullWidth
          required
          onChange={(e) => {
            setinput({ ...input, fname: e.target.value });
            console.log(input);
          }}
        ></TextField>
        <br></br>
        <br></br>
        <TextField
          label="Lastname"
          placeholder="Lastname"
          fullWidth
          required
          onChange={(e) => {
            setinput({ ...input, lname: e.target.value });
            console.log(input);
          }}
        ></TextField>
        <br></br>
        <br></br>
        <TextField
          label="Email"
          placeholder="Email"
          fullWidth
          required
          onChange={(e) => {
            setinput({ ...input, email: e.target.value });
            console.log(input);
          }}
        ></TextField>
        <br></br>
        <br></br>
        <TextField
          label="Password"
          placeholder="Password"
          type="password"
          fullWidth
          required
          onChange={(e) => {
            setinput({ ...input, password: e.target.value });
            console.log(input);
          }}
        ></TextField>
        <br></br>
        <br></br>
        <TextField
          label="Role"
          placeholder="Role"
          fullWidth
          required
          onChange={(e) => {
            setinput({ ...input, role: e.target.value });
            console.log(input);
          }}
        ></TextField>
        <FormControlLabel
          control={<Checkbox  />}
          label="Remember me"
        />
         <Link to='/'>
        <Button type="submit" color="primary" variant="contained"on onClick={Registerfetch} fullWidth >
          Register
        </Button>
        </Link>
      </Paper>
      


    </Grid>
    // 

  );
}

export default Register;
