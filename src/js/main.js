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
      makeTodoElem(oneVal.name,oneVal.id);
    })
  });
};

let makeTodoElem = (value,value1) => {

  let tag = document.createElement('div');
  tag.innerHTML = value;
  tag.className = 'new_class';
  takeContainer.appendChild(tag);
  tag.id = value1;


  let checkboxElem = document.createElement('input');
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.className = 'checkbox_class';
  tag.appendChild(checkboxElem);


  let deleteButton = document.createElement('button');
  deleteButton.className = 'dlt_btn';
  deleteButton .innerHTML = 'delete';
  tag.appendChild(deleteButton);

  tag.onclick = (ev) => {
    if(ev.target.className === 'checkbox_class'){
      tag.classList.add('check');
    }else if(ev.target.className === 'dlt_btn'){
      dlt_field();
      httpService.deleteTodo(tag.id);
    }
  };
  let dlt_field = () => {
    takeContainer.removeChild(tag);
  };
};

addButton.onclick = () => {
  let addValue = input.value;
  if(addValue.length > 0) {
    makeTodoElem(addValue);
    httpService.postFromInput(addValue);
    input.innerHTML = '';
  }else{
    alert('Enter todo Name');
  }
};


