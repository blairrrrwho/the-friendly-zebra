// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Stored numbers in variable as a string; will convert to numbers later
let num = "0123456789";
let specChar =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// stored all four criteria options in an array
// let userOptions = [];



// Define the generatePassword() function
function generatePassword (){
  // Use this for buttons to ensure things are working correctly
  console.log("hey! you clicked the button.");

  window.alert("Hi!\nI hear you need a password generated :o)"); 

  const charLength = Number(window.prompt("First, choose a password character length between\
  8 and 128 characters.\n\nInput that value in the textbox and click OK."));
      if (charLength < 8 || charLength > 128) {
        window.alert("Oops!\nYour chosen value is either too small, too big, or undefined.\
        \n\nPlease enter a different value.")
        // put something that redirects to the length prompt screen until a corrent value entered
      }
      else {console.log(charLength)};

      let userCritera1 = window.prompt("Do you want to include lowercase character types in your password?\
        \nType y for Yes, n for No");
      if (userCritera1 = "Y".toLowerCase) {var userOptions = lowerCase} 
        console.log(userOptions);
        
      let userCriteria2 = window.prompt("Do you want to include uppercase character types in your password?\
        \nType y for Yes, n for No");
        if (userCriteria2 = "Y".toLowerCase) {var userOptions = upperCase}
        console.log(userOptions);

      let userCriteria3 = window.prompt("Do you want to include numbers in your password?\
        \nType y for Yes, n for No");
        if (userCriteria3 = "Y".toLowerCase) {var userOptions = num}
        console.log(userOptions);

      let userCriteria4 = window.prompt("Do you want to include special character types in your password?\
        \nType y for Yes, n for No");
        if (userCriteria4 = "Y".toLowerCase) {var userOptions = specChar}
        console.log(userOptions);


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
