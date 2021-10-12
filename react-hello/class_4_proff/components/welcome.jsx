import React from 'react';

//class component
export default class Welcome extends React.Component {
    render() { 
        return <><h1>Welcome {this.props.name}</h1><h2>We are learning React</h2></>;
    }
}

//function component
export function Greeting(props){
    return <h1>Hello {props.name}</h1>;
}