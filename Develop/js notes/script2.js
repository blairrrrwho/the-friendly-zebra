// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var arrayLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
  "q","r","s","t","u","v","w","x","y","z"];
  console.log(arrayLowerCase.length);
var arrayUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
  "Q","R","S","T","U","V","W","X","Y","Z"];
  console.log(arrayUpperCase.length);
var arrayNumeric = [0,1,2,3,4,5,6,7,8,9];
  console.log(arrayNumeric);
var arraySpecialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+",
  ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`",
  "{", "|", "}", "~"];
  console.log(arraySpecialChar.length);
  
var userOptions = [];

// Made an initial alert before the page is loaded for fun lol
function generatePasswordAlert (){
  window.alert("Hi!\nI hear you need a password generated :o)");  
  };


// Define the generatePassword() function
function generatePassword (){
  // Use this for buttons to ensure things are working correctly
  console.log("hey! you clicked the button.");

  var pwResults = "";
  var userLength = window.prompt("First, choose a password character length between\
  8 and 128 characters.\n\nInput that value in the textbox and click OK."
  );
  var pwLength = parseInt(userLength);

    if (pwLength > 7 && pwLength < 129) {
      var lowerCase = window.prompt("Do you want to include lowercase letters in your password?\
      \nType y for Yes, n for No");
        
      var upperCase = window.prompt("Do you want to include uppercase character types in your password?\
      \nType y for Yes, n for No");

      var numericVal = window.prompt("Do you want to include numbers in your password?\
      \nType y for Yes, n for No");

      var specChar = window.prompt("Do you want to include special character types in your password?\
      \nType y for Yes, n for No");

      } else {
          window.alert("Oops!\nYour current entry is invalid.\n\nPlease enter a new value.");
          return generatePassword();
      }

    if (lowerCase === "Y".toLowerCase) userOptions.push(...arrayLowerCase);
      console.log(userOptions);
    if (upperCase === "Y".toLowerCase) userOptions.push(...arrayUpperCase);
      console.log(userOptions);
    if (numericVal === "Y".toLowerCase) userOptions.push(...arrayNumeric);
      console.log(userOptions);
    if (specChar === "Y".toLowerCase) userOptions.push(...arraySpecialChar);
      console.log(userOptions);

  if (lowerCase || upperCase || numericVal || specChar) {
    for (var i = 0; i < pwLength; i++) {
      pwResults += userOptions[Math.floor(Math.random() * userOptions.length)];
    }
  } else {
    window.alert(
      "Oops!\nA minimum of one character type must be selected in order\
      to generate a password.\n\nPlease try again :o)"
    );
    return generatePassword();
  }
  return pwResults;
}

generatePasswordAlert();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
