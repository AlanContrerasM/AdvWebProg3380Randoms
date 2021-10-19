import React, { Component } from 'react';

const Note = (props) => {

    return ( 
        <div className="note">
            <h1>{props.note.title}</h1>
            <p>{props.note.content}</p>
            <button onClick={()=>props.onDelete(props.note.key)} >Delete</button>
        </div>
  );
}
 
export default Note;
