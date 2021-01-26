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
