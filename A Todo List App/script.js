const addTask = document.querySelector('.add');
const SearchTask = document.querySelector('.search');
const listTask = document.querySelector('.todos');

 // load tasks from local storage
 const loadTasks = () => {

    const tasks = JSON.parse(localStorage.getItem('todos'))  || [];
    tasks.forEach(todo => generateTemplate(todo)); // display loaded tasks

 };

 // generate a new todo template
const generateTemplate = todo => {
    const html = `
      <li class="list-group-item">
         <span>${todo}</span>
         <i class="fa-regular fa-trash-can delete"></i>
      </li>
    `;
    listTask.innerHTML += html;
};

 // filter todos based on the search term
const filterTodos = term => {

    // add filtered class
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    // remove filtered class
    Array.from(list.children)
    .filter(todo => task.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
};

 // save todos to local storage
 const saveTasks = () => {

    // get all the todo texts
    const todos = Array.from(listTask.children).map(todo => todo.textContent.trim());

    // store tasks in local storage
    localStorage.setItem('todos', JSON.stringify(todos));
 }

 // add todos event
addTask.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addTask.add.value.trim();

    if (todo.length) {
        generateTemplate(todo); // Add the new task to the list
        saveTasks(); // Update local storage
        addTask.reset(); // Clear the input field
    }

});

 // Delete todos event
listTask.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
      e.target.parentElement.remove(); // Remove the task from the list
      saveTasks(); // Update local storage after deletion
    }

});

  // Filter todos event
SearchTask.addEventListener('keyup', () => {

    const term = search.value.trim().toLowerCase(); // Get the search term
    filterTodos(term); // Apply the filter

});

 // Load tasks from local storage when the page is loaded
document.addEventListener('DOMContentLoaded', loadTasks);