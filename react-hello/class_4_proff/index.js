import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './components/welcome'
import {Greeting} from './components/welcome';
import Title from './components/title'
import Titles from './components/titles'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';

// const element = <div><Welcome name="Anu"/><Greeting name="Gupta, Anu"/></div>
// const element = <React.Fragment><Welcome name="Anu"/><Greeting name="Gupta, Anu"/></React.Fragment>
const element = <><Welcome name="Anu"/><Greeting name="Gupta, Anu"/></>

// const element1 = <Titles/>

ReactDOM.render(<App/>,document.getElementById('root'));

