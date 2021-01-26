// Create an immediately invokable function with an object of multiple properties
(function() {
    let person = {
        firstName: "",
        lastName: "",
        profession: "",
        age: "",
        isEligible: false,
        familyMember: [],
        weight: 0,
        height: 0,
        ageCalc: (birthYear) => {return `${new Date().getFullYear() - birthYear}`},
        CalcBMI: function(weight, height) {
            let bmi = (weight / (height ** 2)).toFixed(2);
            if (!isNaN(bmi)) {                
                if (bmi < 18.5){
                    return `Your BMI is ${bmi} and you are underweight`;
                }
                else if (bmi >= 18.5 && bmi <= 24.9){
                    return `Your BMI is ${bmi} and you are healthy or normal weight`;
                }
                else if (bmi >= 25.0 && bmi <= 29.9){
                    return `Your BMI is ${bmi} and you are overweight`;
                }
                else {
                    return `Your BMI is ${bmi} and you are obese`;
                }
            }
            else {
                return `Please enter a valid number`
            }

        }
    }

    // prompt user to input personal information
    person.firstName = prompt(`Please enter your first name?`);
    person.lastName = prompt(`Please enter your last name?`);
    person.profession = prompt(`What is your profession?`);
    person.age = prompt(`Please enter your birth year?`);
    if (isNaN(person.age) || new Date().getFullYear() < person.age || person.age < 0) {
        console.log(`Please enter a valid birth year`);
        return;
    }
    
    // calculate the age of the user from provided personal info data and a function that makes use of Date
    let tempAge = person.ageCalc(person.age);
    console.log(
        `Here is your profile:
        Your full name ${person.firstName} ${person.lastName}
        Your profession is ${person.profession}
        Your age is ${tempAge}`
    );

    // Check eligibility of user based on age
    person.isEligible = tempAge >= 15 ? true : false;
    console.log(`${person.firstName} ${person.lastName} has an eligibility to vote of ${person.isEligible}`);
    
    // Create an array to append identifications of family members of the user
    person.familyMember = new Array();
    let numberOfFamily = prompt("Your number of Family? ");
    for (let index = 0; index < Number(numberOfFamily); index++) {
        person.familyMember[index] = prompt(`Please enter the identification of your family member set on number ${index + 1}?`);
        
    }
    console.log(`${person.firstName} ${person.lastName}'s family members:`);
    person.familyMember.forEach(element => {
        console.log(`Family member: ${element}`);
        
    });

    // Prompt for user to enter weight and height for BMI calculation making use of the function with formula and conditions
    person.weight = prompt(`Please enter your weight in kilograms?`);
    person.height = prompt(`Please enter your height in meters?`);
    console.log(person.CalcBMI(person.weight, person.height));

})();
