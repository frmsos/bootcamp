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
import Checkout from './components/Checkout';
import Account from './components/Account';
import Order from './components/Order';
import { userAuth } from './contexts/userAuth';
const App = () => {

  //FUNCTIONS DECLARATION
    //VARIABLES DECLARATION
    const [itemCount, setItemCount] = useState(0);
    let [requestItem, setRequestItem] = useState([]) ;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cartPressed, setCartPressed] = useState(false);
    const [cart, setCart] = useState({});
    const [userID, setUserID] = useState(0);
    const [selectedAddr, setSelectedAddr] = useState(null);
    const [totalCost, setTotalCost] = useState(0);
    const value = { isLoggedIn, setIsLoggedIn, cartPressed, setCartPressed, cart, setCart, userID, setUserID, selectedAddr, setSelectedAddr, totalCost, setTotalCost};
  return (
    <div>
      <ThemeProvider theme={LightTheme}>
        <CssBaseline/>
        <BrowserRouter>
        <userAuth.Provider value={value}>
          <Routes>
              {/* <Route path="/:id" element={<ProductDetails  showDetailsPage={showDetailsPage} setShowDetailsPage={setShowDetailsPage} />}>  </Route>
              <Route path="/:id/edit" element={  <EditPage/> } >  </Route> */}
            
              <Route path="/login" element={<Login itemCount={itemCount} setItemCount={setItemCount} requestItem={requestItem} setRequestItem={setRequestItem}  />}>  </Route> 
              <Route path="/register" element={<Register itemCount={itemCount} setItemCount={setItemCount} requestItem={requestItem} setRequestItem={setRequestItem}   />}>  </Route> 
              <Route path="*" element={<Home itemCount={itemCount} setItemCount={setItemCount} requestItem={requestItem} setRequestItem={setRequestItem}   />}>  </Route> 
              <Route path="/cart" element={<Order itemCount={itemCount} setItemCount={setItemCount} requestItem={requestItem} setRequestItem={setRequestItem}  />}>  </Route>
              <Route path="/checkout" element={<Checkout itemCount={itemCount} setItemCount={setItemCount} requestItem={requestItem} setRequestItem={setRequestItem}  />}>  </Route>
              <Route path="/account" element={<Account itemCount={itemCount} setItemCount={setItemCount} requestItem={requestItem} setRequestItem={setRequestItem}  />}>  </Route>
              
          </Routes>
          </userAuth.Provider>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App