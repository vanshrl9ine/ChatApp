
import React from 'react'
import {Container,Paper, TextField,Typography,Button,Avatar,Stack,IconButton} from "@mui/material"
import {CameraAlt as CameraAltIcon} from "@mui/icons-material"
import { useState } from 'react';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useInptValidation} from "6pp";
const Register = ({toggleLogin}) => {
const name=useInptValidation("");
const bio=useInptValidation("");
const username=useInptValidation("");
const password=useInptValidation("");
  return (
    <>
        <Typography variant="h5">Sign Up</Typography>

        <form style={{
           width:"100%",
           marginTop:"1rem"
        }}>

          <Stack 
          position={"relative"}
          width={"10rem"}
          margin={"auto"}
          >
          <Avatar sx={{
            width:"10rem",
            height:"10rem",
            objectFit:"contain"
          }}/>
          <IconButton sx={{
            position:"absolute",
            bottom:"0",
            right:"0",
            
            bscolor:"rgba(0,0,0,0.5)",
            ":hover":{
              bgcolor:"rgba(255,255,255,0.3)"
            },

          }}
          component="label">
            <>
            <CameraAltIcon/>
            <VisuallyHiddenInput type="file"/>
            </>
          </IconButton>
          </Stack>
         <TextField 
          required fullWidth
          label="Name"
          margin="normal"
          variant="outlined"
          value={name.value}
          onChange={name.changeHandler}
          
          />
          <TextField 
          required fullWidth
          label="Bio"
          margin="normal"
          variant="outlined"
          value={bio.value}
          onChange={bio.changeHandler}
          
          />

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
          Sign Up
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
          Log in Instead
        </Button>

        </form>

        </>
  )
}

export default Register;