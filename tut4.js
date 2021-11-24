////Tutorial 4: Data type -primitive and reference





/*Primitive Data types
1:String
2:Numbers
3:Boolean
4:Null
5:Undefined
6:Symbol
*/

/*Reference Data Types
1;arrays
2:object literals
3:function
4:dates
*/





//String
let name ="kalpit";
console.log("my string is " + name);
console.log("Data type is " + (typeof name));

//Numbers
let marks=34;
console.log("Data type is " + (typeof marks));


//Boolean
let isDriver =true;
console.log("Data type is " + (typeof isDriver));

//Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

//Undefined
let undef =undefined;
console.log("Data type is " + (typeof undef));




///reference data types

//Arrays

let myarr = [1,2,3,4,5,6,false];
console.log(myarr);
console.log("Data type is "+ (typeof myarr));

///Object Literals
let stMarks = {
    harry:34,
    kalpit:99,
    rohan:55
}
console.log(stMarks)
console.log(typeof stMarks);


//Function
function findname() {
    
}
console.log(typeof stMarks);
console.log(typeof findname);



//Dates
let date = new date();
console.log(typeof date);




