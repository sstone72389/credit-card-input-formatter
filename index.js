var ccNum = document.querySelector("#ccNum");
ccNum.addEventListener("input", onChangeTxtCardNumber);

function onChangeTxtCardNumber(e) {
    var cardNumber = ccNum.value;

	  // Do not allow users to write invalid characters
    var formattedCardNumber = cardNumber.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);

    // Split the card number is groups of 4
    var cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
        formattedCardNumber = cardNumberSections.join(' ');
    }

    console.log("'"+ cardNumber + "' to '" + formattedCardNumber + "'");

    // If the formmattedCardNumber is different to what is shown, change the value
    if (cardNumber !== formattedCardNumber) {
        ccNum.value = formattedCardNumber;
    }
}
