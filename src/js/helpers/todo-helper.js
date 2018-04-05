const SINGLE_TODO_CLASS = 'new_todo';
let todosContainer = document.getElementById('todos_container');

function printTodo(todoNameValue) {
  let todoName = document.createElement('p');
  todoName.innerHTML = todoNameValue;
  todoName.className = SINGLE_TODO_CLASS;
  todosContainer.appendChild(todoName);
};

export {printTodo};