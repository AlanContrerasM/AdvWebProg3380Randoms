import React from 'react';
import Title from './title'
class Titles extends React.Component {
    
    
    render(){
        return(<div className="container">
            {/* important to use key with any id inside the object in state */}
            {this.props.titles.map((title)=> <Title key={title.id} 
            data={title} 
            onDelete={this.props.onDelete} 
            onUpdate={this.props.onUpdate}
            />)}

            {/* create a button to restart values to initial values */}
            <button className="btn btn-secondary" onClick={()=>{this.props.onReset()}} >Reset Values</button>
            

        </div>);
    }


    // render() { 
    //     return <div>
    //                 <Title />
    //                 <Title />
    //             </div>;
    // }
}
 
export default Titles;