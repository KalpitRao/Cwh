//tutorial 7 :-arrays and objects in js


//Arrays


let marks=[34,45,65,24,78];
const fruits=['apple','pine','mango'];
const mixed = ['str',78,[3,5]];

console.log(typeof marks);
console.log(typeof fruits);
console.log(typeof mixed);



const arr =new Array(23,12,454, 'Orange');
console.log(arr);
console.log(arr.length);                    // property  length
console.log(Array.isArray(arr))             // array is  true or false   (true)
console.log(Array.isArray('bgdfjfj'))       // array is ture ofr false   (false)
 


let value = marks.indexOf(34);
console.log(marks);
console.log(value);



//Mutating or modifying arrays
marks.push(48);
console.log(marks);                          //push the integer to the end of the array

marks.unshift(1000);
console.log(marks);                          //push the integer to the start of the array

marks.pop();
console.log(marks);                          //removes the end element of the array


marks.shift()
console.log(marks);                          //removes the starting element of the array


marks.splice(1,2)                             //const marks=[34,45,65,24,78];
console.log(marks);                          // output:-[34,24,78]

marks.reverse()                              //reverse the  complete array
console.log(marks);

let marks2 =[1,2,3,4,5]                      //adds the marks2 variable in marks 
marks =marks.concat(marks2);
console.log(marks);






//objects

let myobj ={
    name :'kalpit'
    channel: 'codewithme'
    isActive: true;
    marks3: [1,2,3,4,5,6]
}
console.log(myobj);