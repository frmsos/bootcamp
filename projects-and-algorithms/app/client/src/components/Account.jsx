import React from 'react';
import Navbar from './Navbar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const departamentos = [ {label: 'Alto Paraguay' }, {label: 'Alto Paraná'}, {label: 'Amambay'}, {label: 'Asunción - Capital'}, {label: 'Boquerón'} , 
{label: 'Caaguazú'}  , {label: 'Caazapá'}, {label: 'Canindeyú'} ,  {label:'Central'},  {label:'Concepción'},  {label:'Cordillera'}, 
{label:'Guairá'},  {label:'Itapúa'},  {label:'Misiones'},  {label:'Ñeembucú'},  {label:'Paraguarí'},  {label:'Presidente Hayes'},  {label:'San Pedro'} ];


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));  
const theme = createTheme();


const Account = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };
    return (
        <div>
            <Navbar/>
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 1, p : 5}}>
                    <Typography variant='h3' sx={{fontWeight:'bold'}}> Información de la Cuenta </Typography>
                    <Grid container spacing={2} sx={{p:2}}>
                        <Grid item xs={5}>
                            <Item>
                                <Typography variant='h4' sx={{fontWeight:'bold'}}>  Datos del usuario </Typography>
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                                            <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Dirección de correo electrónico"
                                            name="email"
                                            autoComplete="email"
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
                                                id="combo-box-demo"
                                                options={departamentos}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Departamento" />}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                    Actualizar datos
                                            </Button>
                                        </Grid>

                                </Grid>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={5}>
                            <Item>
                                <Typography variant='h4' sx={{fontWeight:'bold'}}> Historial de Pedidos </Typography>
                            </Item>
                            
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default Account