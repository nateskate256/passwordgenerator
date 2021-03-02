// Assignment Code

//special chars string
const specialCharacters = "@%+\\/'!#$^?:,)(}{][~-_.\"";
//numeric chars string
const numericCharacters = "0123456789";
//lower case chars string
const lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";
//uppercase chars string
const upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Retrieve a reference to the button with an id of generate
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}

function pwdOptions() {
  var length = parseInt(
    prompt("How many characters do you want in your password?")
  );
  if (length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }
  if (length > 128) {
    alert("Password can't be more than 128 characters");
    return;
  }
  if (isNaN(length)) {
    alert("Must insert a number");
    return;
  }
  //  Using a confirm prompt for numeric characers
  var numeric = confirm("Do you want numeric characters in your password?");
  // //  Using a confirm prompt for special characters
  var special = confirm("Do you want special characters in your password?");
  //  Using a confirm prompt for lowercase characters
  var lowercase = confirm("Do you want lowercase characters in your password?");
  //  Using a confirm prompt for uppercase characters
  var uppercase = confirm("Do you want uppercase characters in your password?");
  return { length, numeric, special, lowercase, uppercase };
}

function generatePassword() {
  var passwordoptions = pwdOptions();
  var pwd = "";
  var finalpassword = "";
  if (passwordoptions.special) {
    pwd += specialCharacters;
  }
  if (passwordoptions.lowercase) {
    pwd += lowerCasedCharacters;
  }
  if (passwordoptions.uppercase) {
    pwd += upperCasedCharacters;
  }
  if (passwordoptions.numeric) {
    pwd += numericCharacters;
  }

  for (let i = 0; i < passwordoptions.length; i++) {
    finalpassword += getRandomItem(pwd);
  }

  return finalpassword;
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
