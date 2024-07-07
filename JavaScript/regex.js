//Regex In JavaScript
//Regular Expression
//pattern matching

let pattern = 'pw';
let regExOne = new RegExp(pattern);

let flag = 'gi';
let regExTwo = new RegExp(pattern,flag);

let regExThree = /pw/gi;
const strToCheck = "pw us growing at a rapid speed and recently thet are working on Pwskills to create skills based pwcontent";
const result = regExThree.test(strToCheck);


const anotherResult = strToCheck.match(regExThree);


console.log(result+"======="+anotherResult);

const oneMoreResult = strToCheck.replace(regExThree, 'Ravi');


console.log(oneMoreResult);




