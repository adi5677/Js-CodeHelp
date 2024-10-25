// const accountId = 5677
// let accountEmail = "adis6469@gmail.com"
// var accountPass = "5677"
// accountCity = "Noida"

// let accountState = "Up"


// //accountId = 2 Not alllowed

// accountEmail = "razaditya807@gmail.com"
// accountPass = "9875"
// accountCity = "Bihar"

// console.log(accountCity)

// console.log(accountEmail,    accountId,   accountState,  accountCity)

//functions
// A block of code  which can be called multiple times from our program is called a function. 

// why we need function 
// Reusibility


//How to create function and how many ways
//1. Function declaration
// function add(a, b) {
//     return a + b;
// }

// function run(){
//     console.log("Hello world")
// }

// function call or invoke

// run();

// hoisting
//it is the process of moving function declration to the top  of the code. 
//done automatically by JS Engine

//Function assignment  // Annonymous function assignment

// let stand = function walk() {
//     console.log('walking');
// };

// stand();

// let jump = stand;

// jump();

//Js is a dynamic language
//we can assign function to a variable
//we can pass function as an argument to another function

// let x = 1;
// x = 'a';
// console.log(x);

// function is a first class citizen in JS

//make dynamic parameter function
// function sum() {
//     let total  = 0;
//     for(let value of arguments)
//         total = total + value;
//     return total;

    //return a+b;

// }

//console.log(sum(8, 8));
//console.log(sum(5,));
//console.log(sum());
//console.log(sum(5, 8, 9));

// let ans = sum(1, 2, 5, 4, 3, 6);
// console.log(ans);

//In Js special object called Argument
//argument is like object

//Rest operator
//rest operator is used to get all the arguments passed to a function in an array

// function sum (num, value, ...args) {
//     console.log(args);
// }

// sum(1,2,3,4,5,6,7,8,9,0);

//Default parametars
//default parameters are used to assign a default value to a function parameter if no value is passed to
//that parameter when the function is called.

// function interest (principal, rate, time) {
//     return  (principal * rate * time) / 100;
   
// }
// console.log(interest(1000, 5, 12));

//rule of default parameter
//1. default parameter should be at the end of the function parameter list
//2. default parameter should be assigned a value
//3. default parameter should be a constant value   
//4. default parameter should not be a function
//5. default parameter should not be a variable 
//6. default parameter should not be a property of an object
//7. default parameter should not be a function call
//8. default parameter should not be a conditional statement
//9. default parameter should not be a loop
//10. default parameter should not be a switch statement
//11. default parameter should not be a try catch block
//12. default parameter should not be a with statement

//Getter Setter
// Getter -> Getter get the value -> acces properties
// Setter -> Setter set the value -> change or mutet ate properties
//why we use getter & setter ?


//Getter -> for get the value
// let person = {
//     fName : 'Aditya',
//     lName : 'Sharma',

//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },

//     //Setter -> for set the value
//     set fullName(value) {
//         if(typeof value !=  String){
//             throw new Error["you have not sent a string"]; 
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
        
//         // this function basially allocate the current function 

//     }
    
// };

//try & catch

// try {
//     person.fullName = true;
// }
// catch (e) {
//     alert(e);
// }

// person.fullName = true; 
//person.fullName = undefined;
// console.log(person.fullName);

//console.log(person);
 


//this funcation have a issue beacause this is a read only function


//scope

// {
//     // let a = 5;
//     var a = 8;
// }
// console.log(a); 

// function walk () {
//     var a  = 5;
// }

// console.log(a);

// for(var i = 0; i<10; i++) {

// }

// console.log(i);

// if(true) {
//     let a = 5;
// }

// console.log(a);

// function a() {
//     const ab = 5;
// }
// const ab = 5;
// function b() {
//     const a = 5;
// }


//Reducing an array

let arr = [1,2,3,4,5,6]
// let total = 0;
// for(let value of arr)
//     total = total + value;
// console.log(total);

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);