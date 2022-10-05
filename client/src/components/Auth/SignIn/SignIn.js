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
const initialState = { email: "", password:"" };

export default function SignIn({ setIsSignUp, setUser, setOrganizer }) {
    const navigate = useNavigate();

    const [profile,setProfile] = useState(initialState);
    const [loginType, setLoginType] = useState(10);

    const handleChange = (event) => {
      setLoginType(event.target.value);
    };

    const handleSubmit = async () => {
        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        // email: data.get('email'),
        // password: data.get('password'),
        // });

        if( loginType === 10 ) {
            console.log('customer')
            const data = await axios.post('http://localhost:3010/custSignin',{
                email: profile.email,
                password: profile.password,
            })

            if(data.data.status == true){
                console.log("status is true");
                localStorage.setItem('profile', JSON.stringify( { ...data.data.profile } ));
                setUser({ userId: data.profile._id, type: 10 })
                setUser(1);
                navigate("/customer");
                }
                else{
                alert('Email or Password is incorrect')
            } 

        }

        if( loginType === 20 ) {
            const data = await axios.post('http://localhost:3010/orgSignin',{
                email: profile.email,
                password: profile.password,
            })

            if(data.data.status == true){
                console.log("status is true")
                localStorage.setItem('profile', JSON.stringify( { ...data.data.profile } ));
                setOrganizer({ userId: data.data.profile._id, type: 20 });
                setUser(1);
                navigate("/organizer");
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
                Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={profile.email} 
                onChange={(e)=>{setProfile({...profile,email:e.target.value})}}
                />
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
                {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                /> */}

            <Box sx={{ minWidth: 120, marginTop: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select">Login as</InputLabel>
                        <Select
                        // labelId="demo-simple-select-label"
                        // id="demo-simple-select"
                        value={loginType}
                        label="loginType"
                        onChange={handleChange}
                        >
                            <MenuItem value={10}>Customer</MenuItem>
                            <MenuItem value={20}>Organizer</MenuItem>
                            {/* <MenuItem value={30}>Admin</MenuItem> */}
                        </Select>
                </FormControl>
            </Box>

                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => handleSubmit()}
                >
                    Sign In
                </Button>
                <Grid container>
                {/* <Grid item xs>
                    <Link href="#" variant="body2">
                    Forgot password?
                    </Link>
                </Grid> */}
                <Grid item>
                    <Link variant="body2" onClick={()=>{setIsSignUp(1)}}>
                    {"Don't have an account? Sign Up"}
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