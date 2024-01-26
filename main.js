// Chapter 31 - 34 (Date & Time) 

// 1.  Code a statement that creates a new Date object and assigns it to  dObj, which hasn't been declared beforehand. 
var dObj = new Date();
console.log(dObj,typeof dObj);

// 2.  Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.
var newDateObj = new Date();
var dStr = newDateObj.toString();
console.log(typeof newDateObj, typeof dStr);

// 3.  Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand. 
var d = new Date();
var day = d.getDay();
console.log(day);

// 4.  The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index. 

let dayNames = ["sunday", 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
console.log(dayNames[day], typeof dayNames[day] );


// 5.  Extract all parts of the Date and Time and assign it to the variable  which has not been declared beforehand. 

dObj = new Date();

let fullYear = dObj.getFullYear();
console.log(fullYear, typeof fullYear);

let month = dObj.getMonth();
console.log(month, typeof month);

let dayz = dObj.getDay();
console.log(dayz, typeof dayz);

let tame = dObj.getTime();
console.log(tame, typeof tame);

let hourz = dObj.getHours();
console.log(hourz, typeof hourz);

let minutez = dObj.getMinutes();
console.log(minutez, typeof minutez);

let secondz = dObj.getSeconds();
console.log(secondz, typeof secondz);

let milisec = dObj.getMilliseconds();
console.log(milisec, typeof milisec);

// 6.  Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand. 
let dObject = new Date('12-31-2020');
console.log(dObject);

// 7.  Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand. 
dObject = new Date(1992, 1, 2);
console.log(dObject);

dObject = new Date('2, 2, 1992');
console.log(dObject);

// 8.  Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980. 
let dObjectTime = new Date().getTime();
let beg1980 = new Date("1,1,1980").getTime();
console.log(dObjectTime);
console.log(beg1980);
console.log(dObjectTime-beg1980);

// 9.  How do you change the year of a date in JavaScript? 
let yearChange = new Date().setFullYear(2006);
console.log(yearChange);

var d12 = new Date('2024');
console.log(d12)
console.log(d12.setFullYear(2001));

var currentDate = new Date();
currentDate.setFullYear(2024);
console.log(currentDate)
console.log(currentDate.getFullYear(), "Year");
 

// 10. Write a JavaScript function to change the month of a given date to January. 


function monthToJan (b) {
let dObject = new Date(b);
    let a = dObject.setMonth(0);
    return a;

}
let abz = console.log("changed month to Jan ",monthToJan ("8,25,2024") )


// 11. What is the method to change the day of the week for a specific date in JavaScript? 

// 12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt) 


// 13. Write a JavaScript function to add a specific number of hours to a given time. 

// 14. You have to create a age calculator in JavaScript.;

function test(a) {
    var age = new Date();
    var userAge = new Date(a)
    console.log(age)
    console.log(userAge)
    var calcAge;
    console.log(calcAge=Number(a)-age);
    console.log(age.getFullYear()-userAge.getFullYear())
    console.log(userAge.getFullYear())

}
test('01-1-2001')
test("02-14-2008")
test("06-15-1990")

// Chapter 35 - 37 (Functions)

// 1.  Code the first line of a function displayAlert.

function displayAlert() {
    alert("Hello World!!");
}
displayAlert();

// 2.  Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.
function askName(){
    var userName = prompt("Enter your name");
    console.log(userName);
}
askName();

// 3.  Code a function that calls 2 other functions.
function topFunction(){
    console.log("this is main function");
    functionOne ();
    functionTwo();
}
function functionOne(){
    console.log("this is function 1");
}
function functionTwo(){
    console.log("this is function 2");
}
topFunction();

// Chapter 38 (Local vs. Global Variables)
// 1. Write a JavaScript function that demonstrates the usage of a local variable.

function localVariableExample() {
    // Local variable declared inside the function
    var localVar = "I am a local variable";
    console.log(localVar);
}

// Calling the function
localVariableExample();

// Attempting to access the local variable outside the function will result in an error
// console.log(localVar); // Uncommenting this line will result in an error

// 2. How can you access a global variable inside a function in JavaScript?

// Global variable declared outside the function
var globalVar = "I am a global variable";

function accessGlobalVariable() {
    // Accessing the global variable inside the function
    console.log(globalVar);
}

// Calling the function
accessGlobalVariable();

// Chapter 39, 40 (Switch Statements)
// 1. Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.

var fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("It's a banana!");
        break;
    case "apple":
        console.log("It's an apple!");
        break;
    case "orange":
        console.log("It's an orange!");
        break;
    default:
        console.log("Unknown fruit!");
}

// 2. Write a JavaScript switch statement that checks whether cityName given by the user matches a specific city name.
// If there's a match, alert the user and break the statement; otherwise, show a default message.

// Assume user provides cityName as an input
var cityName = prompt("Enter a city name:");

switch (cityName.toLowerCase()) {
    case "new york":
        console.log("You entered New York!");
        alert("You entered New York!");
        break;
    case "los angeles":
        console.log("You entered Los Angeles!");
        alert("You entered Los Angeles!");
        break;
    case "chicago":
        console.log("You entered Chicago!");
        alert("You entered Chicago!");
        break;
    default:
        console.log("City not recognized!");
        alert("City not recognized!");
}
