//nice to-do list
//checkbox, lists, change status - add, remove, done
//input, add new list button
//deadline
//priority
//reminder
//visibility of done, not necessary
//statistics
//sharing
//repeating tasks
//users permissions; assign to-do button
//...........
//must have -
//  title,list, possibility to add newto-do: input, button
// changing the status, deadlines, order of tasks,

//inputs - array[(object: string, number, boolean),...]
//outputs - array of to-dos rendered as list items

/*steps:
    - add todo
    -- enter input
    -- submit input
    -- validate input(is it empty, does string exists as open todo) 
            >alert "check input string" and enter input again
    --create object from input string, number(default add to the bottom of list),
        boolean(default - isDone: false)
    -- add it to the list(push it to the list)
    - display list
    - mark as done
    - order / set priority
    - for the buttons we need eventlisteners
    */
const todo = document.querySelector("input[type='text']");
const addBtn = document.querySelector("button");
const list = document.querySelector("ol");

let todos = [];
let counter = todos.length == 0 ? 0 : todos.slice(-1).id;
console.log(counter);

//check duplicate entries
let isNewInputUnique = (newItem) => {
    if (todos.length == 0) return true;
    let isValid;
    for (i = 0; i < todos.length; i++) {
        if (newItem === todos[i].text) {
            return false;
        } else {
            isValid = true;
        }
    }
    return isValid;
};

let addToDo = () => {
    //get value from input
    let newItem = todo.value;
    //validate - on html and function
    if (isNewInputUnique(newItem)) {
        //to optimise - setting id not based on array length, but on the id of
        //last item
        todos.push(new ToDo(newItem, counter));
        counter += 1;
        displayList(todos);
    } else {
        alert("please enter correct task");
    }
    todo.value = "";
};

let clearList = () => {
    //I don't put input value so I can use innerHTML but safer to use textContent
    list.textContent = "";
    //list.innerHTML = "";
};

let displayList = (todos) => {
    //firstly need to clear html, to remove added elements in html.
    clearList();
    //create li elements for every todos
    for (i = 0; i < todos.length; i++) {
        let listItem = document.createElement("li");
        list.appendChild(listItem);
        let inputItem = document.createElement("input");
        inputItem.type = "checkbox";
        inputItem.name = i;
        inputItem.id = i;
        if (todos[i].isDone == true) {
            inputItem.checked = true;
        }
        listItem.appendChild(inputItem);
        let labelItem = document.createElement("label");
        //console.log(labelItem.attributes);
        labelItem.setAttribute("for", i);
        labelItem.innerText = todos[i].text;
        listItem.appendChild(labelItem);
    }

    // //add eventlistener for checkbox
    const listItems = document.querySelectorAll("input[type='checkbox']");

    for (i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("click", changeStatus);
    }
};

let changeStatus = (e) => {
    //check input - checkbox - if it is checked
    //find coresponding object and set isdone to true
    //if it is not checked - set isdone false
    if (e.target.checked) {
        for (i = 0; i < todos.length; i++) {
            if (todos[i].id == e.target.id) {
                todos[i].isDone = true;
            }
        }
    } else {
        for (i = 0; i < todos.length; i++) {
            if (todos[i].id == e.target.id) {
                todos[i].isDone = false;
            }
        }
    }
};

addBtn.addEventListener("click", addToDo);
displayList(todos);

function ToDo(text, id, isDone = false) {
    this.text = text;
    this.id = id;
    this.isDone = isDone;
}
