// When I click On a button, I want to trigger a function that asks for inputs.

function promptUser() {
    // Take the inputs from the user
    var char_number = prompt("Please choose an amount of characters between 8 and 128.")
    // Check if the user entered a number between 8 and 128
    if (char_number < 8 || char_number >= 128) {
        promptUser()
    }

    var choice1 = confirm("Would you like lowercase letter included?");
    var choice2 = confirm("Would you like uppercase letters included?");
    var choice3 = confirm("Would you like numbers included?");
    var choice4 = confirm("Would you like special characters included?");
    // A collection of possible charaters for the password
    var numbers = "0123456789";
    var special = "!@#$%^&*()_+";
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var uppercase = lowercase.toUpperCase()
    var choices = [];
    var new_password = [];

    if (choice1 == false && choice2 == false && choice3 == false && choice4 == false) {
        alert("You must select from one of the given options")
        promptUser()
    }
    // Check to see if there is atleast one true value in choice 1, 2, 
    if (choice1) {
        // Add the lowecase string into choices array
        choices.push(lowercase)
    }

    if (choice2) {
        choices.push(uppercase)
    }
    // Check if the user wants special charaters and numbers
    if (choice3) {
        choices.push(numbers)
    }

    if (choice4) {
        choices.push(special)
    }

    alert(choices)









}

const generateBtn = document.getElementById("generate")
// Add event listener to generate button
generateBtn.addEventListener("click", promptUser);
