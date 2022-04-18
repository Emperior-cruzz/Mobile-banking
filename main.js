const balance = document.getElementById("balance");
const amount = document.getElementById("amount");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    let accBalance = 1000000.0;
    let bal = amount.value;

    if (bal <= accBalance) {
        if (confirm("Input your pin to continue")) {
            passcode = 1234;
            let pin = window.prompt("Enter your passcode");
            if (pin == passcode) {
                alert("Withdrawal Succesful!!! Thanks for banking with us");
                accBalance -= bal;
                balance.innerHTML = `Current Balance : $${accBalance}.00`;
            } else {
                alert("incorrect passcode");
            }
        } else {
            alert("Sorry withdrawal unsuccesful");
        }
    } else {
        alert("Sorry!!! Insufficient Balance");
    }
});
