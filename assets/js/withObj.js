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
    calcBmi: function(message7) {
        let bmi = Math.round(this.weight/(Math.pow(this.height,2)))
        
        message7 = `your BMi is ${bmi}\n`;
        if(bmi<18.5){
            return message7+=`you are underweight`;
        }
        else{
            if(bmi>=18.5 && bmi<= 24.9){
                return message7+=`you are healthy`;
            }else{
                if(bmi>=25 && bmi<29.9){
                    return message7+=`you are overweight`;
                }else{
                    return message7+=`you are obese`;
                }
            }
        }
        
    }
};




let myIife = (function() {
    
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

    let message1 = "Here is your Profile ";
    let message2 = "Full Name: " + personProfile.firstName + " " + personProfile.lastName
    let message3 = "Profession : " + personProfile.job;
    let message4 = "Age : " + personProfile.age + " " + "years old";
    let message5 = "Is Eligible to Vote : " + personProfile.isEligibleToVote;
    let message6 = "Family Members \n";
    let message7 = ``;
    
    // console.log("Here is your Profile ")
    // console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
    // console.log("Profession : " + personProfile.job);
    // console.log("Age : " + personProfile.age + " " + "years old");
    // console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
    // console.log("Family Members ");
    
    personProfile.familyMembers.forEach(function(member, index) {
        message6+="Family Member  " + (index + 1) + " : " + member+"\n";
    });
    
    // personProfile.calcBmi();
    
    // console.log("**************************************************************")

    alert(`${message1}\n${message2}\n${message3}\n${message4}\n${message5}\n${message6}\n${personProfile["calcBmi"](message7)}\n`)

})();
