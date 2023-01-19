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


  return (
    <div className='appContainer'>
        <BrowserRouter>
          <Routes>
            <Route path="/clicked" element={<RenderResults idValue={idValue} setIDValue={setIDValue} option={option} setOption={setOption} clicked={clicked} setClicked={setClicked} />}>  </Route>
            <Route path="/:enteredID" element={<RenderResults idValue={idValue} setIDValue={setIDValue} option={option} setOption={setOption} clicked={clicked} setClicked={setClicked} />}>  </Route>
            <Route path="/error" element={<Error idValue={idValue} setIDValue={setIDValue} option={option} setOption={setOption}  clicked={clicked} setClicked={setClicked}    />}>  </Route>
            <Route path="*" element={<SearchPortal idValue={idValue} setIDValue={setIDValue} option={option} setOption={setOption} clicked={clicked} setClicked={setClicked}  />}>  </Route>
          </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
