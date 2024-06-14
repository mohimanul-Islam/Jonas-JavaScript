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

// function cutfrootpices(froot) {
//   return froot * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applepices = cutfrootpices(apples);
//   const orangepices = cutfrootpices(oranges);
//   const juice = `juice with ${applepices} pices of apples and ${orangepices} pices of orenges. `;
//   return juice;
// }
// console.log(fruitProcessor(3, 4));

// function cutfruitpices(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applepices = cutfruitpices(apples);
//   const orangepices = cutfruitpices(oranges);
//   const juice = `jice with ${applepices} pices of apple and ${orangepices} pices of orange`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));
//chalange 1
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(2, 9, 7));

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgdolphins, avgKoalas) {
//     if(avgdolphins>=2*avgKoalas){
//         console.log(`Dolphins win the troffy (${avgdolphins} vs ${avgKoalas})`);
//     }else if(avgKoalas>=2*avgdolphins){
//         console.log(`Koalas win the troffy ${avgKoalas} vs ${avgolphins}`);
//     }else{
//         console.log('No team wins...');
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(580, 100);

//array

// const friends = ['Emon', 'Hasib', 'John', 'bob'];
// console.log(friends);

// const y = new Array(2022, 2020, 2010);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2] = 'jay';
// console.log(friends);

// const firstname = 'jonas';
// const jonas = [firstname, 'Josh', 'kane', 2039-2000, friends]
// console.log(jonas);
// console.log(jonas.length);

// //exercise

// const calcAge = function(birthyear){
//     return 2038-birthyear;
//  }
//  const years = [1988,1999,2020,2010];

// const ages = calcAge(years);

//function practice

// function emon() {
//   console.log('Hello world!');
// }
// emon();
// function frootProcessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} orenges`;
//   return juice;
// }
// const applejuice = frootProcessor(3, 0);
// console.log(applejuice);
// const appleanoranges = frootProcessor(4, 2);
// console.log(appleanoranges);

// function calcAge(birthYear){
//     const age = 2038-birthYear;
//     return age;
// }
// const year = calcAge(2000);
// console.log(year);

// function agecalc(birthYear){
//     return 2038-birthYear;
// }
// console.log (agecalc(2004));

const emon = function (age) {
  return 2039 - age;
};
console.log(emon(2000));
