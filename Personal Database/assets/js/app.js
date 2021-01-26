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

})();
