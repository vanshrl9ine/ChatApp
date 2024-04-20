import React from 'react'
import {Container,Paper, TextField,Typography,Button,Avatar,Stack,IconButton} from "@mui/material"
import {CameraAlt as CameraAltIcon} from "@mui/icons-material"
import { useState } from 'react';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import Register from './Register.jsx';
import {useInptValidation} from "6pp";
const Login = () => {
  const [isLogin,setIsLogin]=useState(true);
  const username=useInptValidation("");
  const password=useInptValidation("");


  const toggleLogin=()=>{
    setIsLogin(prev=>!prev)
  }
  return (
    <Container 
    component={"main"} 
    maxWidth="xs"
    sx={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}
    >
      <Paper 
      elevation={3}
      sx={{padding:4,
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}
      >
      
      {
        isLogin ? <>
        <Typography variant="h5">Login</Typography>

        <form style={{
           width:"100%",
           marginTop:"1rem"
        }}>

          <TextField 
          required fullWidth
          label="Username"
          margin="normal"
          variant="outlined"
          value={username.value}
          onChange={username.changeHandler}
          />
          <TextField 
          required fullWidth
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          value={password.value}
          onChange={password.changeHandler}
          />
        <Button 
        sx={{
          marginTop:"1rem",
        }}
        variant="contained" 
        fullWidth
        color="primary"
        type="submit">
          Login
        </Button>
      
    <Typography textAlign={"center"} m={"1 rem"}>OR</Typography>

    <Button 
        // sx={{
        //   marginTop:"1rem",
        // }}
        variant="text"
        fullWidth 
        color="primary"
        onClick={toggleLogin}>
          Sign Up Instead
        </Button>

        </form>
        
        </>:
        //signup code
        <Register toggleLogin={toggleLogin}/>
      }
      
      </Paper>
    </Container>
  )
}

export default Login