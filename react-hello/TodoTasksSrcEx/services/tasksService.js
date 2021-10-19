const TaskService = (() => {
    let tasks = [
        {
            id: 0,
            title: "Life Plan",
            comments: "Get Rich",
        },
        {
            id: 1,
            title: "Life Plan",
            comments: "Get Rich",
        },
    ];
    
    function getTasks() {
        return tasks;
    }
    
    function setTasks(newTask) {
        tasks = newTask;
    }

    function filterTasks(filter){
        return tasks.filter((task)=>{

            if(task.title.includes(filter)){
                return true;
            }
            return false;
        })
    }
    return {
      getTasks,
      setTasks,
      filterTasks
    };
  })();




export {TaskService};
