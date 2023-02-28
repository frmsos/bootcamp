import {React, useEffect, useState} from 'react';
import {Avatar, Button, CssBaseline, TextField, Paper, Box, Autocomplete, Grid, Typography, IconButton, Alert, Stack} from '@mui/material';
import {useForm} from 'react-hook-form';
import axios from 'axios';





const InputAddress = (props) => {
    const states = [ {label: 'Alto Paraguay' }, {label: 'Alto Paraná'}, {label: 'Amambay'}, {label: 'Asunción - Capital'}, {label: 'Boquerón'} , 
    {label: 'Caaguazú'}  , {label: 'Caazapá'}, {label: 'Canindeyú'} ,  {label:'Central'},  {label:'Concepción'},  {label:'Cordillera'}, 
    {label:'Guairá'},  {label:'Itapúa'},  {label:'Misiones'},  {label:'Ñeembucú'},  {label:'Paraguarí'},  {label:'Presidente Hayes'},  {label:'San Pedro'} ];
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [isEditMode, setIsEditMode] = useState(null);


    const onSubmit = (data) =>{
        console.log('onsubmit', data);
        if( !isEditMode){
            axios.post(`http://localhost:8000/api/pizzapp/users/addresses/${props.userID}`, 
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
        else{
            axios.put(`http://localhost:8000/api/pizzapp/users/address/63fab4f8fb63ef81fd959442/${props.addrID}`, 
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
    }

    
    //console.log('addr id is:' , props.addrID, props.addresses[props.vectorAddrIndex].street);
    
    useEffect ( () =>{
        console.log('herjeee')
        setIsEditMode(props.opMode === 'edit')
        console.log('bool', isEditMode)
  },[ props.opMode, props.addrID]

    )

    return (
        <div>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                <Typography variant='h4' sx={{fontWeight:'bold', m:2} }>
                    { isEditMode ? `Editar Dirección ${props.vectorAddrIndex + 1}` : 'Agregar Dirección'}
                </Typography> 
                <TextField
                    required
                    id="address"
                    label="Calle"
                    name="street"
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
                        <Button  variant="contained" color="success" type="submit" size="small" sx={{m:2}} > { isEditMode ? 'Modificar' : 'Añadir'  }</Button> 
            </Box>


        </div>
    )
}

export default InputAddress