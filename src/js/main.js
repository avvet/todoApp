import '../css/main.scss';
import {httpService} from "./http/http-service";
import {printTodo} from "./helpers/todo-helper";


let getTodosBtn = document.getElementById('get_todos');
let todoInput = document.getElementById('todo_input');
let addNewTodoBtn = document.getElementById('add_todo_btn');

getTodosBtn.onclick = () => {
  httpService.getToDos((todosData) => {
    printNames(todosData)
  });
};

let printNames = (todosData) => {
  todosData.map( todo => {
    printTodo(todo.name);
  });
};

addNewTodoBtn.onclick = () => {
  printFromInput();
};

function printFromInput() {
  let inputValue = todoInput.value;
  if (inputValue.length > 0) {
    printTodo(inputValue);
    httpService.postToDo(inputValue);
    todoInput.value = '';
  } else {
    console.log('Enter todo Name');
  }
}
