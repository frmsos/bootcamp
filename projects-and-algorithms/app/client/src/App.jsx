import React from 'react';
import './App.css';
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
  return (
    <div>
      <ThemeProvider theme={LightTheme}>
        <CssBaseline/>
        <Register/>
      </ThemeProvider>
    </div>
  )
}

export default App