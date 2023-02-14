import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
//import RegisterPage from './components/RegisterPage';
import Navbar from './components/Navbar';
import LightTheme from './components/LightTheme';
//import DarkTheme from './components/DarkTheme';
import Home from './components/Home';
const App = () => {
  return (
    <div>
      <ThemeProvider theme={LightTheme}>
        <CssBaseline/>
        <Home/>
      </ThemeProvider>
    </div>
  )
}

export default App