//Question-2

let nameOfPerson : string = "Eric";
console.log(`Hello ${nameOfPerson}, would you like to learn the Python today?`);

//Question-3

let person_name = "Moattar Ali";

//for lowercase
console.log("lowercase: ", person_name.toLowerCase());

//for uppercase
console.log("Uppercase: ", person_name.toUpperCase());

//for title case
console.log("titleCase: ", person_name.replace(/\b\w/g, c=> c.toUpperCase()));

//Question-4

let quote :string = "A perosn who never made a  mistake had never tried anything new";
let author : string = "Albert Einstein";

console.log(`${author} once said: ${quote}`);

//Question-5

let the_quote : string = "A person who never made a mistake had never tried anything new";
let famous_person : string = "Albert Einstein";
let message = `${famous_person} once said: "${the_quote}"`;

console.log(message);

//Question-6

let personName : string = "\t\n   Moattar Ali  \n\t";
console.log("Original: ", personName);
console.log("Stripped: ", personName.trim());

//Question-7 & 8

console.log(4+4);
console.log(16-8);
console.log(4*2);
console.log(16/2);

//Question-9

let myFavNum : number = 7;
console.log(`My Favourite Number is ${myFavNum}`);

//Question-10

//Adding comments in task nine..

//author : Moattar Ali.
//Date : 2-3-2024.
//Task # 09

let favNum : number = 7;

//to print my fav number.

console.log(`My Favourite Number Is ${favNum}`);