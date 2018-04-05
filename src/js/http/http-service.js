import axios from "axios";

const BASE_URL = 'http://localhost:3000/';
const USERS = 'users';
const COMP = 'companies';
const DIVIDER = '/';

class HttpServiceClass{
  getPost(callback){
    axios.get(BASE_URL + 'post')
      .then(response => {
        console.log(response.data.age);
        callback(response.data.age);

      })
      .catch(error => {
        console.log(error, 'my error');
      });
  };
  mapPost(){
    axios.get(BASE_URL + COMP)
      .then(response => {
        console.log(response.data);
        compTitle(response.data);
      })
      .catch(error => {
        console.log(error, 'my error');
      });
  };
  postNewUser(){
    axios.post(BASE_URL + USERS,{
      firstname: "Tom",
      lastname: "Golubev",
      email: "tom@gmail.com",
      age: "68",
      companyId: "5"
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error,'my error');
      })
  };
  patchInfo(id){
    axios.patch(BASE_URL + USERS + DIVIDER + id,{
      age:89
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error, 'my error');
      })
  };
  deleteInfo(compId){
    axios.delete(BASE_URL + COMP + DIVIDER + compId )
      .then(response => {
        console.log(response.data);

      })
      .catch(error =>{
        console.log(error,'my error');
      })
  };
}

function compTitle(companies){
  companies.map(company => console.log(company.name));
}

let httpService = new HttpServiceClass();
export {httpService};