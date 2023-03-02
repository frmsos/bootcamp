import {React, useEffect, useState} from 'react';
import {Avatar, Button, CssBaseline, TextField,  Paper, Box, Grid, Typography, IconButton, Alert, Stack} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginImage from '../images/login.jpg';
import logoBlack from '../images/logoBlack.png';
import {useForm} from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputAdornment } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { userAuth } from '../contexts/userAuth';
import config from './config';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link to="https://mui.com/material-ui/getting-started/templates/">
                Credits: Based on and full credits to
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Login(props) {

//VARIABLES DECLARATION
const theme = createTheme();
const {register, handleSubmit, formState: {errors}} = useForm();
const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();
const [loginOK, setLoginOK] = useState(false);
const [loginNotOK, setLoginNotOK] = useState(false);
const {isLoggedIn, setIsLoggedIn, cartPressed, setCartPressed, userID, setUserID} = useContext(userAuth);
//FUNCTIONS DECLARATION

const onSubmit = (data) => {
    console.log(data);
    axios.post(`${config.url}/api/pizzapp/login`, 
    {
        email: data.email,
        password: data.password
    }, {withCredentials:true }
    )
    .then( (response) => {
        setLoginOK(true);
        setLoginNotOK(false);
        console.log('login response data', response);
        setIsLoggedIn(true)
        setUserID(response.data.id);
        cartPressed ?  setTimeout(() => { navigate('/')}, 2100) : setTimeout(() => { navigate('/cart')}, 2100)
        setTimeout(() => { navigate('/')}, 2100)
    } )
    .catch( (errorMsg) =>{
        setLoginOK(false);
        setLoginNotOK(true);
        setUserID("ffffffffffffffffffffffff");
        setIsLoggedIn(false);
        setCartPressed(false);
    }  )
};
const handleClickPassword = () => setShowPassword(!showPassword);


useEffect( ()=>{
    window.localStorage.setItem('loginStatus', JSON.stringify(isLoggedIn))
    window.localStorage.setItem('userID', JSON.stringify(userID))
    window.localStorage.setItem('requestItem', JSON.stringify([]))
    }, [isLoggedIn, userID])

    //JSX BEGINS
    return (
        <div>   
            <ThemeProvider theme={theme}>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {  loginNotOK ?  <Alert severity="error">Error: verifique los datos introducidos y vuelva a probar</Alert> : null} 
                {/* <Alert severity="warning">This is a warning alert — check it out!</Alert>
                <Alert severity="info">This is an info alert — check it out!</Alert> */}
                {  loginOK ? <Alert severity="success">Login exitoso! Redirigiendo a la página principal</Alert> : null}
            </Stack>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                
                    <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${loginImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >   <Link to="/home">
                        <img src={logoBlack} alt="logo"/>
                    </Link>
                    <Avatar sx={{ m: 1, bgcolor: '#008C45' }}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar sesión
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}  sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Dirección de correo electrónico"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        {...register("email", {required: true, pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        }})}
                        error={!!errors?.email}
                        helperText = { errors?.email ? "Ingrese una dirección de correo válida" : null }
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type= {showPassword ? "text" : "password"} 
                        id="password"
                        autoComplete="current-password"
                        {...register("password", { required: true, minLength: 5, maxLength: 50 })}
                        error={!!errors?.password}                        
                        helperText = { errors?.password ? "Ingrese una contraseña válida" : null }
                        InputProps={{ 
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickPassword}>                                   
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )}}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, bgcolor : "#008C45" }}
                    >
                        Iniciar sesión
                    </Button>
                    <Grid container>
                        <Grid item>
                        <Link to="/register">
                            {"No tenes todavía una cuenta? Registrate"}
                        </Link>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
        </div>
    );
} //JSX ENDS
