// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Stored numbersin variable as a string; will convert to numbers later
let num = "0123456789";
let specChar =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// stored all four criteria options in an array
let allOptions = [lowerCase, upperCase, num, specChar];

var pwLength = userInput();
function userInput() {
  if 
}

// Define the generatePassword() function
function generatePassword (){
  // Use this for buttons to ensure things are working correctly
  console.log("hey! you clicked the button.");
  

  // store generated password into a variable and return that variable at end of function
  // step 4
  return "generated pw will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
