'use strict';
// let hasDriversLicense=false;
// const passTest=true;
// if(passTest)hasDriversLicense=true;
// if(hasDriversLicense)console.log('I can drive');

// const private=254;

//functions

// function logger (){
//     console.log('my name is Emon');
// }
// //calling running or invocing function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, orranges) {
//     console.log(apples, orranges);
//     const juice = `juice with ${apples} apples and ${orranges} orenges. `;
//     return juice;
// }
// const appleJuice = fruitProcessor(5,2);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(4,3);
// console.log(appleOrangeJuice);
// console.log(fruitProcessor(5,3));
//function declaration
// function age(birthyear) {
//   return 2025 - birthyear;
// }
// const age1 = age(1998);
// //function expression
// const age2 = function (birthyear) {
//   return 2035 - birthyear;
// };
// const age3 = age2(1995);
// console.log(age3, age1);

//arrow function

// const calcage = Byear => 2035-Byear;
// const age = calcage(2000);
// console.log(age);

// const retayermentyear = birthday => {
//   const age = 2035 - birthday;
//   const retirement = 65 - age;
//   return retirement;
// };
// console.log(retayermentyear(1991));

// const retayermentyear = birthyear => {
//   const age = 2035 - birthyear;
//   const retirement = 65 - age;
//   return retirement;
// };
// console.log(retayermentyear(1999));

//practice

// function name(){
//     console.log("my Name is Emon");
// }
// name();
// ///function declaretion
// function calcAge(birthyear){
//     return 2037-birthyear;
// }
// console.log(calcAge(2008));
// const age1 = calcAge(2000);
// console.log(age1);
// const age2 = calcAge(1995);
// console.log(age2);

// //function expresion
// const age3 = function(birthyear){
//     return 2038-birthyear;
// }
// const year = age3(1998);
// console.log(year);

///arrow function

// const emon = year => 2038-year;
// const age= emon(2024)
// console.log(age);

// const yearUntilRetirement = (birthyear, name) => {
//     const age = 2039-birthyear;
//     const retirement = 65-age;
//     return `${name} will retire in ${retirement} years.`;
// }
// console.log(yearUntilRetirement(2000, 'Emon')); 
// console.log(yearUntilRetirement(1995, 'Johnny')); 

// const yearofretirement = (birthYear,name) =>{
//     const age = 2038-birthYear;
//     const retirement = 65-age;
//     return `${name} will retire in ${retirement} years`; 
// }
// console.log(yearofretirement(2000, 'Emon')); 
// console.log(yearofretirement(1982, 'Jonas')); 

// const yearUntilRetirement = (birthYear,name) => {
//     const age = 2039-birthYear;
//     const retirement = 65-age;
//     return `${name} will retire in ${retirement} year`;
// }
// console.log(yearUntilRetirement(2000, 'Emon'));

