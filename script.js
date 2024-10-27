// Function to handle the conversion process
function handleConversion() {
    const numberInput = document.getElementById("number").value;
    const output = document.getElementById("output");
    let number = parseInt(numberInput);

    if (!numberInput) {
        output.innerText = "Please enter a valid number";
        return;
    }

    if (number < 1) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return;
    }

    if (number >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return;
    }

    output.innerText = convertToRoman(number);
}

// Function to convert number to Roman numeral
function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" },
    ];

    let result = "";
    for (const { value, symbol } of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

// Event listener for button click
document.getElementById("convert-btn").addEventListener("click", handleConversion);

// Event listener for "Enter" key press
document.getElementById("number").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleConversion();
    }
});
