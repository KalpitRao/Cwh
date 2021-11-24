//If else conditional & switches in js

const age =19;                                //(=)assignment operator
if (age == 19)                                //(==)compare operator, 
{
console.log('Age is  19')    
}
else if(age==34)                              // 
{
    console.log('age is 34')
}
else
{
console.log('age is not 19')
}



const doesDrive=false;                           //   && operator checks both the conditions is true;
if (doesDrive && age>18)
{
    console.log('You can drive');    
}
else{
    console.log('You cannot drive');
}


if (doesDrive || age >18)                        //    (||)Checks whether if one condition is true
{
console.log("You can Drive");    
} 
else 
{
    console.log("You cannot drive");
}




//Ternary Operator


console.log(age ==19? 'Age is 19 ' : 'Age is not 19' )




//Switch Case statements not that imp
switch (key) {
    case value:
        
        break;

    default:
        break;
}


