import './App.css';
import Home from './components/Home';
import AuthorPage from './components/AuthorPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DeleteAuthor from './components/DeleteAuthor';
function App() {
  return (
    <div className="FavoriteApp">
      <BrowserRouter>
        <Routes>
          <Route path="/new" element={ <AuthorPage showSelected={true}  /> }>   </Route>
          <Route path="/delete/:id" element={ <DeleteAuthor deleteOption={true}/>}   > </Route>
          <Route path="/edit/:id" element={ <AuthorPage  showSelected={false} />  }>   </Route>
          <Route path="*" element={ <Home deleteOption={false}  /> }>   </Route>
        </Routes>
      </BrowserRouter> 


    </div>
  );
}

export default App;
