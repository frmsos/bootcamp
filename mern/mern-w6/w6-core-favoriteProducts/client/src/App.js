import './App.css';
import Home from './components/Home';
import AuthorPage from './components/AuthorPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="FavoriteApp">
      <BrowserRouter>
        <Routes>
          <Route path="/new" element={ <AuthorPage showSelected={true}  /> }>   </Route>
          <Route path="/edit/:id" element={ <AuthorPage  showSelected={false} />  }>   </Route>
          <Route path="*" element={ <Home/> }>   </Route>
        </Routes>
      </BrowserRouter> 


    </div>
  );
}

export default App;
