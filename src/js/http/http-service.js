import axios from "axios";

const MAIN_URL = 'http://localhost:3000/';
const TODO = 'todo';

class HttpService{
  getAllTodos(callback){
    axios.get(MAIN_URL + TODO)
     .then(response => {
      console.log(response.data);
      callback(response.data);
     })
     .catch(error => {
      console.log(error);
     })
  }
  postFromInput(someName){
    axios.post(MAIN_URL + TODO,{
      name: someName,
      completed: 0
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
let httpService = new HttpService();
export{httpService}

