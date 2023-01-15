// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const arrayLowerCase = "abcdefghijklmnopqrstuvwxyz";
const arrayUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Stored numbers in variable as a string; will convert to numbers later
const arrayNumeric = "0123456789";
const arraySpecialChar =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var pool = [];


// Define the generatePassword() function
function generatePassword (){
  // Use this for buttons to ensure things are working correctly
  console.log("hey! you clicked the button.");

  window.alert("Hi!\nI hear you need a password generated :o)"); 

  var userLength = window.prompt("First, choose a password character length between\
  8 and 128 characters.\n\nInput that value in the textbox and click OK."
  );
    var pwLength = parseInt(userLength);

      if (pwLength > 7 && pwLength < 129) {
      /* {window.alert("Oops!\nYour chosen value is either too small, too big, or undefined.\
        \n\nPlease enter a different value.")
        // put something that redirects to the length prompt screen until a corrent value entered}*/

        let lowerCase = window.prompt("Do you want to include lowercase character types in your password?\
        \nType y for Yes, n for No");
          // if (lowerCase = "Y".toLowerCase) {pool.push(...)} 
          // console.log(pool);
        
        let upperCase = window.prompt("Do you want to include uppercase character types in your password?\
        \nType y for Yes, n for No");
          // if (userCriteria2 = "Y".toLowerCase) {pool.push(...)}
          // console.log(pool);

        let numericVal = window.prompt("Do you want to include numbers in your password?\
        \nType y for Yes, n for No");
          // if (numericVal = "Y".toLowerCase) {pool.push(...)}
          // console.log(pool);

        let specChar = window.prompt("Do you want to include special character types in your password?\
        \nType y for Yes, n for No");
          // if (specChar = "Y".toLowerCase) {pool.push(...)}
          // console.log(pool);
      } else {
          window.alert("Oops!\nYour current entry is invalid.\n\nPlease enter a new value.");
          return generatePassword();
      }

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
