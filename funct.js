function myfunction(){
console.log(" Hello world , This is my first function. ")
}
myfunction();

function myFunction(somenumber,somestring){
console.log(somenumber,somestring);
}

myFunction(67,"Hello");

const anotherfunction = function anotherFunction(){
console.log("This is the another Function ");
}
anotherfunction();

const arrowFunction =  ()=>{
console.log("I am the arrow function ");
}

arrowFunction()


function returnFunction() {
return "This is the return function ";
}

const returnResult = returnFunction();
console.log(returnResult);

const mynumber = 10;
 let myfun = ()=>{
 if(mynumber<50)
 {
    return 'return the function early ';
 }
 return mynumber;
 }
 
 let result = myfun();
 console.log(result);