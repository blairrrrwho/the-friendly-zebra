// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Stored numbersin variable as a string; will convert to numbers later
let num = "0123456789";
let specChar =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// stored all four criteria options in an array
let userOptions = [];
let length;



// Define the generatePassword() function
function generatePassword (){
  // Use this for buttons to ensure things are working correctly
  console.log("hey! you clicked the button.");

  // make a prompt asking how many characters they want pw to be; must be btw 8-128
      // ^ has to be assigned to length 
  // if input is inside of 8-128, go to next function; if not, alert that it needs a different input


}


function userCriteria(){
  // we need to know how many of 4 types of characters they want in pw; at least one
  // lowercase prompt 
    // validate the yes or no
    // make sure the yes or no is lowercase -- convert their response to lowercase 
    // push lowercase to userOptoins (or not)

  //  x3

}

// make a call to the next function 
function createPassword (){
  // run a set amount of times depending on pw length
  // randomize each set of criteria; loop that until it meets pw length 

  // return the password 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
