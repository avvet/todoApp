import '../css/main.scss';
import {httpService} from "./http/http-service";
import {printTodo} from "./helpers/todo-helper";


let addAllItemsBtn = document.getElementById('main_btn');
let takeContainer = document.getElementById('container');
let AddButton = document.getElementById('post_btn');
let input = document.getElementById('my_input');

addAllItemsBtn.onclick = () => {
  httpService.getTodoItems((massiv) => {
    massiv.map((value) => {
      printItem(value.name);
    })
  });
  // let printItem = (val) => {
  //   let newTag = document.createElement('p');
  //   newTag.innerHTML = val;
  //   newTag.className = 'newTodoName';
  //   takeContainer.appendChild(newTag);
  // }
};

let printItem = (val) => {
  let newTag = document.createElement('p');
  newTag.innerHTML = val;
  newTag.className = 'newTodoName';
  takeContainer.appendChild(newTag);
};

AddButton.onclick = () => {
  let item = input.value;
  if(item.length > 0){
    printItem(item);
    httpService.postInputElements(item);
  }else{
    alert('Enter todo Name');
  }
};
