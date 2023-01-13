// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set acceptance critera prompts into their own variables
var charCount = 15; 
// ^ that character count needs to be chosen by the user; 8-128
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";






// Write password to the #password input
function writePassword() {
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// console.log(getRandomSymbol())
// console.log(writePassword())

/* 
function generatePaassword(){
  (i=0; | < characterCount; i++)
};
*/