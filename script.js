// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoTotal = document.querySelector('.todo-total');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkedCloseTodo);

// Functions
function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault();
  if (todoInput.value === '') {
    alert('You must write something!')
  } else {
    // Create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoList.appendChild(todoDiv);
    // Create todo-item li
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
    // Clear todoInput value
    todoInput.value = '';
    // Total item left
    todoTotal.innerText = todoList.childElementCount;
  }
}

function checkedCloseTodo(e) {
  const item = e.target;
  var i = 0;
  // Checked todo
  if (item.classList.item(0) === 'todo-complete') {
    const checkedTodo = item.parentElement.children[0];
    checkedTodo.classList.toggle('completed');
  };
  // Delete todo
  if (item.classList.item(0) === 'todo-trash') {
    const closeTodo = item.parentElement;
    closeTodo.remove();
  };
  // Total item left
  todoTotal.innerText = todoList.childElementCount - todoList.getElementsByClassName('completed').length;
}