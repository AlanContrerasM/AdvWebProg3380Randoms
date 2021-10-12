import React from 'react';

/* function Title(props){

} */

class Title extends React.Component {
 

    //conditional rendering

    /* componentDidUpdate =(prevProps, prevState)=>{
        console.log(prevProps, prevState);
        console.log("Componetn Updated");
    } */
    componentWillUnmount = () =>{
        console.log("Component will unmount")
    }
    updateValue(){
        let value = this.props.title.value;
        return value<=0?"There are no more copies for this title":value;
    }


    render() { 
        //console.log(this.props);
        console.log("Title rendered");
        return (<div>
            <span >{this.props.title.name}</span>
            <span style={{fontWeight: 'bold', padding: '10px', fontSize: '10px', backgroundColor: 'lightblue', margin:"10px"}}>{this.updateValue()}</span>
            <button className="btn btn-success btn-sm" onClick={()=>this.props.onUpdate(this.props.title)}>Update</button>
            <button className="btn btn-danger btn-sm m-2" onClick={()=>{this.props.onDelete(this.props.title.id)}}>Delete</button>
           {/* {this.renderColors()} */}
        </div>);
    }
}
 
export default Title;