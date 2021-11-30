import { useState, useEffect } from 'react';
import axios  from 'axios';
import Home from './components/Home';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import AddStudent from './components/AddStudent';

function App() {
  const [students, setStudents] = useState([])
  const navigate = useNavigate();
  

  const handleUpdate = async (student) =>{
    try{
      const updatedStudent = {...student, "first_name": "alan", "last_name": "alan", "age": 32}
      const resp = await axios.put(`http://localhost:5000/api/StudentInfo/${student._id}`, updatedStudent)
      // console.log(resp);
      fetchData();
      // const index = students.indexOf(student);
      // students[index] = updatedStudent;
      // setStudents([...students]);

    }catch(err){
      console.log(err);
    }
  } 

  const handleDelete = async (id) =>{
    try{

      const resp = await axios.delete(`http://localhost:5000/api/StudentInfo/${id}`);
      // console.log(resp);
      fetchData();

    }catch(err){
      console.log(err);
    }
  }
  const handleAdd = async (newStudent) => {
    try{
      
      const resp = await axios.post(`http://localhost:5000/api/StudentInfo/`, newStudent)
      // if(typeof data === 'object');
      console.log(resp);
      fetchData();
      navigate("/");


    }catch(err){
      console.log(err);
      throw new Error("bad request");
    }
  }

  async function fetchData(){
    try{
      const resp = await axios.get("http://localhost:5000/api/StudentInfo/")
      console.log(resp);
      setStudents(resp.data);
    }catch(err){
      console.log(err);
    }
  }


  useEffect(() => {
    fetchData();
    // return () => {
    //   cleanup
    // }
  }, [])


  return (
    <div className="App">
      
        <Link to="/addStudent">
          <button className="btn btn-info btn-sm">Add</button>
        </Link>
        {/* takes students, onUpdate, onDelete */}
        <Routes>
          <Route path='/' element={<Home students ={students} onUpdate={handleUpdate} onDelete={handleDelete}></Home>} />
          <Route path='/addStudent' element={<AddStudent onAdd={handleAdd}/>} />

        </Routes>
    </div>
  );
}

export default App;
