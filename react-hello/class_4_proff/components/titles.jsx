import React from 'react';
import Title from './title';
class Titles extends React.Component {
   
    render() { 
        console.log("Titles rendered");

        return(<div>
            {this.props.titles.map((title)=><Title 
            key={title.id} 
            title = {title} 
            name={title.name} 
            value={title.value} 
            onDelete= {this.props.onDelete}
            onUpdate = {this.props.onUpdate}/>)}
            
            <button onClick={()=>this.props.onReset()} className="btn btn-secondary">Reset All</button>
        </div>);
          }
}
 
export default Titles;