import './App.css';
import { HomePage } from './components/HomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import EditPage from './components/EditPage';
import { useState } from 'react';
function App() {
  const [showDetailsPage, setShowDetailsPage] = useState(false);
  return (
    <div className="productAppFullContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<ProductDetails  showDetailsPage={showDetailsPage} setShowDetailsPage={setShowDetailsPage} />}>  </Route>
          <Route path="/:id/edit" element={  <EditPage/> } >  </Route>
          <Route path="*" element={<HomePage  showDetailsPage={showDetailsPage} setShowDetailsPage={setShowDetailsPage} />}>  </Route> 
        </Routes>
      </BrowserRouter>
 
      
    
    </div>
  );
}

export default App;
