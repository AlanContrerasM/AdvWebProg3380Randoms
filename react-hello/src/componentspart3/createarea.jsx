import React, { useState } from 'react';

function CreateArea(props) {
    //this represents the note object. {title, content}
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        //in this case no validation required. just use required on the form

        //send to our app, so they can update the state.
        props.onAdd({title, content})

        //reset the form?
        setTitle("");
        setContent("");
    }

    return ( 

        <form onSubmit={handleSubmit}>

            <input type="text" value={title||""} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title here..." required />
            <br/>
    
            <textarea type="textarea" value={content||""} onChange={(e)=>{setContent(e.target.value)}} placeholder="Add a note here..." required />         
            <br/>
            <button type="submit" >Add</button>
        </form>


    );
}

export default CreateArea;