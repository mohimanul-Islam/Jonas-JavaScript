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

// const emon = function (age) {
//   return 2039 - age;
// };
// console.log(emon(2000));

//arrow function

// const age = function(age){
//     return 2041-age;
// }
// const year = age(2000);
// console.log(year);

// const y = name => 2035-name;
// const calcAge = y(2000);
// console.log(calcAge);

// const yearsuntilretirement = (birthyear,name) => {
//     const age = 2044-birthyear;
//     const retirement = 65-age;
//     return `${name} will retire in ${retirement} years.`;
// }
// console.log(yearsuntilretirement(2000, 'emon'));
// console.log(yearsuntilretirement(1995, 'jonas'));

// const age = Number('25');

// const cutPeaces = function(fruit){
//     return fruit*4;
// }
// const frootProcessor = function(apples, oranges){
//     const applePeaces = cutPeaces(apples);
//     const orangepices = cutPeaces(oranges);
//     return `Juice with ${applePeaces} pices of apple and ${orangepices} pices of oranges.`;
// }
// console.log(frootProcessor(2,3));
// const cutPeaces = function(fruit){
//     return fruit*4;
// }
// const frootProcessor = function(apples, oranges){
//     const applePeaces = cutPeaces(apples);
//     const orangepices = cutPeaces(oranges);
//     return `Juice with ${applePeaces} pices of apple and ${orangepices} pices of oranges.`
// }
// console.log(frootProcessor(3,5));

// const calcAge = function(birthYear){
//     return 2039-birthYear;
// }
// const yearofretirement = function(birthYear, name){
//     const age = calcAge(birthYear);
//     const retirement = 65-age;
//     if (retirement>0) {
//         console.log(`${name} will retire in ${retirement} year.`);
//         return retirement;
//     }else{
//         console.log(`${name} is already retired`);
//         return -1;
//     }
// }
// console.log(yearofretirement(1950,'Jonas'));

// const calcAge = function(birthYear, name){
//     const age = 2038-birthYear;
//     console.log(`${name} is ${age} years old!`);
//     return age;
// }
// const age = calcAge(2000, 'Emon');

// const cutPeaces = function(froot){
//     return 4*froot;
// }
// const frootProcessor = function(apples, oranges){
//     const applePeaces = cutPeaces(apples);
//     const orangepices = cutPeaces(oranges);
//     const juice = `Juice with ${applePeaces} pice of apple an ${orangepices} pice of orange.`;
//     return juice;
// }
// const froot = frootProcessor(2,4);
// console.log(froot);

// const age = birthyear => 2040-birthyear;
// console.log(age(2000));

// const year = birthyer =>{
//     return 2045-birthyer;
// }
// console.log(year(2000));

// const averageScores = (a, b, c) => (a+b+c)/3;
// console.log(averageScores(2, 5, 6));

// const dolphinsScore = averageScores(3, 5, 8);
// const koalasScore = averageScores(6, 9, 4);
// console.log(dolphinsScore, koalasScore);

//Array

// const friends = ['Emon', 'Rafi', 'Jonas'];
// console.log(friends);
// const year = new Array(2000, 1998, 1999, 1995);
// console.log(year);
// console.log(friends[2]);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);
// friends[2] = 'Sakib';
// console.log(friends);
// friends.push('Jay')
// console.log(friends);
// friends.pop()
// console.log(friends);
// friends.unshift('Abid');
// console.log(friends);
// friends.shift('Abid');
// console.log(friends);
// console.log(friends[friends.length-1]);
// function calcAge(year) {
//     return 2040-year;
// }
// console.log(calcAge(2000));

// const logger = function(birthyear){
//     return 2035-birthyear;
// }
// console.log(logger(2004));

// const age = birthyear=>2038-birthyear;
// console.log(age(2003));

function frootProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const froot = frootProcessor(3,1)
console.log(froot);