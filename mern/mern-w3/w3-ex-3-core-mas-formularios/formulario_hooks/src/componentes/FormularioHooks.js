import "../App.css";
import React from 'react';

const FormularioHooks = (props) => {
    const {datos, setDatos} = props;
    const {dataError, setError} = props;
    const onChange = (e) =>{
        setDatos({...datos, [e.target.name]: e.target.value});
        //validacion nombre
        if(e.target.name === "firstname" && e.target.value.length <=2)
        {
         setError({...dataError, [e.target.name]: "First Name must be at least 2 characters"});
        }
        else  if(e.target.name === "firstname"){
            setError({...dataError, [e.target.name]: ''});
        }
        //validacion apellido
        if(e.target.name === "lastname" && e.target.value.length <=2)
        {
         setError({...dataError, [e.target.name]: "Last Name must be at least 2 characters"});
        }
        else  if(e.target.name === "lastname")  {
            setError({...dataError, [e.target.name]: ''});
        }
        //validacion email
        if(e.target.name === "email" && e.target.value.length <=5)
        {
            setError({...dataError, [e.target.name]: "Email must be at least 5 characters"});
        }
        else  if(e.target.name === "email")  {
            setError({...dataError, [e.target.name]: ''});
        }
    };

    const onChangePass = (e) =>{
        setDatos({...datos, [e.target.name]: e.target.value});
        //validacion password
        if( e.target.value.length <= 8 ){
            if( e.target.value === datos.password || e.target.value === datos.password2  ){
                setError({...datos, password: "Password must be at least 8 characters", password2:""});
            }
            else{
                setError({...datos, password: "Password must be at least 8 characters", password2:"Passwords must match"});
            }
        }
        else{
            if( e.target.value === datos.password || e.target.value === datos.password2  ){
                setError({...datos, password: "", password2:""});
            }
            else{
                setError({...datos, password: "", password2:"Passwords must match"});
            }
        }
    };

    return(
        <div>
            <form>
                <div className="firstname">
                    <label>First Name:</label>
                    <input type="text" name="firstname" onChange={ onChange } />
                    {
                        dataError['firstname'] ?
                        <p style={{color:'red'}}> {dataError['firstname']}  </p>   :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastname" onChange={ onChange }  />
                    {
                        dataError['lastname'] ?
                        <p style={{color:'red'}}> {dataError['lastname']}  </p>   :
                        ''
                    }
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" onChange={ onChange } />
                    {
                        dataError['email'] ?
                        <p style={{color:'red'}}> {dataError['email']}  </p>   :
                        ''
                    }
                </div>
                <div>
                    <label>Enter your password:</label>
                    <input type="password" name="password" onChange={ onChangePass } />
                </div>
                {
                    dataError['password'] ?
                    <p style={{color:'red'}}> {dataError['password']}  </p>   :
                    ""
                } 
                {
                    dataError['password2'] ?
                    <p style={{color:'red'}}> {dataError['password2']}  </p>   :
                    ""
                }                   
                <div> 
                    <label>Confirm your password:</label>
                    <input type="password" name="password2" onChange={ onChangePass } />
                </div>
            </form>

        </div>

    );

}



export default FormularioHooks;