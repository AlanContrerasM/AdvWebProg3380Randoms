import logo from './logo.svg';

import NavBar from './components/navbar';
import Tasks from './components/tasks';
import { TaskService } from './services/tasksService';
import React, { useState } from 'react';
import Form from './components/formTask';


function App() {
  const [tasks, setTasks] = useState(TaskService.getTasks());
  const [lastId, setLastId] = useState(TaskService.getTasks().length);

  const handleDelete =(id)=>{
    const newTasks= tasks.filter((task)=>task.id!=id);
    setTasks(newTasks);
    TaskService.setTasks(newTasks);
  }
  const handleAdd = (toBeAdded) =>{

    //format is id, title, comments
    const id = lastId + 1;
    setLastId(id);
    toBeAdded ={id , ...toBeAdded};
    const newTasks = [...tasks, toBeAdded];
    console.log(toBeAdded);
    //update state and our service.
    setTasks(newTasks);
    TaskService.setTasks(newTasks);
  }

  const handleSearch =(search)=>{
    setTasks(TaskService.filterTasks(search));
  }


  return (
    <div className="App">
      <NavBar length={tasks.length} onSearch={handleSearch}/>
      <Form onAdd={handleAdd}/>
      <Tasks tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
