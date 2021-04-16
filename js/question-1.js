/*
Question 1
Convert the function below to an arrow function:

function division(a, b) {    
    return a % b;
}
*/

const remainder = (a, b) => a % b;
const division = (a, b) => a / b;

/*
In the question the function is called divide but returns the remainder. As modulo returns the remainder I created 2 arrow functions, one named remainder using the modulo operator and one named division which calculates a divided by b. 
(It felt wrong to name a function something and make it do something else : ) )
*/
