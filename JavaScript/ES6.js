//ES6 was the  second mejor revision to JavaScript.
// ECMaScript 6 is also known as ES6 and Ecma Script 2015.
// This chpter describes the most important features of ES6.

// ES 6 allows you to write the code in such a way that makes your code more modern and readable.
//By using ES6 features, we write less and do more so the term "Write less, do more" suits ES6.

// let keyword allows you to declare a variable with block scope.

// Const keyword allows you to declare a constant (a JavaScript variable with a constant value)

// Constant are similar to let variables except that the value cannot be changed.

// 



//Arrow Function =>
// 
// function test(){
//     console.log("hello Satyendra Pratap Singh is right now here");

// }

// let doTest =  () =>{
//     console.log("Hello");
// }
// doTest();
// test();

// let arr = [ 1,2,3,4,5];
// arr.forEach((el)=>{
//     console.log(el);
// } )


// This is another way to write function 
// Arrow functions are a simpler and more compact way of writing functions in JavaScript. 
// Two Factor influenced the introduction of arrow functions:

//1. The need for shorter functions 

//2. Behavior of the this keyword.

// The new arrow functionns also ensures that 'this' is handled better.

// Arrow functions do not have their own this keyword property.

/*


// Destructuring  
// 




//Spread
*/
// let colour1 = [ 'red', 'green', 'black' ];

// let colour2 = [ ...colour1, 'voilet', 'orange', 'hero' ];
// console.log(colour2)


// let user1 = {
//     name:"swanand",

// }

// const city1 = {
//     city:"Pune"
// }

// const details = {
//     ...user1,...city1
// }
// console.log(details)






//Rest Operator
//


// The rest parameter is introduced in ECMAScript 2015 or ES6 which improves the ability to handle parameters. The rest  parameter allows us to represent an indefinite number of arguments as an array.
// By using th erest parameter a function can be called with any number of arguments.
//

// const user = { 
//     name: 'Ravi', 
//     city: 'Pune', 
//     age: 25,
//      role:'Developer'

// }

// const {name, ...rest}= user;
// console.log(name,rest);





// let arr = [1,2,3,4];

// let printArray = (...a) => {
//      console.log(a);
//     //  let arr = [];
//     //  arr.push(arguments[i])
//     //  console.log(arr)

//     let sum = 0;

//     for(let num of a){
//         sum+=num;
//     }
//     console.log(sum);
// }
// printArray(10,20,30)



