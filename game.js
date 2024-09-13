
let randomNumber;

randomNumber = Math.floor(Math.random() * 100);

 let numberHistory = [];

while (true) {
    let userNumber = +prompt("Enter the number form 1 to 100: ");

    if (userNumber >= 0 && userNumber <= 100) {
        if (userNumber === randomNumber) {
            alert("Congratulations, you guessed it!");
            break;
        } else if (userNumber > randomNumber) {
            alert("your number is bigger");
        } else if (userNumber < randomNumber) {
            alert("your number is smaller");
        }
    } else {
        alert("Your number is wrong");
    }

    numberHistory.push(userNumber);
    alert("Your numbers: " + numberHistory);
}