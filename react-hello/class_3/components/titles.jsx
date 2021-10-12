import React from 'react';
import Title from './title'
class Titles extends React.Component {
    state = {
        titles: [
            {id: 1, name: "Introduction to React Again", value: 9},
            {id: 2, name: "HTML and CSS", value: 5},
            {id: 3, name: "Java programming", value: 7},
            {id: 4, name: "Javascript", value: 4},
            {id: 5, name: "Intro to C#", value: 5},
            {id: 6, name: "Object Oriented Programming", value: 8},
        ]
    }

    handleDelete = (titleId) =>{
        console.log("delete the id: ", titleId);
        const titlesNew = this.state.titles.filter((title)=>title.id!==titleId);
        // console.table(titlesNew);
        this.setState({titles: titlesNew})
        
        // this.setState({titles: titles});
    }


    reportTitle = (titleId)=>{
        const titleNew = this.state.titles.filter((title)=>title.id===titleId);
        console.table(titleNew);
    }
    
    render(){
        return(<div>
            {/* important to use key with any id inside the object in state */}
            {this.state.titles.map((title, index)=> <Title key={title.id} data={title} reportTitle={this.reportTitle} onDelete={this.handleDelete} />)}

            {/* create a button to restart values to initial values */}
            <button className="btn btn-secondary" onClick={()=>{this.handleReset()}} >Reset Values</button>
            {/* create small form with the added function of addTitle as a passed prop */}
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