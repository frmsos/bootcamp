import FormularioHooks from "./componentes/FormularioHooks";
import React, {useState} from 'react';

function App() {
  const [userdata, setUserdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: ""
  });
  const [errorData, setErrorData] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: ""
    
  });

  return (
    <div>
        <FormularioHooks datos={userdata} setDatos={setUserdata} dataError={errorData} setError={setErrorData}/>
        

    </div>
  );
}

export default App;
