import React from "react";
import axios from "axios";
import {
  Avatar,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  // Link,
} from "@mui/material";
import { Password } from "@mui/icons-material";
// import { Button } from "react-bootstrap";
import { useState } from "react";
import { width } from "@mui/system";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useNavigate,Link } from "react-router-dom";
import { blueGrey } from "@mui/material/colors";

function Logins() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 250,
    margin: "20px auto",
  };
  const gridStyle={
    backgroundColor:"skyblue"
  };
  const avatarStyle = { backgroundColor: "blue" };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  let Loginsfetch = async () => {
    let response = await axios.post(
      "https://products-jwt.onrender.com/users/login",
      input
    );
    console.log(response);
    let Data = JSON.stringify(response.data);
    localStorage.setItem("token", Data);
    console.log(Data);
  };
  let navigate=useNavigate();
  return (
    
    <Grid align="center" style={gridStyle}>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h3>Login</h3>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <br></br>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter Email"
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
          type="password"
          placeholder="Enter Password"
          fullWidth
          required
          onChange={(e) => {
            setinput({ ...input, password: e.target.value });
          }}
        ></TextField>
        <FormControlLabel
          control={<Checkbox {...label} defaultChecked />}
          label="Remember me"
        />
        <Link to='/usertab2'>
        <Button type="submit" color="primary" variant="contained" fullWidth  onClick={Loginsfetch}>
          Sign in
        </Button>
        </Link>
        
        <Typography>
          <Link href="a">Forgot password</Link>
        </Typography>
        <Typography>
          Do you have any account ?<Link to='/register' href="a">Sign up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Logins;
