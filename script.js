// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoTotal = document.querySelector('todo-total');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', closeDoneTodo);

// Functions
function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault();
  // Create todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  todoList.appendChild(todoDiv);
  // Create todo-item li
  if (todoInput.value === '') {
    alert('You must write something!')
  } else {
    const todoLi = document.createElement('li');
    todoLi.innerText = todoInput.value;
    todoLi.classList.add('todo-item');
    todoDiv.appendChild(todoLi);
    // Create todo-complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('todo-complete');
    todoDiv.appendChild(completedButton);
    // Create todo-trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('todo-trash');
    todoDiv.appendChild(trashButton);
    // Append todoDiv to todoList
    todoList.appendChild(todoDiv);
    // Clear todoInput value
    todoInput.value = '';
  }
}

function closeDoneTodo(e) {
  const item = e.target;
  // Delete todo
  if (item.classList.item(0) === 'todo-trash') {
    const close = item.parentElement;
    close.remove();
  };
  // Checked todo
  if (item.classList.item(0) === 'todo-complete') {
    const done = item.parentElement;
    done.classList.toggle('completed');
  };
}