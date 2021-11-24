//For,while & do while loops in js..........
// loops is an instruction which repeats itself till the specific condition is false..........


//General loops:             for,while,do-while



//for loop

//print numbers from 1-99
for (let i = 0; i <100; i++) 
{
   // console.log(i);   
}


//while loop

//print numbers from 0-99 

let j= 0;
while (j<100) 
{
//console.log(j);
j+=1;    
}

//do-while
let k=0;
do {
    console.log(k+1);
    k+=1;
} while (k<100);




//for each                                      //iterating each element in an array
let arr =[1,2,3,4,5,6]
arr.forEach(function(element){
    console.log(element);
})

//not using foreach                             //               
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}