import {React, useState} from 'react';
import {Avatar, Button, CssBaseline, TextField, Link, Paper, Box, Autocomplete, Grid, Typography, FormControl} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginImage from '../images/login.jpg';
import logoBlack from '../images/logoBlack.png';
import {useForm} from 'react-hook-form';



export default function Login() {
    //VARIABLES DECLARATION
    const theme = createTheme();
    const states = [ {label: 'Alto Paraguay' }, {label: 'Alto Paraná'}, {label: 'Amambay'}, {label: 'Asunción - Capital'}, {label: 'Boquerón'} , 
    {label: 'Caaguazú'}  , {label: 'Caazapá'}, {label: 'Canindeyú'} ,  {label:'Central'},  {label:'Concepción'},  {label:'Cordillera'}, 
    {label:'Guairá'},  {label:'Itapúa'},  {label:'Misiones'},  {label:'Ñeembucú'},  {label:'Paraguarí'},  {label:'Presidente Hayes'},  {label:'San Pedro'} ];
    // const [lastName, setLastname] = useState("");    const [name, setName] = useState("");
    // const [lastName, setLastname] = useState("");
    const {register, handleSubmit, formState: {errors}} = useForm();
    ////////
    //FUNCTIONS DECLARATION
    const onSubmit = (data) => {
        console.log(data);
    };
    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Credits: '}
                <Link color="inherit" href="https://mui.com/material-ui/getting-started/templates/">
                    Based on and full credits to
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
    ///////
    ////JSX BEGINS
    return (
        
            <ThemeProvider theme={theme}>
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
                >   
                    <img src={logoBlack} alt="logo"/>
                    <Avatar sx={{ m: 1, bgcolor: '#008C45' }}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registrate
                    </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="Nombre"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Apellido"
                            name="lastName"
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Dirección de correo electrónico"
                        name="email"
                        autoComplete="email"
                        {...register("email", {required: 'Required'})}
                        error={!!errors?.email}
                        />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="address"
                        label="Dirección"
                        name="address"
                        autoComplete="address"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="city"
                        label="Ciudad"
                        name="city"
                        autoComplete="city"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Autocomplete
                        disablePortal
                        required
                        id="combo-box-demo"
                        options={states}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Departamento" />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        />
                    </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor : "#008C45" }}
                >
                    Registrate
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="#" variant="body2">
                        Ya tenes una cuenta? Inicia sesión
                    </Link>
                </Grid>
                </Grid>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />    
                </Box>
                </Grid>
            </Grid>
            </ThemeProvider>
    );
}
//JSX ENDS
