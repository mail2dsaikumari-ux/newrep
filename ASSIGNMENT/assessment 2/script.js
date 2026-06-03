// creat a student object 
// const student = {
//   name: "kiran",
//   phone: "9236541789",
//   marks: 99
// };
// // display the students details
// console.log("student details:");
// console.log("name:",student.name);
// console.log("phone:",student.phone);
// console.log("marks:",student.marks);


// // ---------------------------------------------------------------------------------------------


// let str = "10";
// let num = 5;

// let result = str + num;

// console.log(result);


// // ----------------------------------------------------------------------------------------------

// let str = "10";
// let num = 5;

// let result = str + num;

// console.log(typeof str);     // type of str
// console.log(typeof num);     // type of num
// console.log(typeof result);  // type after addition

// // ----------------------------------------------------------------------------------------------


// const student = {
//   name: "Sai",
//   marks: 85
// };

// // Changing property value
// student.marks = 90;

// console.log(student);



// const student = {
//   name: "Sai"

// };

// // ✅ Allowed
// student.name = "Kumari";
// student.marks = 95;

// console.log(student);

// // --------------------------------------------------------------------------------------------------


// const student = {
//   name: "Sai",
//   marks: 85
// };

// // Add new key
// student.phone = "9876543210";

// console.log(student);

// // ------------------------------------------------------------------------------------------------------


// Create a dictionary object
// const dictionary = {
//   apple: "A fruit that is sweet and crunchy",
//   book: "A set of written or printed pages",
//   computer: "An electronic machine used to process data",
//   sun: "The star that gives light to the Earth",
//   water: "A liquid essential for life"
// };

// // Access meanings
// console.log("apple:", dictionary.apple);
// console.log("book:", dictionary.book);
// console.log("computer:", dictionary.computer);
// console.log("sun:", dictionary.sun);
// console.log("water:", dictionary.water);


// // -------------------------------------------------------------------------------------------------

// let age = 15;

// if (age >= 10 && age <= 20) {
//   console.log("Age is between 10 and 20");
// } else {
//   console.log("Age is NOT between 10 and 20");
// }

// // ------------------------------------------------------------------------------------------------

// switch case

// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   case 3:
//     console.log("Wednesday");
//     break;

//   case 4:
//     console.log("Thursday");
//     break;

//   case 5:
//     console.log("Friday");
//     break;

//   default:
//     console.log("Invalid day");
// }


// grade system

// let grade = "A";

// switch (grade) {
//   case "A":
//     console.log("Excellent");
//     break;

//   case "B":
//     console.log("Good");
//     break;

//   case "C":
//     console.log("Average");
//     break;

//   default:
//     console.log("Fail");
// }

// // ------------------------------------------------------------------------------

// let num = 24;

// if (num % 2 === 0 && num % 3 === 0) {
//   console.log("Number is divisible by both 2 and 3");
// } else {
//   console.log("Number is NOT divisible by both 2 and 3");
// }


// // let num = 5;

// if (num % 2 === 0 && num % 3 === 0) {
//   console.log("Divisible by both 2 and 3");
// } else if (num % 2 === 0) {
//   console.log("Divisible by only 2");
// } else if (num % 3 === 0) {
//   console.log("Divisible by only 3");
// } else {
//   console.log("Not divisible by 2 or 3");
// }

// // ------------------------------------------------------------------------

// let age = 17;

// let result = age > 18 ? "You can drive" : "You cannot drive";

// console.log(result);

// // -----------------------------------------------------------------------

// const obj = {
//   sai: 99,
//   kiran: 95,
//   mounika: 98
// };

// for (let key in obj) {
//   console.log(key + ":", obj[key]);
// }

// // ------------------------------------------------------------------------

// const obj = { sai: 85, kiran: 99, mounika: 92 };

// for (let key in obj) {
//   console.log(key + ": " + obj[key]);
// }

// //-----------------------------------------------------------------------------

// let num;

// while (num != 9) {
//   num = prompt("Enter number:");
//   if (num != 9) console.log("Try again");
// }

// console.log("Correct!");

// // -------------------------------------------------------------------------


// function findMean(a, b, c, d, e) {
//   return (a + b + c + d + e) / 5;
// }

// // Example
// console.log(findMean(10, 20, 30, 40, 50));


// const mean = (a, b, c, d, e) => (a + b + c + d + e) / 5;

// console.log(mean(10, 20, 30, 40, 50));

// // -----------------------------------------------------------------------------

// console.log("sai\"".length);

// // -------------------------------------------------------------------------


// let str = "Hello Sai";

// console.log(str.includes("Sai"));
// console.log(str.includes("Hi"));

// // -------------------------------------------------------------------------------

// let str = "HELLO SAI";

// let result = str.toLowerCase();

// console.log(result);

// // ------------------------------------------------------------------------------

// let str = "hello";

// // change 4th character (index 3)
// let newStr = str.slice(0, 3) + "X" + str.slice(4);

// console.log(newStr);

// ----------------------------------------------------------------------------------------------------

Array

// let arr = [];

// let num = prompt("Enter a number:");
// arr.push(Number(num));

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
//   let num = prompt("Enter number:");
//   arr.push(Number(num));
// }

// console.log(arr);

// ---------------------------------------------------------------------

// let arr = [];
// let num;

// while (num != 0) {
//   num = Number(prompt("Enter number (0 to stop):"));
  
//   if (num != 0) {
//     arr.push(num);
//   }
// }

// console.log(arr);

// --------------------------------------------------------------------------

// // Using filter()
// let arr = [10, 23, 50, 45, 100, 7];

// let result = arr.filter(num => num % 10 === 0);
// console.log(result); // [10, 50, 100]


// // Loop Version
// let arr2 = [10, 23, 50, 45, 100, 7];
// let result2 = [];

// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] % 10 === 0) {
//     result2.push(arr2[i]);
//   }
// }

// console.log(result2); // [10, 50, 100]

//------------------------------------------------------------------

// let arr1 = [1, 2, 3, 4, 5, 100];
// let squares1 = arr1.map(num => num * num);

// let arr2 = [1, 2, 3, 4, 5];
// let squares2 = [];

// for (let i = 0; i < arr2.length; i++) {
//   squares2.push(arr2[i] * arr2[i]);
// }

// console.log(squares1);
// console.log(squares2);

// -------------------------------------------------------------

// // using reduce()

// let n = 5;

// // create array [1, 2, 3, 4, 5]
// let arr = Array.from({ length: n }, (_, i) => i + 1);

// // calculate factorial using reduce
// let factorial = arr.reduce((acc, curr) => acc * curr, 1);

// console.log(factorial);

// // ---------------------------------------------------------------------------------

// *chapter 6

// let age = Number(prompt("Enter your age:"));

// if (age >= 18) {
//   alert("You can drive");
// } else {
//   alert("You cannot drive");
// }

// --------------------------------------------------------------------------------

// prompt + confirm + loop

// let again = true;

// while (again) {
//   let age = Number(prompt("Enter your age:"));

//   if (age >= 18) {
//     alert("You can drive");
//   } else {
//     alert("You cannot drive");
//   }

//   again = confirm("Do you want to enter again?");
// }

// ----------------------------------------------------------------------------

// let num = Number(prompt("Enter a number:"));

// if (num > 4) {
//   window.location.href = "https://www.google.com";
// }

// --------------------------------------------------------------------------

// let color = prompt("Enter a color:");

// document.body.style.backgroundColor = color;

// ----------------------------------------------------------------------

// console.log(typeof document);
// console.log(typeof window);

// ---------------------------------------------------------------------------


// function task() {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log("Task Done");
//       resolve();
//     }, 2000);
//   });
// }

// async function run() {
//   await task();          // wait for task
//   console.log("Next Step");
// }

// run();


function calculate(num, callback) {
  let square = num * num;
  callback(square);
}

function printResult(result) {
  console.log(result);
}

calculate(4, printResult);