import React, { useState } from 'react';

function Form(props) {
    const [title, setTitle] = useState();
    const [comments, setComments] = useState();
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        //in this case no validation required. just use required on the form

        //send to our app, so they can update the state.
        props.onAdd({title, comments})
    }

    return ( 
        <div className="form-group container border p-2 my-2">
            <h1 className='text-center'>Add New Task</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                </label>
                <input type="text" value={title||""} onChange={(e)=>{setTitle(e.target.value)}} required className="form-control"/>
                <br/>
                <label>
                    Comments:      
                </label>     
                <input type="text" value={comments||""} onChange={(e)=>{setComments(e.target.value)}} required className="form-control"/>         
                <br/>
                <button type="submit" className='btn btn-success btn-lg'>Add</button>
            </form>
        </div>

    );
}

export default Form;