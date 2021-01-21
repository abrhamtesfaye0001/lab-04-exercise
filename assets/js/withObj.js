let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },
    calcBmi: function() {
        let bmi = Math.round(this.weight/(Math.pow(this.height,2)))
        console.log("your BMi is "+bmi);
        if(bmi<18.5){
            console.log("you are underweight");
        }
        else{
            if(bmi>=18.5 && bmi<= 24.9){
                console.log("you are healthy");
            }else{
                if(bmi>=25 && bmi<29.9){
                    console.log("you are overweight");
                }else{
                    console.log("you are obese");
                }
            }
        }
    }
};


personProfile.firstName = prompt("Enter Your First Name");
personProfile.lastName = prompt("Enter Your Last Name");
personProfile.job = prompt("What is Your Profession ?");
personProfile.birthYear = prompt("Enter Your Birth Date");
personProfile.weight = prompt("Your Weight in Kg  ? ");
personProfile.height = prompt("Your Height in M  ? ");
let numberOfFamily = prompt("Number of Family  ? ");


for (let i = 0; i < parseInt(numberOfFamily); i++) {
    personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}


personProfile.ageCalc();
personProfile.checkVote();

let myIife = (function() {

    console.log("**************************************************************")
    console.log("Here is your Profile ")
    console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
    console.log("Profession : " + personProfile.job);
    console.log("Age : " + personProfile.age + " " + "years old");
    console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
    console.log("Family Members ");
    
    personProfile.familyMembers.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });
    
    // personProfile.calcBmi();
    personProfile["calcBmi"]()
    console.log("**************************************************************")

})();
