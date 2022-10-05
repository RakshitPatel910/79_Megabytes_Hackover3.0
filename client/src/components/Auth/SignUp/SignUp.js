import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();
const initialState = { userName: "", email: "", password:"" };

export default function SignIn({ setIsSignUp }) {
    const navigate = useNavigate();

    const [profile,setProfile] = useState(initialState);
    const [registerType, setRegisterType] = useState(0);

    const handleChange = (event) => {
      setRegisterType(event.target.value);
      console.log(registerType)
    };

    const handleSubmit = async () => {
        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        // email: data.get('email'),
        // password: data.get('password'),
        // });
        console.log(profile)
        if( registerType === 10 ) {
            console.log('customer')
            const data = await axios.post('http://localhost:3010/custSignup',{
                userName: profile.userName,
                email: profile.email,
                password: profile.password,
            })

            if(data.data.status == true){
                console.log("status is true")
                // navigate("/home");
                setIsSignUp(0);
            }
                else{
                alert('Email or Password is incorrect')
            } 
        }

        if( registerType === 20 ) {
            const data = await axios.post('http://localhost:3010/orgSignup',{
                userName: profile.userName,
                email: profile.email,
                password: profile.password,
            })

            if(data.data.status == true){
                console.log("status is true")
                setIsSignUp(0);
                // navigate("/home");
                }
                else{
                alert('Email or Password is incorrect')
            } 
        }
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="userName"
                autoFocus
                value={profile.userName} 
                onChange={(e)=>{setProfile({...profile,userName:e.target.value})}}
                />

                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // autoFocus
                value={profile.email} 
                onChange={(e)=>{setProfile({...profile,email:e.target.value})}}
                />

            <Box sx={{ minWidth: 120, marginTop: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select">Register as</InputLabel>
                        <Select
                        // labelId="demo-simple-select-label"
                        // id="demo-simple-select"
                        value={registerType}
                        label="registerType"
                        onChange={handleChange}
                        >
                            <MenuItem value={10}>Customer</MenuItem>
                            <MenuItem value={20}>Organizer</MenuItem>
                            {/* <MenuItem value={30}>Admin</MenuItem> */}
                        </Select>
                </FormControl>
            </Box>
            
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                    setProfile({ ...profile, password: e.target.value });
                }}
                />

                <TextField
                margin="normal"
                required
                fullWidth
                name="Confirm password"
                label="Confirm Password"
                type="Confirm password"
                id="Confirm password"
                autoComplete="current-password"
                />

                {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                /> */}

            

                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => {handleSubmit()}}
                >
                    Sign Up
                </Button>
                <Grid container>
                {/* <Grid item xs>
                    <Link href="#" variant="body2">
                    Forgot password?
                    </Link>
                </Grid> */}
                <Grid item>
                    <Link variant="body2" onClick={()=>{setIsSignUp(0)}}>
                    {"Sign In"}
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>

        </ThemeProvider>
    );
}