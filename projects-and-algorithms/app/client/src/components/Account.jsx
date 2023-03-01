import {useState, useEffect} from 'react';
import Navbar from './Navbar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useContext } from 'react';
import { userAuth } from '../contexts/userAuth';
import axios from 'axios';
import { width } from '@mui/system';






const Account = (props) => {
    const departamentos = [ {label: 'Alto Paraguay' }, {label: 'Alto Paraná'}, {label: 'Amambay'}, {label: 'Asunción - Capital'}, {label: 'Boquerón'} , 
    {label: 'Caaguazú'}  , {label: 'Caazapá'}, {label: 'Canindeyú'} ,  {label:'Central'},  {label:'Concepción'},  {label:'Cordillera'}, 
    {label:'Guairá'},  {label:'Itapúa'},  {label:'Misiones'},  {label:'Ñeembucú'},  {label:'Paraguarí'},  {label:'Presidente Hayes'},  {label:'San Pedro'} ];
    const { userID, setUserID } = useContext(userAuth);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [accountData, setAccountData] = useState({firstName: "", lastName:"", email:"", password:"", addresses: []  });
    const [isPassChanged, setIsPassChanged] = useState(false);
    let idUser = 0;
    const onSubmit = (data) => {
        console.log('is pass changed', isPassChanged)
        console.log('data to be modified to account', accountData);
    }
    const updateAddrValue = ( value, index, field) => {
        let items = {...accountData};
        let item = items.addresses[index];
        switch(field){
            case 'street':
                item.street = value;
                break;
            case 'city':
                item.city = value;
                break;
            case 'state':
                item.state = value;
                break;
            default:
                return null;
        }
        
        items.addresses[index] = item;
        console.log('esto es update addr', items);
        setAccountData(items);
    }
    const checkErrorsArryForm = (field, index) => {
        if( field=== 'street') {
            return(accountData.addresses[index].street.length < 4 )    
        }
        else {
            return( accountData.addresses[index].city.length < 4 )
        }
    }


    const updatePass = (e) =>{
        setAccountData({...accountData, password: e.target.value});
        setIsPassChanged(true);
    }

    useEffect( () => {
        if( userID !==0){
            axios.get(`http://localhost:8000/api/pizzapp/users/${userID}`,{withCredentials : true})
            .then(response => {
                console.log('user account info get by id', response.data.user);
                setAccountData(response.data.user);
            })
            .catch( errMsg => {
                console.log('error getting order history' , errMsg)
        })}
        else{
            setUserID(JSON.parse(window.localStorage.getItem('userID')));
        }
        
    },[userID, setUserID ]);



    return (
        <div>
            <Navbar itemCount={props.itemCount} setItemCount={props.setItemCount}/>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                <Typography variant="h3" sx={{m:2, fontWeight:'bold'}}> <ManageAccountsIcon fontSize='large'/> Datos de la Cuenta</Typography>
            </Box>
            <form id="formModifData"  onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName" className='labelForm'>Nombre</label>
                    <input type="text" value={accountData.firstName} 
                    className="inputFields"
                    {...register("firstName", {onChange :  e=> setAccountData({...accountData, firstName: e.target.value}),   required: true, minLength: 2, maxLength: 25 })}
                    />
                    {errors.firstName && <span style={{color:'red'}}>Ingrese un nombre válido, como mínimo de 2 caracteres</span>}
                </div>
                <div>
                    <label htmlFor="lastName" className='labelForm'>Apellido</label>
                    <input type="text" value={accountData.lastName}
                    {...register("lastName", {onChange :  e=> setAccountData({...accountData, lastName: e.target.value}),   required: true, minLength: 2, maxLength: 25 })}
                    />
                    {errors.lastName && <span style={{color:'red'}}>Ingrese un apellido válido, como mínimo de 2 caracteres</span>}
                </div>
                <div>
                    <label htmlFor="email" className='labelForm'>Email</label>
                    <input type="text" value={accountData.email} 
                    className="inputFields"  
                    {...register("email", {required: true, onChange :  e=> setAccountData({...accountData, email: e.target.value}) ,pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,}})}
                    />
                    {errors.email && <span style={{color:'red'}}>Ingrese una dirección de correo válida</span>}
                </div>
                <div>
                    <label htmlFor="password"  className='labelForm'>Contraseña</label>
                    <input type="password" placeholder='Ingrese la nueva contraseña' onChange = { e=>  updatePass(e)} className="inputFields"  />
                    <div><small id="emailHelp" class="form-text text-muted">Deje en blanco si no desea modificar.</small></div>
                </div>
                { accountData.addresses.length > 0 ? 
                    accountData.addresses.map(  (item, index) => { return(
                    <>
                        <h5 style={{marginTop:'1rem'}}>Dirección</h5>
                        <div>
                            <label htmlFor="text"  className='labelForm'> Calle</label>
                            <input type="text" value = {item.street} 
                            className="inputFields"  onChange = { e=> updateAddrValue(e.target.value, index, 'street')}
                            />
                        </div>
                        { checkErrorsArryForm('street', index) && <span style={{color:'red'}}>Ingrese una ciudad válida, como mínimo de 4 caracteres</span>}
                        <div>
                            <label htmlFor="text"  className='labelForm'> Ciudad</label>
                            <input type="text" value = {item.city} onChange = { e=> updateAddrValue(e.target.value, index, 'city')} className="inputFields"  />
                        </div>
                        <div style={{marginTop:'1rem'}}>
                            <label className='labelForm'>
                                Departamento
                                <select style={{marginTop:'1rem'}} onChange = { e=> updateAddrValue(e.target.value, index, 'state')} >
                                <option value="Alto Paraguay" selected={ item.state ===  "Alto Paraguay"} >Alto Paraguay</option>
                                <option value="Alto Paraná"  selected={ item.state ===  "Alto Paraná"} >Alto Paraná</option>
                                <option value="Amambay" selected={  item.state === "Amambay"} >Amambay</option>
                                <option value="Asunción - Capital" selected={ item.state === "Asunción - Capital" } >Asunción - Capital</option>
                                <option value="Boquerón" selected={ item.state === "Boquerón" } >Boquerón</option>
                                <option value="Caaguazú" selected={  item.state === "Caaguazú"} >Caaguazú</option>
                                <option value="Caazapá" selected={  item.state === "Caazapá"} >Caazapá</option>
                                <option value="Canindeyú" selected={ item.state ===  "Canindeyú"} >Canindeyú</option>
                                <option value="Central" selected={ item.state === "Central" } >Central</option>
                                <option value="Concepción" selected={ item.state === "Concepción"  } >Concepción</option>
                                <option value="Cordillera" >Cordillera</option>
                                <option value="Guairá" >Guairá</option>
                                <option value="Itapúa" selected={ item.state ==="Itapúa"  } >Itapúa</option>
                                <option value="Misiones" selected={ item.state === "Misiones" } >Misiones</option>
                                <option value="Ñeembucú" selected={ item.state === "Ñeembucú"} >Ñeembucú</option>
                                <option value="Paraguarí" selected={ item.state === "Paraguarí"} >Paraguarí</option>
                                <option value="Presidente Hayes"   selected={item.state === "Presidente Hayes"} >"Presidente Hayes</option>
                                <option value="San Pedro" selected={item.state ==="San Pedro"}>San Pedro</option>
                                </select>
                            </label>
                        </div>
                    </>
            )}) : null}
                <button type="submit" class="btn btn-primary" style={{margin:25}}>Submit</button>
                </form>
            
        </div>
    );
}

export default Account
