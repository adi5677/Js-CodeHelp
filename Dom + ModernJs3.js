//Performance in  js dom
//Measure speed of code
// how to write efficient & performing code
//event loop


//adding 100 para
// const t1 = performance.now();

// for (let i = 0; i < 100; i++) {
//     let newElement = document.createElement('p');
//     newElement .textContent = 'this is para' + i;

//     document.body.appendChild(newElement);
// }

// const t2 = performance.now();
// console.log("this took " + (t2 - t1) + " milliseconds");

// // optimizing a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i = 1; i < 100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'this is para' + i;

//     myDiv.body.appendChild(element);
//     //can we use another teg for div element ?

// }

// document.body,appendChild(myDiv);

// const t4 = performance.now();
// console.log("this took " + (t4 - t3) + " milliseconds");

//Reflow
//Repaint
//Layout

//minimum reflow and minimum repaint used in code layout say good prectices

//Use performance Optimize
//Document Fragment

//Document Fragment is a lightweight in memory document object that allows you to build a document in memory before
//it is added to the DOM. This can improve performance by reducing the number of DOM mutations.
//it is a container for nodes that are not yet part of the DOM tree. It is a
//lightweight document object that allows you to build a document in memory before it is added to the

// using fragment

// let fragment = Document.createDocumentFragment();
// for (let i = 0; i < 100; i++) {
//         let newElement = document.createElement('p');
//         newElement .textContent = 'this is para' + i;
    
//         fragment.appendChild(newElement);
//     }

// document.body.appendChild(fragment); // single Reflow, Single Repaint;

// fragment is a container for nodes that are not yet part of the DOM tree. It is a


//Call Stack
//single threading
//one command at a time
//Js is single threaded language


function addPara() {
    let para = document.createElement('p');
    para.textContent = 'JS is single';
    document.body.appendChild(para);
}

function appendNewMassage() {
    let para = document.createElement('p');
    para.textContent = 'Kya haal dosto';
    document.body.appendChild(para);
}

addPara();
appendNewMassage();

//Call Stack is a mechanism for managing function calls in a program. It is a stack data structure

//Event Loop
//Event Loop is a mechanism that allows JavaScript to handle multiple tasks concurrently. It is a loop that
//continuously checks for and executes tasks in the event queue.

//Syncronus -> occuring at the same time
//Asynchronous -> occuring at different time


//Event Loop (Loupe website maked by philip robert) -> for instructor Research Philip Robert in google

document.addEventListener('click', function() {
    console.log('Hello Aditya09');
});

//handling is done by browser not by js iin Async code

//setTimeOut() Method
//The setTimeout() method calls a function after a specified delay.
// Syntax: setTimeout(function, milliseconds);
// function: The function to be executed after the specified delay.
// milliseconds: The number of milliseconds to wait before executing the function.
// Returns: A timeout ID, which can be used with clearTimeout() to cancel the timeout.
// Example: setTimeout(function() { alert("Hello"); }, 3000); // displays an alert
// after 3 seconds.
//setTimeout(function, milliseconds);
//setTimeout(function, milliseconds, param1, param2, ...);
//setTimeout(function, milliseconds, param1, param2, ..., thisArg);

setTimeout(function() {
    console.log('Hello Everyone'); 
}, 5000);


