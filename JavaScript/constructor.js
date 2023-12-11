

// Object are real world examples/entities
// like pen apple book bag board


// How we are creating object in JavaScript

//1. Manually( Object literal)

// 

//Constructor 
// The constructor method  in JavaScript is an special funtion used to create objects.


// this keyword refers to  global object
// this keyword use to create object also in constructor function;


// function myNewObj(n,a){
//     this.name = n;
//     this.age=a;
// }


// let a= new myNewObj("Satyendra",24);
// console.log(a)
// var person1 ={
//     name:"john"
// }


// var person2={
//     name:'rahul'
// }



// function myName(m){
//     // console.log(this.name,m);
//     this.age=m;
// }

// myName();





 // =========================
//Call(), apply(), and bind()
// =========================


// myName.call(person1);//this=person1
// myName.call(person2);//this =person2


// myName.call(person1,21);//this=person1
// myName.call(person2,23);//this =person2

// myName.call(person1,21);//this=person1
// myName.call(person2,23);//this =person2



// apply() =============parameter in the array


// myName.apply(person1,[21]);//this=person1
// myName.call(person2,[23]);//this =person2
// console.log(person1)


//bind

// You can bind a particular object as 'this' to a function and use it later.
// You can not use call() or apply() later, they run immerdeately.

// var mybind =myName.bind(person1,21);//this=person1
// mybind();
// console.log(person1)

