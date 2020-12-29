// Selectors:
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners:
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions:

// 1) Function to display the name of the user.
function showUserName() {
    userName = document.getElementById("user-input").value;

    // Proceeding only after receiving the name as an input from the user:
    if (document.getElementById("user-input").value == "") {
        alert("Please enter your name to continue.");
        return false;
    }
    document.getElementById("list-name").innerHTML = `Hi ${userName}! Start adding your items in the box below and create your list now!`;
    document.getElementById("head").innerHTML = `${userName}'s todo list!`

    // Emptying the box to get a new name:
    document.getElementById("user-input").value = "";

}

// 2) Function to add a new todo to the list:
function addTodo(event) {
    event.preventDefault(); //Prevents page from submitting the form which inturn causes the page to reload.

    // Proceeding only after receiving the input from the user:
    if (todoInput.value == "") {
        alert("Please enter a task to continue.");
        return false;
    }

    // Creating a new div and assigning a new class:
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Creating a new li i.e a list item to store the newly added todo's and assigning a new class:
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");

    // Appending the li to the div:
    todoDiv.appendChild(newTodo);

    // Creating a new button to tick mark the tasks that are completed and then assigning a new class:
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");

    // Appending the button to the div:
    todoDiv.appendChild(completedButton);

    // Creating a new button to delete the tasks that are not to be completed and then assigning a new class:
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");

    // Appending the button to the div:
    todoDiv.appendChild(trashButton);

    // Appending the div which we created now to the ul back in html:
    todoList.appendChild(todoDiv);

    // Emptying the box to enter a new task:
    todoInput.value = "";
}

// 3) Function to remove the task:
function deleteCheck(e) {
    const item = e.target;

    // Deleting the particular task if the user clicks on the trash button:
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })

    }

    // If the user clicks on check button we toggle a class of 'completed' to add the necessary styles:
    if (item.classList[0] === "completed-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// 4) Function for the select dropdown option:
function filterTodo(e) {

    [...document.getElementsByClassName('todo')].forEach(function (ele) {

        // If the user selects "all" from the dropdown menu, we display all the tasks:
        if (e.target.value === "all") {
            ele.style.display = "flex";
        }

        // If the user selects "completed" from the dropdown menu, we display all the completed tasks:
        if (e.target.value === "completed") {
            if (ele.classList.contains("completed")) { // Checking for the 'completed' class which keeps on toggling.
                ele.style.display = "flex";
            } else {
                ele.style.display = "none";
            }
        }

        // If the user selects "Not Completed" from the dropdown menu, we display all the incomplete tasks:
        if (e.target.value === "incomplete") {
            if (!ele.classList.contains("completed")) { // If the element doesn't have the completed class, we display it.
                ele.style.display = "flex";
            } else {
                ele.style.display = "none";
            }
        }
    });

}
