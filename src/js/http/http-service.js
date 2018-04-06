import axios from "axios";

const BASE_URL = 'http://localhost:3000/';
const TODO_PL = 'todo';
const DIVIDER = '/';

class HttpServiceClass{
  getToDos(callback) {
    axios.get(BASE_URL + TODO_PL)
      .then(response => {
        console.log(response.data);
        callback(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  postToDo(todoName) {
    let newTodoObj = {
      name: todoName,
      completed:0
    };

    axios.post(BASE_URL + TODO_PL, newTodoObj)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
let httpService = new HttpServiceClass();
export {httpService};