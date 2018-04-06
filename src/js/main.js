import '../css/main.scss';
import {httpService} from "./http/http-service";
import {printTodo} from "./helpers/todo-helper";


let addAllItemsBtn = document.getElementById('main_btn');
let takeContainer = document.getElementById('container');
let addButton = document.getElementById('post_btn');
let input = document.getElementById('my_input');

addAllItemsBtn.onclick = () => {
  httpService.getAllTodos((val) => {
    val.map((oneVal) => {
      makeTodoElem(oneVal.name);
    })
  });
};
let makeTodoElem = (value) => {
  let tag = document.createElement('p');
  tag.innerHTML = value;
  tag.className = 'new_class';
  takeContainer.appendChild(tag);
};

addButton.onclick = () => {
  let addValue = input.value;
  makeTodoElem(addValue);
  httpService.postFromInput(addValue);
  input.innerHTML = '';
};

