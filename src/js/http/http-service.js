import axios from "axios";

const BASE_URL = 'http://localhost:3000/';
const USERS = 'users';
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


}

let httpService = new HttpServiceClass();
export {httpService};