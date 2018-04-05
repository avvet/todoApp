import '../css/main.scss';
import '../user.html';

import $ from 'jquery';

import {func} from './second';
func();

// import {funct} from "./http/http-service";

import {httpService} from "./http/http-service";

console.log('Hello,world');

let getPostsBtn = document.getElementById('btn');
let singlePostBtn = document.getElementById('single_btn');
let myParagraph = document.getElementById('paragraph');
let dltBtn = document.getElementById('dlt_btn');
let changeDescript = document.getElementById('change_descript');


//////////////////////////////////////////////////
// // getPostsBtn.onclick = () => {
// //   httpService.getAll();
// //   // httpService.getId();
// //
// // };
// //
// // singlePostBtn.onclick = () => {
// //   httpService.postAll();
// // };
// //
// // myParagraph.onclick = () => {
// //   httpService.patchAll();
// // };
// //
// // dltBtn.onclick = () => {
// //   httpService.deleteAll();
// // };
// //
// // change_descript.onclick = () => {
// //   httpService.getDescription(description => {
// //     print(description);
// //   });
// // };
// //
// // function print(description){
// //   myParagraph.innerHTML = description;
// }


// getPostsBtn.onclick = () => {
//   httpService.getPost((age)=>{
//     myParagraph.innerHTML = age;
//   });
// };
//
// singlePostBtn.onclick = () => {
//   httpService.postNewUser();
// };
//
// myParagraph.onclick = () => {
//   httpService.patchInfo('1');
// };
//
// dltBtn.onclick = () => {
//   httpService.deleteInfo('1');
// };
//
// changeDescript.onclick = () => {
//   httpService.mapPost();
// }

//////////////////////////////////////////////////////////////////////////////

// var myNodeList = document.getElementsByTagName('li'),
//   close = document.getElementsByClassName('close'),
//   list = document.querySelector('ul');
//
// list.addEventListener('click', function(ev) {
//   if(ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// },false);
//
// for (var i = 0; i<myNodeList.length; i++) {
//   var span = document.createElement('span'),
//     txt = document.createTextNode('\u00D7');
//
//   span.className = 'close';
//   span.appendChild(txt);
//   myNodeList[i].appendChild(span);
// }
// for (var i = 0; i<close.length; i++) {
//   close[i].onclick = function () {
//     var div = this.parentElement;
//     div.style.display = 'none';
//   }
// }
// let mySpan = document.getElementById('mySpan');
//
// function newElem() {
//   var li = document.createElement('li'),
//     inputValue = document.getElementById('myInput').value,
//     t = document.createTextNode(inputValue);
//   li.appendChild(t);
//
//   if (inputValue === "") {
//     alert('Ошибка')
//   } else {
//     document.getElementById('myList').appendChild(li);
//   }
//   document.getElementById('myInput').value = "";
//
//   var span = document.createElement('span'),
//     txt = document.createTextNode('\u00D7');
//
//   span.className = 'close';
//   span.appendChild(txt);
//   li.appendChild(span);
//
//   for (var i = 0; i<close.length; i++) {
//     close[i].onclick = function () {
//       var div = this.parentElement;
//       div.style.display = 'none';
//     }
//   }
// }
// mySpan.onclick = () => {
//   newElem();
// }
let li = document.getElementsByTagName('li');
let title = document.getElementsByClassName('title');
function makeTaskDone() {
     li.className = 'checked';
}

title.onclick = () => {
  makeTaskDone();
}

