// What is prototype

// An original model on which something is patterned.

// Lets create a simple object and see what is prototype;


// creating object using Object.create();

// var obj = {
//     name:'bike',
// }

// we can add inheritance property to an object by constructor function and Object.create(obj) method.
//


// Inheritance 

// One object gets access to properties and methods of other object .

// JS has prototypal Inheritance.



// hasOwnProperty===>

// The hasOwnProperty() method in  JavaScriot is is used to check whether the object has the specified property as its own property.
//
// This is useful for cjecking if the object has inherited the the property rather than being it's own.

//Object.hasOwnProperty(prop)



// let newObj=Object.create(obj)
// // console.log(newObj)
// console.log(newObj.name);



//  

// console.log(a.hasOwnProperty('name'));//true
// console.log(b.hasOwnProperty('name'));//false


// Everything in JS is an object. 

// What that means is , Js has an object as its base prototype. from that, it creates other data types an dmethods that we can use on them.
//It's just how Js was decided to built.


// var arr = [1,2,3];

// Array.prototype.myPrint = function (){
//     console.log("Hi Ravi Singh is right now here");
// }
// arr.myPrint();

// const cat = {
//     legs:4,
//     tail:true,
//     furs: true, 
//     claws: "sharp"

// }

// const lion = Object.create(cat);
// console.log("lion",lion);



// const student = {
//     unit:3,
//     batch: "WEB 17", 
//     instructor:'SK',

// }






// const s1 = Object.create(student);
// const s2 = Object.create(student);
// const s3 = Object.create(student);
// s1.name="Ravi";
// s1.name="Avi";
// s1.name="Chhavi";

// function Student(u,n){
//     this.name=n;this.unit=u;
// }
// Student.prototype.bio=function(){
//     console.log(`hello from ${this.name}`);
// }
// let s1 = new Student(3,"Ravi");

// s1.bio();



