// Object.keys() 
// Object.values()

// const person = {
//     prop: 42,
//     name: "abc"
//   };
  
  //hasOwnProperty()  //property   person.hasOwnProperty("name")
  
//   console.log(person.hasOwnProperty("age"))
  
//   const object1 = {
//     a: 'somestring',
//     b: 42,
//     name:"functionup"
//   };
  
//   console.log(Object.entries(object1))


/**
 * switch on -- call
 * input  -- arguments
 * sets of instruction (operation)
 * output
 */

// how to write a function.

//keyword function

// I am creating a function to add two numbers and will get the out sum

function addTwoNumber(firstNo, secondNo){
    const result = firstNo + secondNo

    return result
}

//how to call a function and send params/input/arguments

const sum1 = addTwoNumber(1312, 123)

const sum2 = addTwoNumber(678678, 89)


function multiplyTwoNumber( a, b){
    const result = a * b
    return result
}

const mul = multiplyTwoNumber(sum1, sum2)