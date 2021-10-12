import React from 'react';

//can be done with functions too, actually preferred now a days, has no state instead uses hooks, and return
//props are read only, that's why we need hooks

//with simple react snippets, write cc then tap

class Welcome extends React.Component {
    
    render() { 
        // inside curly brackets is a jsx expression, not the same as string literal
        // return <div><h1>Welcome {this.props.name}</h1> </div>;
        return <><h1>Welcome {this.props.name}</h1><h2>We are learning React</h2></>
    }
}



function Greeting (props){
    return <h1>Hello, {props.name}</h1>;
    
}


export {Welcome, Greeting};
// export default Welcome;
//this would be on another file:
//import Welcome from './components/welcome';


//to export more than one without defaults
//export {Welcome, foo};
//import {Welcome, foo} from './components/welcome';

