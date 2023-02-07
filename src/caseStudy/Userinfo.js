import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";


let local = localStorage.getItem("database")
? JSON.parse(localStorage.getItem("database"))
: [];

function Userinfo(handleClose) {
  const [input, setinput] = useState({
    id:"",
    name: "",
    plan: "",
    date: "",
    price: "",
  });
  
  const handle = () => {
    local.push(input);
    localStorage.setItem("database",JSON.stringify(local));
  };

let deletedData=(index)=>{
 
  local.splice(index,1);
  localStorage.setItem("database",JSON.stringify(local));}

  return (
    <div className="App" style={{backgroundColor:"#80deea"}}>
      <Typography variant="h5" color="primary">
        User Info
      </Typography>
      <Card style={{ margin: "0 auto", maxWidth: 450, padding: "20px 5px",backgroundColor:"#80deea" }}>
        <CardContent>
          <form>
            <Grid container spacing={1}>
            
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Name"
                  placeholder="Enter your name"
                  variant="outlined"
                  value={input.name}
                  required
                  onChange={(e) => {
                    setinput({ ...input, name: e.target.value });
                  }}
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Plan"
                  placeholder="Enter your plan"
                  variant="outlined"
                  required
                  value={input.plan}
                  onChange={(e) => {
                    setinput({ ...input, plan: e.target.value });
                  }}
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Enter your date"
                  variant="outlined"
                  type="date"
                  required
                  value={input.date}
                  onChange={(e) => {
                    setinput({ ...input, date: e.target.value });
                  }}
                ></TextField>
              </Grid>
              
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Price"
                  placeholder="Enter the price"
                  variant="outlined"
                  type="number"
                  required
                  value={input.price}
                  onChange={(e) => {
                    setinput({ ...input, price: e.target.value });
                  }}
                ></TextField>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  handle(input);
                  handleClose();
                }}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Userinfo;
