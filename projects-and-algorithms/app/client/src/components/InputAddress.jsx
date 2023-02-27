import {React, useState} from 'react';
import {Avatar, Button, CssBaseline, TextField, Paper, Box, Autocomplete, Grid, Typography, IconButton, Alert, Stack} from '@mui/material';
import {useForm} from 'react-hook-form';
import axios from 'axios';





const InputAddress = (props) => {
    const states = [ {label: 'Alto Paraguay' }, {label: 'Alto Paraná'}, {label: 'Amambay'}, {label: 'Asunción - Capital'}, {label: 'Boquerón'} , 
    {label: 'Caaguazú'}  , {label: 'Caazapá'}, {label: 'Canindeyú'} ,  {label:'Central'},  {label:'Concepción'},  {label:'Cordillera'}, 
    {label:'Guairá'},  {label:'Itapúa'},  {label:'Misiones'},  {label:'Ñeembucú'},  {label:'Paraguarí'},  {label:'Presidente Hayes'},  {label:'San Pedro'} ];
    const {register, handleSubmit, formState: {errors}} = useForm();


    const onSubmit = (data) =>{
        console.log('onsubmit', data);
        axios.post('http://localhost:8000/api/pizzapp/users/update/addresses/63fab4f8fb63ef81fd959442', 
        {
            addresses: {
                street: data.street,
                city: data.city,
                state: data.state
            },
        }, {withCredentials:true }
        )
        .then( (response) => {
            console.log('onsub', response.data);
            props.setShowAddr("doNotShowAddr")
            //alert('afae')

        } )
        .catch( (errorMsg) =>{
            console.log('errrrorrr log', errorMsg)
        }  )
    }
    const boolOpMode = props.opMode === 'add';
    console.log('addr id is:' , props.id)


    return (
        <div>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <TextField
                required
                id="address"
                label="Calle"
                name="street"
                defaultValue = {boolOpMode ? null : 'tigo'} 
                autoComplete="street"
                {...register("street", { required: true, minLength: 4, maxLength: 50 })}
                error={!!errors?.street}                        
                helperText = { errors?.street ? "Ingrese una dirección válida, como mínimo de 4 caracteres" : null }
                sx={{m:1, width: 340}}
                />
            <TextField
                required
                fullWidth
                id="city"
                label="Ciudad"
                name="city"
                autoComplete="city"
                {...register("city", { required: true, minLength: 4, maxLength: 50 })}
                error={!!errors?.city}                        
                helperText = { errors?.city ? "Ingrese una ciudad válida, como mínimo de 4 caracteres" : null }
                sx={{m:1, width: 340}}
                />
                <Autocomplete
                    disablePortal
                    required
                    id="combo-box-demo"
                    options={states}
                    sx={{ m:1, width: 340 }}
                    renderInput={(params) => <TextField {...params} required label="Departamento" {...register("state", { required: true })}
                    error={!!errors?.state}                        
                    helperText = { errors?.state ? "Debe elegir una de las opciones" : null }/>}
                    isOptionEqualToValue = { (option, value) => option.value === value.value}
                />
                    <Button  type="submit" size="small" sx={{m:2}} >Añadir</Button> 
            </Box>


        </div>
    )
}

export default InputAddress