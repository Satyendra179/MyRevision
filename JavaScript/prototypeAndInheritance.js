// What is prototype

// An original model on which something is patterned.

// Lets create a simple object and see what is prototype;


// creating object using Object.create();

var obj = {
    name:'bike',
}

let newObj=Object.create(obj)
// console.log(newObj)
console.log(newObj.name);