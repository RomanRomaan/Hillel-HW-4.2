const DIGITS_COUNTER = 3;
const userInput = prompt(`Enter a whole ${DIGITS_COUNTER}-digit number: `)

if (!userInput?.trim()) {
    alert("Error: nothing is entered")
}
else if (!Number.isInteger(+userInput)) {
    alert("Error: not a whole number")
}
else {
    const userNum = +userInput;
    const positiveUserNumStr = String(Math.abs(userNum));
    if (positiveUserNumStr.length === DIGITS_COUNTER) {
        const positiveUserNum = Math.abs(userNum);
        const firstDigit = Math.floor(positiveUserNum / 100);
        const secondDigit = Math.floor((positiveUserNum % 100) / 10);
        const thirdDigit = positiveUserNum % 10;
        if (firstDigit === secondDigit && secondDigit === thirdDigit) {
            alert("All digits are the same")
        } else if (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit) {
            alert("some of the numbers are similar")
        } else {
            alert("All digits are different");
        }
    }
    else {
        alert(`Error: enter a ${DIGITS_COUNTER}-digit number`)
    }
}

