import FormularioHooks from "./componentes/FormularioHooks";
import VistaPreliminar from "./componentes/VistaPreliminar";
import React, {useState} from 'react';

function App() {
  const [userdata, setUserdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: ""
  });

  return (
    <div>
        <FormularioHooks datos={userdata} setDatos={setUserdata} />
        <VistaPreliminar datos={userdata} />
        

    </div>
  );
}

export default App;
