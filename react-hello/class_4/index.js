import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Welcome, Greeting} from './components/welcome';
import Title from './components/title';
import Titles from './components/titles';
//if we import bootstrap instead of using cdn, npm install bootstrap
// import 'bootstrap/dist/css/bootstrap.css';


// const element = <React.Fragment><Welcome name="Alan" /><Greeting name="Contreras, Alan"/></React.Fragment>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    {/*  <App /> */ }
    {/* <Welcome name="Alan" />
    <Greeting name="Contreras, Alan"/> */}
    {/* <Title /> */}
    {/* <Titles /> */}
    <App/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
