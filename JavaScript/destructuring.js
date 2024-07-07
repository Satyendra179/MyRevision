 // Destructuring 

// spread operator

//  const oneArray = [1, 2, 3, 4];

//  const twoArray = [5, 6, 7];

//  const threeArray = [...oneArray, ...twoArray]//[oneArray,twoArray]//oneArray.concat(twoArray);

//  console.log(threeArray);// [1,2,3,4,5,6,7]

 // ...oneArray = 1,2,3,4
 //...twoArray = 5,6,7


//  function testOne(){
//     console.log(arguments);
//  }

//  testOne(1,2,3,4)


// typeof arguments is object


//rest operator

// function manyArguments(){
//     let args = Array.from(arguments);
//     let finalArray = args.map(e=>e);
//     console.log(finalArray);
// }

// manyArguments(1,2,3);
// manyArguments(1,2,3,4,5,6,7);


// function manyArguments(...args){

//     console.log(typeof args)
    
//     let finalArray = args.map(e=>e);
//     console.log(finalArray);
// }

// manyArguments(1,2,3);
// manyArguments(1,2,3,4,5,6,7);







