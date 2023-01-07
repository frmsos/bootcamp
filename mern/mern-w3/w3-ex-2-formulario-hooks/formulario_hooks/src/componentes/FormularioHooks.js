

const FormularioHooks = (props) => {
    const onChange = (e) =>{
        props.setDatos({...props.datos, [e.target.name]: e.target.value});
    };

    return(
        <div>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstname" onChange={ onChange } />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastname" onChange={ onChange }  />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" onChange={ onChange } />
                </div>
                <div>
                    <label>Enter your password:</label>
                    <input type="password" name="password" onChange={ onChange } />
                </div>
                <div> 
                    <label>Confirm your password:</label>
                    <input type="password" name="password2" onChange={ onChange } />
                </div>
            </form>

        </div>

    );

}



export default FormularioHooks;