import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

const Login = (props) => {
  return(
    <div>
      <TextField
        id="standard-name"
        label="Username*"
      />
      <br></br>
      <TextField
        id="standard-name"
        label="Password*"
      />
      <br></br>
      <br></br>
      <Button onClick={props.login} variant="contained" color="primary" style={{width: "180px"}}>
        LOGIN
      </Button>
    </div>
  )
}










export default Login;
