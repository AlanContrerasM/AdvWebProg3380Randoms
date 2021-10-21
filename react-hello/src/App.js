import NavBar from './components/navbar';
import Tasks from './components/tasks';
import { TaskService } from './services/tasksService';
import React, { useState } from 'react';
import Form from './components/formTask';


function App() {
  const [tasks, setTasks] = useState(TaskService.getTasks());
  const [lastId, setLastId] = useState(TaskService.getTasks().length);


  const handleDelete =(id)=>{
    const newTasks= tasks.filter((task)=>task.id!==id);
    setTasks(newTasks);
    TaskService.setTasks(newTasks);
  }
  const handleAdd = (toBeAdded) =>{

    //format is id, title, comments
    const id = lastId + 1;
    setLastId(id);
    toBeAdded ={id , ...toBeAdded, editable:false};
    const newTasks = [...tasks, toBeAdded];
    console.log(toBeAdded);
    //update state and our service.
    setTasks(newTasks);
    TaskService.setTasks(newTasks);
  }

  const handleSearch =(search)=>{
    setTasks(TaskService.filterTasks(search));
  }

  // if 
  const handleEdits = (key, newContent = undefined, finished = false)=>{
    
    if (newContent === undefined) {
      //look for task, and make it editable
       setTasks(tasks.map((task)=>{
            if(task.id == key){
              task.editable = true;
            }
            return task;
          })
       );
    }else{
      //task got edited
      //change editable, and comment
      setTasks(tasks.map((task)=>{
          if(task.id == key){
            if(finished){ task.editable = false;}
            task.comments = newContent;
          }
          return task;
        })
      );
    }

    TaskService.setTasks(tasks);
  }



  return (
    <div className="App">
      <NavBar length={tasks.length} onSearch={handleSearch}/>
      <Form onAdd={handleAdd}/>
      <Tasks tasks={tasks} onDelete={handleDelete} onEdit={handleEdits}/>
      
    </div>
  );
}

export default App;
