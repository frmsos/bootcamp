import  {useReducer} from 'react';
import '../App.css'
const initialUser = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    } 
};
const reducer = (user, action) => {
    let errorName = null;
    let newUser = {...user, [action.name] : action.payload};
    console.log('action name', action.name);
    switch (action.name){
        case "firstName":
            errorName =  newUser.firstName.value.length <=2 ? "First name must be longer than 2 characters" : null;
            newUser = {...user, firstName : {error: errorName}};
            return newUser;
        case "lastName":
            errorName =  newUser.lastName.value.length <=2 ? "Last name must be longer than 2 characters" : null;
            newUser = {...user, lastName : {error: errorName}};
            return newUser;
        default:
            //el regex arroja true de ser una direccion valida, negamos para mantener la estructura del uso que le estamos dando al operador ternario
            //regex validation source code from https://www.w3resource.com/javascript/form/email-validation.php
            errorName = (  ! ( (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/ ).test(newUser.email.value)) ? "Enter a valid email address" : null ) ; 
            newUser = {...user, email : {error: errorName}};
            return newUser;  
    }
     
}


const Form = () => {
    const error = true;
    const [user, dispatch] = useReducer(reducer, initialUser);
    const onChangeName = e => {
        const {name, value} = e.target;
        dispatch(
            {
                name: name,
                payload: {value: value, error: error}   //vamos a validar las entradas usando la funcion reducer y con switch case basados en
                                                        //el name del objeto html
            });
    }

// usamos un template de bootstrap para generar una vista diferente 
// https://getbootstrap.com/docs/4.3/components/forms/
    return(
        <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={user.firstName.value} placeholder="Enter First Name" onChange = {onChangeName}/>
                {user.firstName.error !== null && ( <p className="error">{user.firstName.error}</p>  )}
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" name="lastName" value={user.lastName.value} placeholder="Enter Last Name" onChange = {onChangeName}/>
                {user.lastName.error !== null && ( <p className="error">{user.lastName.error}</p>  )}
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={user.email.value} aria-describedby="emailHelp" placeholder="Enter email" onChange = {onChangeName}/>
                {user.email.error !== null && ( <p className="error">{user.email.error}</p>  )}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>


    );


}

export default Form;