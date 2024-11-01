# Number to Roman Numeral Converter

## Description

The **Number to Roman Numeral Converter** is a simple web application that converts numbers into Roman numerals. Users can input a number between 1 and 3999 to receive the corresponding Roman numeral representation. The application handles user input, validates it, and displays results in a user-friendly manner.

## Features

- Input field to enter a number.
- Convert button to trigger the conversion.
- Displays error messages for invalid inputs.
- Supports pressing "Enter" to perform the conversion.
- Clear instructions and a brief definition of Roman numerals.

## User Stories

- As a user, I should have an input element with an id of `number`.
- As a user, I should have a button element with an id of `convert-btn`.
- As a user, I should have a div, span, or p element with an id of `output`.
- As a user, when I click on the `#convert-btn` without entering a value into the `#number`, the `#output` should contain the text "Please enter a valid number".
- As a user, when I enter a number less than 1 and click the `#convert-btn`, the `#output` should display "Please enter a number greater than or equal to 1".
- As a user, when I enter a number greater than 3999 and click the `#convert-btn`, the `#output` should display "Please enter a number less than or equal to 3999".
- As a user, when I enter 9 and click the `#convert-btn`, the `#output` should display "IX".
- As a user, when I enter 16 and click the `#convert-btn`, the `#output` should display "XVI".
- As a user, when I enter 649 and click the `#convert-btn`, the `#output` should display "DCXLIX".
- As a user, when I enter 1023 and click the `#convert-btn`, the `#output` should display "MXXIII".
- As a user, when I enter 3999 and click the `#convert-btn`, the `#output` should display "MMMCMXCIX".

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Use

1. Clone this repository or download the ZIP file.
   ```bash
   git clone https://github.com/SyntaxStrategist/Palindrome-Checker.git
   ```
2. Open `index.html` in a web browser.
3. Enter a number between 1 and 3999 in the input field.
4. Click the "Convert" button or press "Enter" to see the Roman numeral conversion.

## License

This project is open-source and available under the [MIT License](LICENSE).
