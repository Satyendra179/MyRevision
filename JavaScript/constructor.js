

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

// console.log(this)
// var a=this;
// console.log(a); 


// 'this' will always point to an object.

// It points to the owner object, either a global object or a custom object that you created.

//It can point to defferent owner object through few methods that we are going to learn(call(),apply(),bind());




// let kitchen = {
//     name: "Kitchen", 
//     purpose:"cook",
//     cookFood:function(order){
//         console.log(`Serving ${order} in ${this.name} `);
//     }
// };

// let living_room = {
//     name: "living room",
//     purpose:"watching tv",
// }

// let bedroom = {
//     name: 'bedroom',
//     purpose:'sleep',
// }

// kitchen.cookFood("Maggie");
// kitchen.cookFood.call(living_room, "Maggie")
// kitchen.cookFood.call(bedroom, "Maggie")
// kitchen.cookFood.apply(living_room, ["Maggie"])


