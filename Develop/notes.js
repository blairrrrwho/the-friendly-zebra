// Assignment code here

// Get references to the #generate element
// this variable targets the generate id in html--the gen pw red button
// use this variable to target that button
var generateBtn = document.querySelector("#generate");


// Define the generatePassword() function
function generatePassword (){
    // Use this for buttons to ensure things are working correctly
    console.log("hey! you clicked the button.");
    return "generated pw will go here";
    // this returns the value when you click the button; now you know the basics of the function
    // are working
    // store generated password into a variable and return that variable at end of function
  }

// rewrite
function generatePassword (){
    console.log("hey! you clicked the button.");





    // code

    return "generated pw will go here";
   
  }




// Write password to the #password input

/*writePassword function created; this is what it does: 
  it creates a variable named password and sets it equal to the VALUE
  of another function; var pw will be assigned to the value of the generatePassword()

  we're calling the generatePassword function and storing the value of that function
  into our variable - var password 
    */

  /* 2nd part: we create a variable named passwordText; set it equal to
     the id password; #password is the body of the card; where the pw displays on screen*/
function writePassword() { 
  var password = generatePassword(); 
    // generates the pw by running it through the generatePassword()
  var passwordText = document.querySelector("#password");
    // where the generated pw displays on the screen
    // the query selector selects the first child of that id and does what you tell it to do

  passwordText.value = password;
//   passwordText takes the value of your generated pw and plugs it into what's displayed on the screen

}

// Add event listener to generate button
// when the user clicks the red button, it will call the writePassword function

generateBtn.addEventListener("click", writePassword);
