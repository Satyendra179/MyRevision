// var sweets = [ "gulab Jamun","Kova", "Kalakand", "Laddu" ];

// sweets.forEach((el,index,array)=>{
//     console.log(el,array);
// });


// Sytax for forEach function
// array.forEach(function(element,index,array){
//      
// })


//difference between forEach and map
// in forEach function return is not allowed whether in map it is allowed
//Systax for map function
// arr.map()
// sweets.map(function(element,index,arr){
//     console.log(element);
// })
// arr=[2,5,4,8,6,9,11];
// arr.map(function(){

// })

// //reduce arr.reduce((sum,el)=>console.log(sum+el))

// //Higher Order Function by PW Hitesh Sir


// const powerTwo = (n) =>{ 
//     return n**2;

// }

// const powerCube = (powerTwo,n){
//     return powerTwo(n)*n;
// }







const  arr = [ 1,2,3,4];

// let sum =0;
// arr.forEach(e=> {
//     sum = sum+e})
//     console.log(sum);
// arr.forEach((el,index,arr)=>{
//     console.log(el,index,arr);
// 


const bill  = [20, 50, 30];


const gameScore = [100,429,200];

// check if all values are number

const gameScoreCheck = gameScore.every((v)=> typeof(v)===Number);
console.log(gameScoreCheck)

const sumOfBill = bill.reduce((prev,cur)=>prev+cur,0);
console.log(sumOfBill);




