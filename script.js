// Assignment Code
var numbers = "0123456789";
var special = "!@#$%^&*()_+";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase;
var choice0 = "Please choose an amount of characters between 8 and 128."
var choice1 = confirm("Would you like lowercase letter included?");
var choice2 = confirm("Would you like uppercase letters included?");
var choice3 = confirm("Would you like special characters included?");
var newPassword = "";
var possibleCharacters = "";

// Write password to the #password input
function writePassword() {
    var rNumber = Math.floor(Math.random() * numbers.length);
    var rCharacter = Math.floor(Math.random() * special.length);
    var rUppercase = Math.floor(Math.random() * uppercase.length);
    var rLowercase = Math.floor(Math.random() * lowercase.length);
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    var invalid = "The entry is invalid, please choose a value between 8 and 128"

    promptLength(choice0);


    if (promptLength >= 8 && promptLength <= 128) {
        alert(choie1);
    } else {
        alert(invalid);
    };

    if (choice1) {

    }

    if (choice2) {

    }

    if (choice3) {

    }

    return "New Password";
}


const generateBtn = document.getElementById("generate")
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
