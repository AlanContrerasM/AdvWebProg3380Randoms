import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Titles from './components/titles';



class App extends React.Component{
  //making all the states here and stuff so everything is connected
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
  
  addTitle = (name, value)=>{
    const newId = this.state.titles.length + 1;
    const titlesNew = this.state.titles.map(title=>title);
    titlesNew.push({id: newId, name: name, value: value});
  
    this.setState({titles: titlesNew});
  
  }
  
  handleReset = () =>{
    console.log('clicked reset');
    const titlesNew = this.state.titles.map(title =>{
        title.value = 5;
        return title;
    })
  
    this.setState({titles: titlesNew});
  
  }
  
  reportTitle = (titleId)=>{
    const titleNew = this.state.titles.filter((title)=>title.id===titleId);
    console.table(titleNew);
  }
  
  handleUpdate = (title) =>{
    const index = this.state.titles.indexOf(title);
    const titlesNew = [...this.state.titles];
  
    titlesNew[index].value--;
  
    this.setState({titles: titlesNew});
  
  
  }

  render(){
    return (
      <div className="App">
        <NavBar titles={this.state.titles}/>
        <main className="container">
          <Titles 
            titles={this.state.titles}
            onUpdate={this.handleUpdate}
            onDelete={this.handleDelete}
            onReset={this.handleReset}/>
        </main>
      </div>
    );
  }
  
}

export default App;
