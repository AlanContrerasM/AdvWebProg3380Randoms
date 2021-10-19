import './styles.css';
import Header from './componentspart3/header';
import Footer from './componentspart3/footer';
import Note from './componentspart3/note';
import CreateArea from './componentspart3/createarea';
import React, { useState } from 'react';

// import Notes from './notes';

function App() {
  // console.log(Notes);
  const [notes, setNotes] = useState([]);
  //to handle new keys
  const [newId, setnewId] = useState(0);


  const handleAdd =(note)=>{
    //must have key, title and content
    console.log("handle add");
    const newNote = {
      key: newId,
      title: note.title,
      content: note.content
    }

    setNotes([...notes, newNote])
    setnewId(newId + 1);
  }

  const handleDelete = (key)=>{
    const newNotes = notes.filter((note)=>note.key!==key);
    setNotes(newNotes);
  }

  return (
    <div className="App">
      <Header name="Notes App" />
      <CreateArea onAdd={handleAdd}/>
     
      {notes.map((note)=>{
        return(<Note key={note.key} note={note} onDelete={handleDelete}/>);
      })}
    
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
