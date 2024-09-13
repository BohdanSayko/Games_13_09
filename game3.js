let userNumber = +prompt("Enter the number: ");
let counter = userNumber;

while (counter > 0) {
    alert(counter);

    counter--;

    if (counter === 0) {
        alert("Час вийшов!");
    }
}
