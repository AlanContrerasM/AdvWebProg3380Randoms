import React from 'react';


class Title extends React.Component {
    //we deleted states here, cause now its all connected through the parent titles, and title can be updated with state changes,
    //if we have two different states, they are decoupled.


    
    
    updateValue(){
        let value = this.props.data.value;
        return value  <=0 ? "There are no more copies for this title": value;
    }

    
    

    render() { 
        //if we want multiple lines put it inside a ()
        return (<div>
                    <span className="fs-2 badge bg-secondary">{this.props.data.name} </span>
                    <span style={{fontWeight: "bold", fontSize: "23px", backgroundColor: "green", margin: "10px"}}> {this.updateValue()} </span>
                    {/* <span style={this.state.styles}> Yey! </span> */}
                    <button className="btn btn-success" onClick={()=>{this.props.onUpdate(this.props.data);}}>Update</button>
                    <button className="btn btn-danger" onClick={()=>{this.props.onDelete(this.props.data.id)}}>Delete</button>
                    {/* since we are passing props to this delete button we have to wrap on arrow function
                    otherwise, just onClick={this.props.onDelete} */}

                    
                    {/* {this.renderColors()} */}
                </div>);
    }
}




export default Title;