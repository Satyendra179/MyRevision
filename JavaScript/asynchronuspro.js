// Synchronus Execution
// one line at a time
// JavaScript executes code line by line. 
//Almost every programming language executes code line by line.



// for(let i =0; i<100; i++){
//      console.log(i)
// }

// Asychronus Execution
// Multiple resource. Multiple execution at a time.
// But Js is Single threaded it can not do multiple things at a time.
//


// JavaScript can act asychronous with the help of a friend
// and that friend is browser.

// Whenever Js Engine encounters a piece of code that will 
//take a long time to execute, it hands over it's execution to browser.

// Browser now takes care of that task and when
// its finished it pings the Js engine that the task is done.



// That's how Js engine and Browser work together to make 
//JavaScript capable of asynchronous programming.






// setTimeout();

// setTimeout sets a timer which executes a function or 
//specified piece of code once the timer expires.

// function test(){
//       console.log("Hey, I am here");
// }

// setTimeout(test, 3000);
// // console.log('ravi')

// let id =setInterval(() => {
//      test();
// }, 3000);
// clearInterval(id);




// setInterval
// This method repeatedly calls a function or 
//executes a code snippet, with a fixed time delay between each call.


// JavaScript runs a loop that looks for new messages/task on the
//  message queue and pushes them into the call stack to be executed.

// =================
// Event Loop=======
// =================

// However, the event loop gives priority to the code currently on the call stack.
//
// It pushes a new message from the Queue in to the stack after all the code 
//in the stack have been executed and the call stack is empty.



// Queue holds all the code that  will require a longer time to execute.
// Especially, network requests.

