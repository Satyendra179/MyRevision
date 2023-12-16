//API
//Application Programming Interface(Apis) are construct made available 
//in programming languages to allow developers to create complex functionlity more easily.


// They abstract more complex code away from you, providing some easier syntax to use in its place

// Browser APIs- construct built in to the browser that sits on top the JavaScript language and allows you to  implement functonality more easily .



// Third Party API
// constructs builts int o third-party platforms (eg, twitter(X), FAcebook) that allow you to use some of those platform's funtionality in your own web pages (for example, display you lates Tweets on your web page 
//

// JavaScript libraries-
 
//Usually one or more JavaScript files containing custom functions that you can attach to your webb page to speed up or enable writing commoon funtionality Examples include JQuery, mootoools and React.

//JavaScript Frameworks- 

//The next step up from libraries JavaScript frameworks (e.g. Angular and Ember)
// tend to be packeages of HTML,CSS, JavaScript and other technologies that you install and then use to write an entire web aplication from scratch.
//The key difference between a library and a framework is "Inversion of Control" When calling a metod from a library, the developer is in control, With a framework, the control is inverted the framework calls the developer's code.

// HTTP and Client Server Model
// 

// JavaScript can send network request to the server and load new information whenever it's needed.
// 


//We have already talked about HTTP requests like GET,POST,PUT,DELETE.
//Right now our websites are simple and does.

// for example we can use a network request to: 
//Submit an order,
// Load user information,
//Receive latest updates from the server
//......ETC..

// There's an umbrella term "AJAX" (abbrebiated Asynchronous JavaScript and XML) for network requests from JavaSccript.

//Ther are multiple ways to send a network and get information from the server.

// Fetch 
//Fetch API 

//Why fetch?
//Clean and easy syntax.
//Modern way of making network requests.



// There are three step of Fetch

//1. fetch(url);



// fetch('https://reqres.in/api/users?page=2')
// .then(function(res){
//     res.json().then(function(res){
//         console.log(res.data);
//     })
// })
// .catch(function(err){
//     console.log('err:',err)
// })

// async function makeRequest(){
//     let res = await fetch('https://reqres.in/api/users?page=2')
//         // console.log(res);
//     let data = await res.json();
//     console.log(data.data);
//     // console.log(res);
// }

//  makeRequest(); 


// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(json=>console.log(json))

// const url = 'https://fakestoreapi.com/products';

// fetch(url).then(res=>res.json()).then(res=>appendData(res)).catch(err=>console.log(err))
// // console.log(x)

// var container=document.getElementById('container');
// function appendData(data){
//     data.forEach(function(el){
//         let title= document. createElement('p')
//         title.innerText=el.title;
//         let price =document.createElement('p');
//         price.innerText="$"+el.price;
//         let img = document.createElement('img');
//         img.src =el.image;
//        let div= document.createElement('div');
//         div.append(img,price, title)
//        container.append(div);

//     })

// }
