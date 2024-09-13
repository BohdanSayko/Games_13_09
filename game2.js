let userNumber = +prompt("Enter the number: ");
let counter = 1;

while (counter <= userNumber) {
    if (userNumber !== NaN) {
        if (counter % 3 === 0 && counter % 5 === 0) {
            alert("FizzBuzz");
        } else if (counter % 5 === 0) {
            alert("Buzz");
        } else if (counter % 3 === 0) {
            alert("Fizz");
        } else {
            alert(counter);
        }
    } else {
        alert("Your number is wrong");
    }

    counter++;
}
