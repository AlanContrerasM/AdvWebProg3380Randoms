document.addEventListener("DOMContentLoaded", function(event) { 
   
/**
 * Solution 1 -- to-Do List
 * 
 */
//structure of list
/* <ul id="tasks" class="list-group">
    <li class="list-group-item">Task 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
   ...
</ul> */

let tasks = document.getElementById("tasks");
let filter = document.getElementById("filter");
let tasksList = [];

//create an Array from the current tasks, so we can manipulate it.
let buttonIndex = 0;
for(let li of tasks.children){
    tasksList.push(li.textContent.slice(0,li.textContent.length - 2));

    //add extra attribute to delete button for easy remove operation
    li.children[0].setAttribute('indexOnli', buttonIndex);
    
    buttonIndex++;
}
//console.log(tasksList);


//delete children from tasks list
function removeTask(element){
    //console.log(element.parentNode.parentNode.children);
    //let index1 = Array.from(element.parentNode.parentNode.children).indexOf(element.parentNode);
    tasks.removeChild(element.parentNode);

    //var index = 0;
    //while( element.parentNode.previousSibling != null ){index++;}
    
    console.log(element.getAttribute('indexOnli'));
    tasksList.splice(element.getAttribute('indexOnli') ,1);
}


//delete tasks listener
//get current tasks delete butons and add the event listener
document.querySelectorAll(".delete").forEach(ele =>{
    ele.addEventListener("click", ()=> removeTask(ele));
})

//addForm
/*
<form id="addForm" class="form-inline mb-3">
        <input type="text" class="form-control mr-2" id="task">
        <input type="submit" class="btn btn-dark" value="Submit">
      </form>
*/

let addForm = document.getElementById("addForm");
addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //<li class="list-group-item">Task 4 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
    let button = document.createElement("button");

    button.classList.add("btn", "btn-danger", "btn-sm", "float-right", "delete");
    button.textContent = "X";
    button.addEventListener("click", ()=> removeTask(button));
    button.setAttribute('indexOnli', tasksList.length);

    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = document.getElementById("task").value + " ";

    li.appendChild(button);
    tasks.appendChild(li);

    tasksList.push(document.getElementById("task").value )

    //clear input field
    document.getElementById("task").value = "";
    
  });



//filter tasks
//<input type="text" class="form-control" id="filter" placeholder="Search Tasks...">
filter.addEventListener("input", e =>{

    let indexOnli =[];

    //filter tasks array with search parameter
    let foundTasks = tasksList.filter((task, index)=>{
        if(task.includes(e.target.value)){
            indexOnli.push(index);
            return true;
        }
        
    })

    //clear current tasks Dom list
    tasks.innerHTML = "";

    //create new DOM list with filtered arraylist
    foundTasks.forEach((task, i)=>{
        let button = document.createElement("button");

        button.classList.add("btn", "btn-danger", "btn-sm", "float-right", "delete");
        button.textContent = "X";
        button.setAttribute('indexOnli', indexOnli[i]);
        button.addEventListener("click", ()=> removeTask(button));
        console.log(indexOnli[i]);
    
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = task + " ";
    
        li.appendChild(button);
        tasks.appendChild(li);
    })
})


/**
 * Solution 2 -- Seashore Supplies
 * 
 */




/**
 * Solutionn 3 -- Changing Quotes
 * 
 */




/**
 * Solution 4 -- Animated Images
 * 
 */





/**
   * Solution 5 --Slide Show
   * 
   */




/**
 * Solution 6 -- Bouncing Balls  ----- Optional
 * 
 */



/**
 * Solution 7 -- Moving Helicopter ----- Optional
 * 
 */

 });
 

