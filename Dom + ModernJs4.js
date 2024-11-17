// Example of syncronous code 
// function sync() {
//     console.log('first');
//  }
//  sync();

//  console.log('second');


//examples of Asyncronous code
// setTimeout(function() {
//     console.log('third'
//     );
// }, 3000)

// function sync() {
//     console.log('first');
// }
// sync();

// console.log('second');

// API -> Application Programming Interface
// API is a set of defined rules that enables different applications to communicate with each other

//self search and read documentation
//get call ?
//put call ?
//post call ?
//delete call ?

//feature of asyncronous code
// clean and concise
// better error handling

// 1. non-blocking
// 2. callback
// 3. promise

// promise
// promise is a result of an operation that may not have completed yet
  

// let myPromise1 = new Promise(function(resolve, reject) {
//     // console.log('I am inside Promisse');
//     setTimeout(function(){
//         console.log('I am inside Promise1');
//     },5000);
//     // return2;
//     // resolve(22345);
//     rejact(new Error('Bhaisahab Error aaye h2'));
// });

// //Then function in promis
// // if you want to work on any value then we use then_function
// myPromise1.then((value) => {
//     console.log(value)
// });

// //print error
// // if you want to work on any error then we use catch_function
// myPromise1.catch((error) => { 
//     console.log("Recived an error")
// });



// let myPromise2 = new Promise(function(resolve, reject) {
//     // console.log('I am inside Promisse');
//     setTimeout(function(){
//         console.log('I am inside Promise2');
//     },5000);
//     // resolve(22345);
//     // rejact(new Error('Bhaisahab Error aaye h2'));
// });

// console.log('pehla');

// let vadda1 = new Promise(function(resolve, reject) {
//                 setTimeout(() => {
//                     console.log('setTimeout started1');
//                 }, 2000);
//                 resolve(true);
// })

// let output = vadda1.then(() =>{
// let vadda2 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('setTimeout started2');
//     }, 3000);
//         resolve("vadda2 resolved");
//     })
//     return vadda2;
// })

// output.then((value) => console.log(value));


//Async Await
// special syntax use to write promise chain
// async function is a function that returns a promise


//create async function

// async function abcd() {
//     return Adi;
// }

// async function utility() {

//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => { 
//             resolve("Delhi m bhot thand h");
//     }, 1000);
// });


// let mumbaiMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Mumbai m bhot garmi h");
//         }, 2000);
//         });

//         let dM = delhiMausam;
//         let mM = mumbaiMausam;
//         return [dM, mM];
// }

// utility().then(([delhi, mumbai]) => {
//     console.log(delhi);
//     console.log(mumbai);
// });

//Fetch API
// fetch informatiom from server
// fetch is a promise based function
// fetch is used to send request to server and recieve response from server
// fetch is used to make HTTP request to server
// fetch is used to make GET, POST, PUT, DELETE, PATCH request to server

// async function utility() {
    

// let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// let output = await content.json();
// console.log(output);
// }
// utility();


//Post => post call using fetch API
// send data to the server



// async function helper() {

//     let options = {
//         method: 'POST',
//       body: JSON.stringify({    //convert to string
//         title: 'Aditya',
//         body: 'Medium',
//         userId: 2001,
//         weight: 166,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = await content.json();
//     return response;
// }

// async function utility() {
//     let ans =await helper();
//     console.log(ans);
// }

// utility();


//Closures : => A closure is a function that has access to its outer function's scope, even when the outer
// function has returned.
// Closures are used to create private variables and methods in a function.
// Closures are used to create a new scope for a function.
//let -> block scoped 

// let name = 'Prince';
function init() {
    // //let name = "Aditya" // name is a local variable by init
    // {
    //     let name = "Rahul" // name is a local variable by block
    // }
    function displayName() {
        // let name = "Sharma"; // name is a local variable by displayName
        //displayName() is the inner function, that has access to the outer function's scope
        console.log(name); // name is a local variable of init
        }
        displayName();
} 
init(); // Output: Aditya




// Variable =>
    //local variable
    //global variable
    //block scoped variable
    //function scoped variable

// Home Work
//classes and export modules in JS

