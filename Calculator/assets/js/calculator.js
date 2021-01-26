// Create functions with the functionality of adding and multiplying a list input of numbers 
function addition(a){
    let sum = 0;
    a.forEach(element => {
        sum += Number(element);
    });
    return `The sum of the numbers ${a} is ${sum}`
}
function multiplication(a){
    let product = 1;
    a.forEach(element => {
        product *= Number(element);
    });
    return `The product of the numbers ${a} is ${product}`
}

// Create an immediately invokable function with a functionality of a simple calculator with the choice of service from user omitting addition and multiplication
(function () {
    let service = prompt(`Please enter the service you would like to use? (division, subtraction, maximum, minimum, average, square)`);

    // Create a function for the functionality of dividing two numbers and check the probability of resulting in undefined
    if (service.toLowerCase() === 'division') {
        (function division(a, b) {
            if (!isNaN(a) && !isNaN(b)) {
                let value = (b != 0) ? a/b : 'undefined';
                console.log(`The quotient of the numbers ${a} and ${b} is ${value}`);
            }
            else {
                console.log(`Please enter a valid number.`);
            }
        })(prompt(`Enter the first number?`),prompt(`Enter the second number?`))
    }

    // Create a function for the functionality of subtracting two numbers
    else if (service.toLowerCase() === 'subtraction') {
        (function subtraction(a, b) {
            if (!isNaN(a) && !isNaN(b)) {
                console.log(`The difference between the numbers ${a} and ${b} is ${Number(a) - Number(b)}`);
            }
            else {
                console.log(`Please enter a valid number.`);
            }
        })(prompt(`Enter the first number?`),prompt(`Enter the second number?`))
    }

    // Create a function for the functionality of returning the maximum number from a list of numbers
    else if (service.toLowerCase() === 'maximum') {
        (function maximumOf(listLength){            
            let listElements = new Array();
            for (let index = 0; index < listLength; index++) {
                let listElement = prompt(`Enter one of the numbers?`);
                if (!isNaN(listElement)) {
                    listElements.push(listElement);
                }  
                else {
                    console.log(`Please enter a valid number`);
                    return;
                }     
            }
            let maxValue = listElements[0];
            listElements.forEach(element => {
                maxValue = (element > maxValue) ? element : maxValue;
            });
            console.log( `The maximum value from the list ${listElements} is ${maxValue}`) 
        })(prompt(`Enter the number of elements in the list to determine the maximum number?`))
    }

    // Create a function for the functionality of returning the minimum number from a list of numbers
    else if(service.toLowerCase() === 'minimum'){
        (function minimumOf(lengthOfList){            
            let listofElements = new Array();
            for (let index = 0; index < lengthOfList; index++) {
                let elementOfList = prompt(`Enter one of the numbers?`);
                if (!isNaN(elementOfList)) { 
                    listofElements.push(elementOfList);
                }   
                else {
                    console.log(`Please enter a valid number.`);
                    return;
                }   
            }
            let minValue = listofElements[0];
            listofElements.forEach(element => {
                minValue = (element < minValue) ? element : minValue;
            });
            console.log( `The minimum value from the list ${listofElements} is ${minValue}`   ) 
        })(prompt(`Enter the number of elements in the list to determine the minimum number?`))
    }

    // Create a function for the functionality of returning the average of a list of numbers
    else if(service.toLowerCase() === 'average') {
        (function average(a) {
            let elementsSum = 0;
            let arrayElements = new Array();
            for (let index = 0; index < a; index++) {
                let arrayElement = prompt(`Enter one of the numbers?`)  
                if (!isNaN(arrayElement)) {
                    arrayElements.push(arrayElement);   
                }   
                else {
                    console.log(`Please enter a valid number.`);
                    return;
                }
            }
            arrayElements.forEach(element => {
                elementsSum += Number(element);
            });
            console.log(`The average of the list ${arrayElements} is ${elementsSum / a}`);
        })(prompt(`Please enter the number of elements to calculate the average of the numbers?`));
    }

    // Create a function for the functionality of returning the square of a number
    else if(service.toLowerCase() === 'square') {
        (function square(a) {
            if (!isNaN(a)) {
                console.log(`The square of the number ${a} is ${a**2}`);
            }
            else {
                console.log(`Please enter a valid number`);
            }
        })(prompt(`Please enter a number to calculate the square?`))
    }

    // Make sure to check for appropriate input from user for choosing a service
    else {
        console.log( `Please choose from the provided services and check your spelling; thank you!`);
    }
})();

