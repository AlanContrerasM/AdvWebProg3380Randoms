import React from 'react';


class Title extends React.Component {
    state = {
        name: this.props.data.name,
        value: this.props.data.value,
        styles: {fontWeight: "bold", 
                fontSize: "23px", 
                backgroundColor: "green",
                margin: "10px"},
        colors: ['red', 'blue', 'green', 'pink'],
    }


    //conditional rendering
    renderColors(){
        if(this.state.colors.length === 0){
            return(<p> There are no colors to render</p>)
        }else{
            return (<ul>
                        {this.state.colors.map((color, i)=> <li key={i} style={{backgroundColor: color}}>{i}: {color}</li>)}
                    </ul>)
        }
    }
    
    updateValue(){
        let value = this.state.value;
        return value  <=0 ? "There are no more copies for this title": value;
    }

    updateCount = () =>{
        this.setState({value: this.state.value - 1});
    }
    

    render() { 
        //if we want multiple lines put it inside a ()
        return (<div>
                    <span className="fs-2 badge bg-secondary">{this.state.name} </span>
                    <span style={this.state.styles}> {this.updateValue()} </span>
                    <span style={{fontWeight: "bold", fontSize: "23px", backgroundColor: "green", margin: "10px"}}> Yey! </span>
                    <button className="btn btn-success" onClick={()=>{this.updateCount(); this.props.reportTitle(this.props.data.id)}}>Update</button>
                    <button className="btn btn-danger" onClick={()=>{this.props.onDelete(this.props.data.id)}}>Delete</button>
                    {/* since we are passing props to this delete button we have to wrap on arrow function
                    otherwise, just onClick={this.props.onDelete} */}

                    
                    {/* {this.renderColors()} */}
                </div>);
    }
}




export default Title;