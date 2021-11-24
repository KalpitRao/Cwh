//tutorial 5: type conversion and type coercion




//type conversion
console.log("Welcome to my world")
let myVar;
myVar=String(34);

console.log(myVar, (typeof myVar));



let booleanVar=String(true);
console.log(booleanVar, (typeof booleanVar));



let date =String(new Date());
console.log(date,(typeof date));



let arr =String([1,2,3,4,5]);
console.log(arr.length,(typeof arr));



let i = 8;
console.log(i.toString());





//type coercion
let mystr =Number("698");
let mynum = 34;
console.log(mystr + mynum);
