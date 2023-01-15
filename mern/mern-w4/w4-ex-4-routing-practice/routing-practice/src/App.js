import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import NumberOrString from './components/NumberOrString';
import ColorString from './components/ColorString';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}>  </Route>
          <Route path="/:numberOrString" element={ <NumberOrString/> } />
          <Route path="/:string/:colorString/:colorBackground" element={ <ColorString/> } />
        </Routes>
      </BrowserRouter>
    </div>







  );
}

export default App;
