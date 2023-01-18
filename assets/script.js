// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Stored values for character types in their own array
const arrayLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
  "q","r","s","t","u","v","w","x","y","z"];
  // Logged all arrays to console to check for missing letters, numbers or special characters 
  console.log(arrayLowerCase.length);

const arrayUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
  "Q","R","S","T","U","V","W","X","Y","Z",];
  console.log(arrayUpperCase.length);

const arrayNumeric = [0,1,2,3,4,5,6,7,8,9];
  console.log(arrayNumeric.length);

const arraySpecialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+",
  ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`",
  "{", "|", "}", "~"];
  console.log(arraySpecialChar.length);


// Made an initial alert before the page is loaded for fun lol
function generatePasswordAlert() {
  window.alert("Hi!\nI hear you need a password generated :o)");  
  }


// Defines the generatePassword() function
function generatePassword() {
  // Logged this to console to ensure button is working correctly
  console.log("hey! you clicked the button.");

  // Defines pwResults as a local variable under the generatePassword() function
  // It's listed first within the function - so it can be used throughout the entire function
  var pwResults = "";
    var characterLength = window.prompt(
      "First, pick a password character length between 8 and 128 characters.\
      \n\nInput that value in the textbox and click OK."
      );
    // The user input is listed as a string; so we convert it to an integer with parseInt() and define its new variable
    var pwLength = parseInt(characterLength);

    // The entire generator depends on this input to move forward
    if (pwLength > 7 && pwLength < 129) {
      var lowerCase = window.confirm(
        "Do you want to include lowercase letters in your password?\nClick OK to include, Cancel to exclude."
        );
      var upperCase = window.confirm(
        "Do you want to include uppercase letters in your password?\nClick OK to include, Cancel to exclude."
        );
      var numericVal = window.confirm(
        "Do you want to include numbers in your password?\nClick OK to include, Cancel to exclude."
        );
      var specChar = confirm(
        "Do you want to include special character in your password?\nClick OK to include, Cancel to exclude."
        );
    } else {
      // If 8 > userInput > 128, isn't a number, or is empty, the generator will read as invalid and loop this alert
      window.alert("Oops!\nYour current entry is invalid.\n\nPlease enter a new value.");
      return generatePassword();
    }

  // Defined this variable in the same hierarchy as the var pwLength;
  // It will take the values chosen by the user based on the boolean response of each confirm alert
  var userOptions = [];
  
  // Used the .push method to append the chosen array to our new array if it returns true 
  // For every .push, this method returns the targeted array as a new length, with appendages added
  if (lowerCase == true) {userOptions.push(...arrayLowerCase);};
    // Console logged all character type decisions to ensure boolean is working correctly
    console.log(userOptions);

  if (upperCase == true) userOptions.push(...arrayUpperCase);
    console.log(userOptions);

  if (numericVal == true) {userOptions.push(...arrayNumeric);};
    console.log(userOptions);

  if (specChar == true) userOptions.push(...arraySpecialChar);
    console.log(userOptions);

  //One of these has to render true to start the loop
  if (lowerCase || upperCase || numericVal || specChar) {
    // The loop runs until it reaches the set amount of characters denoted in pwLength
    // The results are stored in the pwResults variable
    for (var i = 0; i < pwLength; i++) {
      pwResults += userOptions[Math.floor(Math.random() * userOptions.length)];
    } 
  } else {
    // This alert pops up if none of the character types returned true
    window.alert(
      "Oops!\nA minimum of one character type must be selected in order to generate a password.\
      \n\nPlease try again :o)"
    );
    // This stops the execution of the function and starts it over after the clicking past the alert
    return generatePassword();
  }
  // This stops the function and gives us the value of the computed variable -- function completed!
  return pwResults;
}

// Displays a fun alert when the page is first loaded / refreshed 
generatePasswordAlert();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);