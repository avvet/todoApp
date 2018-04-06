import axios from "axios";

const MAIN_URL = 'http://localhost:3000/';
const TODO = 'todo';

 class HttpService {
    getTodoItems(callback){
      axios.get(MAIN_URL + TODO)
        .then(response => {
          console.log(response.data);
          callback(response.data);
        })
        .catch(error =>{
          console.log(error);
        })
    }
   postInputElements(newTodo){
      axios.post(MAIN_URL + TODO,{
        name: newTodo,
        completed: 0
      })
        .then(response => {
          console.log(response.data);

        })

        .catch(error => {
          console.log(error);
        })
   }
 }
 let httpService = new HttpService();
 export{httpService}