//structure of list
/* <ul id="tasks" class="list-group">
    <li class="list-group-item">Task 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
    <li class="list-group-item">Task 2 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
    <li class="list-group-item">Task 3 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
    <li class="list-group-item">Task 4 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
</ul> */

let tasks = document.getElementById("tasks");


//delete children from tasks list

function removeTask(element){
    console.log("clicked " + element);
    //let index = Array.from(element.parentNode.parentNode.children).indexOf(element.parentNode);
    //console.log(index);
    tasks.removeChild(element.parentNode);
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

    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = document.getElementById("task").value;

    li.appendChild(button);
    tasks.appendChild(li);
    
  });



//filter tasks
//<input type="text" class="form-control" id="filter" placeholder="Search Tasks...">
