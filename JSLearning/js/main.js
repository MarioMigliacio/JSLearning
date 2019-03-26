// Your code here!


// Coding tutorial challenge 1: 
// height calculated in meters, mass in kgs
var markHeight, markMass, markBMI, isMarkLarger;
var johnHeight, johnMass, johnBMI, isJohnLarger;

markMass = 92;
markHeight = 1.8;

johnMass = 78;
johnHeight = 2.3;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

isMarkLarger = markBMI > johnBMI;
isJohnLarger = johnBMI > markBMI;

console.log('Marks BMI: ' + markBMI);
console.log('Johns BMI: ' + johnBMI);
console.log('Is Mark larger than john? : ' + isMarkLarger);
console.log('Vice versa, Is john larger than mark? : ' + isJohnLarger);