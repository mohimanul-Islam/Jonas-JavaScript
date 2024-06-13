'use strict';
// let hasDriversLicense=false;
// const passTest=true;
// if(passTest)hasDriversLicense=true;
// if(hasDriversLicense)console.log('I can drive');

// const private=254;

//functions

function logger (){
    console.log('my name is Emon');
}
//calling running or invocing function
logger();
logger();
logger();

function fruitProcessor(apples, orranges) {
    console.log(apples, orranges);
    const juice = `juice with ${apples} apples and ${orranges} orenges. `;
    return juice;
}
const appleJuice = fruitProcessor(5,2);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(4,3);
console.log(appleOrangeJuice);
console.log(fruitProcessor(5,3));

