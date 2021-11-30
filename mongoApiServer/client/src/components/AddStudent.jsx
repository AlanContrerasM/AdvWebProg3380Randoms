import React, {useState} from 'react'

const AddStudent = ({onAdd}) => {

    const [newStudent, setNewStudent] = useState(
        {
            "first_name": "",
            "last_name": "",
            "age": 0,
    })

    const handleSubmit = async (e)=>{
        e.preventDefault();
        //in this case no validation required. just use required on the form

        //send to our app, so they can update the state.
        try{

            await onAdd(newStudent);
            
        }catch(err){
            console.log(err, "from child");
        }
    }

    return (
        <div className="AddStudent">
            <div className="form-group container border p-2 my-2">
            <h1 className='text-center'>Add New Task</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                </label>
                <input type="text" value={newStudent.first_name} onChange={(e)=>{setNewStudent({...newStudent, "first_name": e.target.value})}} required className="form-control"/>
                <br/>
                <label>
                    Last Name:
                </label>
                <input type="text" value={newStudent.last_name} onChange={(e)=>{setNewStudent({...newStudent, "last_name": e.target.value})}} required className="form-control"/>
                <br/>
                <label>
                    Age:      
                </label>     
                <input type="number" value={newStudent.age} onChange={(e)=>{setNewStudent({...newStudent, "age": e.target.value})}} required className="form-control"/>         
                <br/>
                <button type="submit" className='btn btn-success btn-lg'>Add</button>
            </form>
        </div>
        </div>
    )
}

export default AddStudent
