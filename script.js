// const newTaskInput =  document.querySelector("#new-task input");
// const tasksDiv = document.querySelector("#tasks");
// let deleteTasks , editTasks , tasks ; 
// let UpdateNote = "";
// let count;

// window.onload=()=>{
//     UpdateNote = "";
//     count=Object.keys(localStorage).length;
//     displayTasks();
// };


// const displayTasks=()=>{
//     if (Object.keys(localStorage).length>0) {
//         tasksDiv.style.display = "inline-block";

//     }
//     else{
//         tasksDiv.style.display="none";
//     }

//     tasksDiv.innerHTML="";


//     let tasks = Object.keys(localStorage);
//     tasks=tasks.sort();

//     for(let key of tasks){
//         let classValue = "";


//         let value=localStorage.getItem(key);
//         let taskInnerDiv= document.createElement("div");
//         taskInnerDiv.classList.add("task");
//         taskInnerDiv.setAttribute("id",key);
//         taskInnerDiv.innerHTML=`<span id="taskname">${key.split("_")[1]} </span>`;
    


//     let editButton = document.createElement("button");
//     editButton.classList.add("edit");
//     editButton.innerHTML= `<i class="fa-solid fa-pen-to-square" style="color: #000000;"></i></i>`;

//     if (!JSON.parse(value)) {
//         editButton.style.visibility="visible"   ;     
//     }
//     else{
//         editButton.style.visibility="hidden"   ;     
//         taskInnerDiv.classList.add("completed");
//     }

//     taskInnerDiv.appendChild(editButton);
//     taskInnerDiv.innerHTML += `<button class="delete"><i class="fa-solid fa-trash" style="color: #000000;"></i></button>`;
//     tasksDiv.appendChild(taskInnerDiv);


//     }

// tasks = document.querySelectorAll(".task");
// tasks.forEach((element,index) => {
//     element.onclick=()=>{

//         if (element.classList.contains("completed")) {
//             updateStorage(element.id.split("_")[0],
//         element.innerText,false);
//         }
//         else{
//             updateStorage(element.id.split("_")[0],
//             element.innerText,true);
//         }
//     };
// });

//         editTasks = document.getElementsByClassName("edit");
//         Array.from(editTasks).forEach((element,index) => {
//             element.addEventListener("click", (e) => {

//                 e.stopPropagation();

//                 disableButtons(true);

//                 let parent = element.parentElement;
//                 newTaskInput.value = parent.querySelector("#taskname").innerText;

//                 UpdateNote=parent.id;

//                 parent.remove();
//             });
//         });

//         deleteTasks = document.getElementsByClassName("delete");
//         Array.from(deleteTasks).forEach((element,index) => {
//             element.addEventListener("click", (e) => {
//                 e.stopPropagation();

//                 let parent = element.parentElement ;
//                 removeTask(parent.id);
//                 parent.remove();
//                 count -= 1;
//             });
//         });

// };

// const disableButtons = (bool) =>{
//     let editButtons=document.getElementsByClassName("edit");
//     Array.from(editButtons).forEach((element)=> {element.disabled=bool});

// };

// const removeTask = (taskValue) =>{
//         localStorage.removeItem(taskValue);
//         displayTasks();
// };

// const updateStorage = (index,taskValue,completed) => {
//     localStorage.setItem(`${index}_${taskValue}`
//         ,completed);
//     displayTasks();

// };

// document.querySelector("#push").addEventListener("click",()=>{
//     disableButtons(false);

//     if (newTaskInput.value.length==0) {
//         alert("please Enter A task")
//     }
//     else{
//         if (UpdateNote == "") {
//             updateStorage(count,newTaskInput.value,false);
//         }
//         else{
//             let existingCount = UpdateNote.split("_")[0];
//             removeTask(UpdateNote);
//             updateStorage(existingCount,newTaskInput.value,false);
//             UpdateNote="";
//         }
//         count +=1;
//         newTaskInput.value="";
//     }
// });









const newTaskInput = document.querySelector("#new-task input");
const tasksDiv = document.querySelector("#tasks");
let deleteTasks, editTasks, tasks;
let UpdateNote = "";
let count;

window.onload = () => {
    UpdateNote = "";
    count = Object.keys(localStorage).length;
    displayTasks();
};

// const displayTasks = () => {
//     if (Object.keys(localStorage).length > 0) {
//         tasksDiv.style.display = "inline-block";
//     } else {
//         tasksDiv.style.display = "none";
//     }

//     tasksDiv.innerHTML = "";

//     tasks = Object.keys(localStorage);  // Use already declared tasks variable
//     tasks = tasks.sort();

//     for (let key of tasks) {
//         let classValue = "";

//         let value = localStorage.getItem(key);
//         let parsedValue = JSON.parse(value);
        
//         let taskInnerDiv = document.createElement("div");
//         taskInnerDiv.classList.add("task");
//         taskInnerDiv.setAttribute("id", key);
//         taskInnerDiv.innerHTML = `<span id="taskname">${key.split("_")[1]} </span>`;

//         let editButton = document.createElement("button");
//         editButton.classList.add("edit");
//         editButton.innerHTML = `<i class="fa-solid fa-pen-to-square" style="color: #000000;"></i>`;

//         if (!parsedValue.completed) {
//             editButton.style.visibility = "visible";
//         } else {
//             editButton.style.visibility = "hidden";
//             taskInnerDiv.classList.add("completed");
//         }

//         taskInnerDiv.appendChild(editButton);
//         taskInnerDiv.innerHTML += `<button class="delete"><i class="fa-solid fa-trash" style="color: #000000;"></i></button>`;
//         tasksDiv.appendChild(taskInnerDiv);
//     }

//     tasks = document.querySelectorAll(".task");
//     tasks.forEach((element) => {
//         element.onclick = () => {
//             let taskId = element.id.split("_")[0];
//             let taskText = element.querySelector("#taskname").innerText;
//             let taskCompleted = element.classList.contains("completed");

//             updateStorage(taskId, taskText, !taskCompleted); // Toggle the completed state
//         };
//     });

//     editTasks = document.getElementsByClassName("edit");
//     Array.from(editTasks).forEach((element) => {
//         element.addEventListener("click", (e) => {
//             e.stopPropagation();

//             disableButtons(true);

//             let parent = element.parentElement;
//             newTaskInput.value = parent.querySelector("#taskname").innerText;

//             UpdateNote = parent.id;

//             parent.remove();
//         });
//     });

//     deleteTasks = document.getElementsByClassName("delete");
//     Array.from(deleteTasks).forEach((element) => {
//         element.addEventListener("click", (e) => {
//             e.stopPropagation();

//             let parent = element.parentElement;
//             removeTask(parent.id);
//             parent.remove();
//             count -= 1;
//         });
//     });
// };


const displayTasks = () => {
    if (Object.keys(localStorage).length > 0) {
        tasksDiv.style.display = "inline-block";
    } else {
        tasksDiv.style.display = "none";
    }

    tasksDiv.innerHTML = ""; // Clear the tasks div

    tasks = Object.keys(localStorage);
    tasks = tasks.sort();

    for (let key of tasks) {
        let value = localStorage.getItem(key);
        let parsedValue = JSON.parse(value);

        let taskInnerDiv = document.createElement("div");
        taskInnerDiv.classList.add("task");
        taskInnerDiv.setAttribute("id", key);
        taskInnerDiv.innerHTML = `<span id="taskname">${key.split("_")[1]} </span>`;

        let editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerHTML = `<i class="fa-solid fa-pen-to-square" style="color: #000000;"></i>`;

        if (!parsedValue.completed) {
            editButton.style.visibility = "visible";
        } else {
            editButton.style.visibility = "hidden";
            taskInnerDiv.classList.add("completed");
        }

        taskInnerDiv.appendChild(editButton);
        taskInnerDiv.innerHTML += `<button class="delete"><i class="fa-solid fa-trash" style="color: #000000;"></i></button>`;
        tasksDiv.appendChild(taskInnerDiv);
    }

    // Use event delegation to handle task clicks
    tasksDiv.addEventListener("click", (e) => {
        if (e.target.classList.contains("task")) {
            let taskId = e.target.id.split("_")[0];
            let taskText = e.target.querySelector("#taskname").innerText;
            let taskCompleted = e.target.classList.contains("completed");

            updateStorage(taskId, taskText, !taskCompleted); // Toggle the completed state
        }

        // Handle edit button click
        if (e.target.classList.contains("edit")) {
            e.stopPropagation();

            disableButtons(true);

            let parent = e.target.parentElement;
            newTaskInput.value = parent.querySelector("#taskname").innerText;

            UpdateNote = parent.id;

            parent.remove();
        }

        // Handle delete button click
        if (e.target.classList.contains("delete")) {
            e.stopPropagation();

            let parent = e.target.parentElement;
            removeTask(parent.id);
            parent.remove();
            count -= 1;
        }
    });
};


const disableButtons = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) => {
        element.disabled = bool;
    });
};

const removeTask = (taskValue) => {
    localStorage.removeItem(taskValue);
    displayTasks();
};

const updateStorage = (index, taskValue, completed) => {
    localStorage.setItem(`${index}_${taskValue}`, JSON.stringify({ task: taskValue, completed: completed }));
    displayTasks();
};

document.querySelector("#push").addEventListener("click", () => {
    disableButtons(false);

    if (newTaskInput.value.length == 0) {
        alert("Please enter a task");
    } else {
        if (UpdateNote == "") {
            updateStorage(count, newTaskInput.value, false);
        } else {
            let existingCount = UpdateNote.split("_")[0];
            removeTask(UpdateNote);
            updateStorage(existingCount, newTaskInput.value, false);
            UpdateNote = "";
        }
        count += 1;
        newTaskInput.value = "";
    }
});
