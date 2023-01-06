import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PersonCard from './components/PersonCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonCard  firstName={"Jane"} lastName="Dane" age={"45"} hairColor="Black"/>
    <PersonCard  firstName={"John"} lastName="Smith" age={"88"} hairColor="Brown"/>
    <PersonCard  firstName={"Millard"} lastName="Fillmore" age={"50"} hairColor="Brown"/>
    <PersonCard  firstName={"Maria"} lastName="Smith" age={"62"} hairColor="Brown"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
