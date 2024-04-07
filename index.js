//Question-2
var nameOfPerson = "Eric";
console.log("Hello ".concat(nameOfPerson, ", would you like to learn the Python today?"));
//Question-3
var person_name = "Moattar Ali";
//for lowercase
console.log("lowercase: ", person_name.toLowerCase());
//for uppercase
console.log("Uppercase: ", person_name.toUpperCase());
//for title case
console.log("titleCase: ", person_name.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//Question-4
var quote = "A perosn who never made a  mistake had never tried anything new";
var author = "Albert Einstein";
console.log("".concat(author, " once said: ").concat(quote));
//Question-5
var the_quote = "A person who never made a mistake had never tried anything new";
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said: \"").concat(the_quote, "\"");
console.log(message);
//Question-6
var personName = "\t\n   Moattar Ali  \n\t";
console.log("Original: ", personName);
console.log("Stripped: ", personName.trim());
//Question-7 & 8
console.log(4 + 4);
console.log(16 - 8);
console.log(4 * 2);
console.log(16 / 2);
//Question-9
var myFavNum = 7;
console.log("My Favourite Number is ".concat(myFavNum));
//Question-10
//Adding comments in task nine..
//author : Moattar Ali.
//Date : 2-3-2024.
//Task # 09
var favNum = 7;
//to print my fav number.
console.log("My Favourite Number Is ".concat(favNum));
