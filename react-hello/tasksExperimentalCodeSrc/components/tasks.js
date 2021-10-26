import React, { useState, useEffect } from 'react';

function Tasks(props) {
    
    
    return (  
        <div className="table-responsive text-center">
            <h2>My Current Tasks</h2>
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Comments</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.tasks.map(task=>{
                    console.log("creating task: ", task.id);
                    return (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        {/* doing some conditional to maybe edit it. */}
                        { task.editable ? 
                                        <td><input type='text' 
                                            value={task.comments} 
                                            onChange={(e)=>props.onEdit(task.id, e.target.value, false)}
                                            autoFocus={true}
                                            onBlur={(e) => props.onEdit(task.id, e.target.value, true)}
                                        /></td>
                                        : <td onClick={()=>props.onEdit(task.id)}>{task.comments}</td> 
                         }
                        
                        <td><button onClick={()=>props.onDelete(task.id)} className="btn btn-outline-success">Done</button></td>
                    </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
    );
}

export default Tasks;