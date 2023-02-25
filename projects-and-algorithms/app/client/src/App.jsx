import {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
//import RegisterPage from './components/RegisterPage';
import LightTheme from './components/LightTheme';
//import DarkTheme from './components/DarkTheme';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import Order from './components/Order';
const App = () => {
  const [itemCount, setItemCount] = useState(0);
  let [requestItem, setRequestItem] = useState([]) ;
  console.log('en app', itemCount)
  return (
    <div>
      <ThemeProvider theme={LightTheme}>
        <CssBaseline/>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/:id" element={<ProductDetails  showDetailsPage={showDetailsPage} setShowDetailsPage={setShowDetailsPage} />}>  </Route>
            <Route path="/:id/edit" element={  <EditPage/> } >  </Route> */}
            <Route path="*" element={<Home itemCount={itemCount} setItemCount={setItemCount} requestItem={requestItem} setRequestItem={setRequestItem}  />}>  </Route> 
            <Route path="/cart" element={<Order itemCount={itemCount} setItemCount={setItemCount} requestItem={requestItem} setRequestItem={setRequestItem}/>}>  </Route> 
          </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App