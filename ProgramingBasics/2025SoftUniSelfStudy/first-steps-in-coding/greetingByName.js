function greetingByName(name) {
let greeting = 'Hello,' + name + '!'; 
console.log(greeting)   
}

let firstName = 'Georgi';
let lastName = 'Gospodinov';
let age = 21;

let str = firstName + " " + lastName + ' @ ' + age;
console.log(str);


let a = 1.5;
let b = 2.5;

let sum1 = 'The sum is: ' + a + b;
console.log(sum1) ; 
let sum2 = `The sum is ${a + b}`;
console.log(sum2); 