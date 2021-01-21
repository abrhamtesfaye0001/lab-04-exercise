





// Declaring variables 
// You can check this Variables are Available or not under the window object
let firstName; 
let lastName; 
let age; 
let job;
// Receive the values from input 
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?")
age = prompt("Enter Your Age");
// Display  the result on console from input 
console.log("Here is your Profile ")
console.log("Full Name: " + firstName + " "+lastName);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");

//Age variable for Holding Number Value  
let tempAge;
//Eligible to vote 
let isEligibleToVote;

tempAge = parseInt(age);
// check Eligibility 
if (tempAge >= 18) {
    isEligibleToVote = true;
} 
else {
    isEligibleToVote = false;
}

console.log("Is Eligible to Vote : " + isEligibleToVote);


//family storage array 
let familyMember = new Array();
//number of family 
let numberOfFamily;

numberOfFamily = prompt("Number of Family  ? ");
//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your Family  Members " + (i + 1));
}

console.log("Family Members ");
//Displaying the family member with foreach
familyMember.forEach(function(member,index) {
   console.log("Family Member  " + (index + 1) + " : " + member);
});



let birthYear;          //Changing the let age to birth Year

//Some changes 
birthYear = prompt("Enter Your Birth Year");
 tempAge = ageCalc(birthYear);
 


console.log("Age : " + tempAge + " " + "years old");

//age calculator function
function ageCalc(birthYear)
{
    year = new Date().getFullYear();
    // var year = parseInt(date.split(" ")[3]);
    // console.log(year);
    return year- parseInt(birthYear);

}

//BMI calculator
let weight;
let height;

let calcBmi = function(weight,height){

   let bmi = weight/(Math.pow(height,2));
   return bmi;
}




var iife = (function() {

    console.log("Here is your Profile ")
    console.log("Full Name: " + firstName + " " + lastName);
    console.log("Profession : " + job);
    console.log("Age : " + tempAge + " " + "years old");
    console.log("Is Eligible to Vote : " + isEligibleToVote);

    console.log("Family Members ");

    //Displaying the family member with foreach
    familyMember.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });

    // call to bmi calculator 
    calcBmi(weight, height);
})()








