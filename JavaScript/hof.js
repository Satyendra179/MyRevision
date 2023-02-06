var sweets = [ "gulab Jamun","Kova", "Kalakand", "Laddu" ];

sweets.forEach((el,array)=>{
    console.log(el,array);
});


// Sytax for forEach function
// array.forEach(function(element,index,array){
//      
// })


//difference between forEach and map
// in forEach function return is not allowed whether in map it is allowed
//Systax for map function
// arr.map()
sweets.map(function(element,index,arr){
    console.log(element);
})
arr=[2,5,4,8,6,9,11];
arr.map(function(){

})

//reduce arr.reduce((sum,el)=>console.log(sum+el))

