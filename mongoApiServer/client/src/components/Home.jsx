import React, {  } from 'react';

const Home = (props) => {
    const {students, onUpdate, onDelete} = props;


   

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                
                <tbody>
                    {students.map(student=>{
                        return (<tr key={student._id}>
                                    <td>{student.first_name}</td>
                                    <td>{student.last_name}</td>
                                    <td>{student.age}</td>
                                    <td><button className="btn btn-info btn-sm" onClick={()=>onUpdate(student)}>Update</button></td>
                                    <td><button className="btn btn-danger btn-sm" onClick={()=>onDelete(student._id)}>Delete</button></td>
                                </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home
