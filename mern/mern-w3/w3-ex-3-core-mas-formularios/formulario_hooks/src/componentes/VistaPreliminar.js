

const VistaPreliminar = (props) => {
    return(
    <div>
        <p>Your Form Data</p>
        <p>First name: {props.datos.firstname}</p>
        <p>Last name: {props.datos.lastname}</p>
        <p>Email: {props.datos.email}</p>
        <p>Password: {props.datos.password}</p>
        <p>Password: {props.datos.password2}</p>
    </div>
    );
}

export default VistaPreliminar;