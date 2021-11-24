///Tutorial 6:-   strings:Properties,Methods And Template Literals in js                                   (pending)

console.log("we are tut 6");

const name= "kalpit";
const greeting ="Hie How are you";
console.log(greeting + '' + name);



let html;
html = "<h1> this is my heading </h1>"
"<p> this is my para </p>"
html = html.concat('this' , 'str2');               //string function-->   concat
console.log(html);                                                 
console.log(html.length);                         //string function-->   length 
console.log(html.toLowerCase());                  //string function-->   toLowerCase
console.log(html.toUpperCase());                  //string function-->   toUpperCase
console.log(html[5]);                             //string function-->   index
console.log(html.indexOf('my'));                  //string function-->   indexof
console.log(html.substring(1,8));                 //string function-->   substring
console.log(html.slice(-4));                      //string function-->   slice
console.log(html.slice(1,6));                     //string function-->   slice






//template literals

let fruit1 ="orange";
let fruit2 ="apple";
let myHtml =`hello ${name}
             <h1>this is my heading </h1>
             <p>you like ${fruit1} and ${fruit2}`;

document.body.innerHTML= myHtml;                 //html ke body ke andar print karne...................






//homework
let pubg= 'mortal';
let bgmi='jonathan';

let over = `hello ${pubg} and ${bgmi} you both are great`;

document.body.innerHTML = over;