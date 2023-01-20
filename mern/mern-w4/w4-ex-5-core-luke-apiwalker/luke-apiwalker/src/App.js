import './App.css';
import {useState} from 'react';
import RenderResults from './components/RenderResults';
import SearchPortal from './components/SearchPortal';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './components/Error';



function App() {
  const [idValue, setIDValue] = useState(0);
  const [option, setOption] = useState('');
  const [clicked, setClicked] = useState(false);
  const [validOptions, setValidOptions] = useState(null);


  return (
    <div className='appContainer'>
        <BrowserRouter>
          <Routes>
            <Route path="/clicked" element={<RenderResults />}>  </Route>
            <Route path="/:enteredID" element={<SearchPortal idValue={idValue} setIDValue={setIDValue} option={option} setOption={setOption} clicked={clicked} setClicked={setClicked}   
            validOptions={validOptions} setValidOptions={setValidOptions}
            
            />}>  </Route>
            <Route path="/error" element={<Error  />}>  </Route>
            <Route path="*" element={<SearchPortal idValue={idValue} setIDValue={setIDValue} option={option} setOption={setOption} clicked={clicked} setClicked={setClicked}  
            validOptions={validOptions} setValidOptions={setValidOptions}
            />}>  </Route>
          </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
