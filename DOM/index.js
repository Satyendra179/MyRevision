// console.log(document.title);
var x=document.querySelectorAll(".hi");
x.forEach(e=>{
    e.innerText="hello"
    e.style.color="red";
})
var intro=document.querySelectorAll('.intro');
// intro.style.color="teal";
intro.forEach(e=>e.style.color="teal");
// console.log(intro)

// x.setAttribute("class","hello");

// var likeMe=()=>{
//     // x.innerText="This is the DOM class";
//     x.style.color="red"
//     // console.log("love you");
//     // alert("I Love You Babu");
//     // console.log(prompt("What is your sign"));
//     // if(confirm("I love You")){
//     //     console.log("Got the chance");
//     // }else{
//     //     console.log("Alas!")
//     // }
// }

// console.log(document.getElementById("hello").innerHTML);

