# The Friendly Zebra Password Generator

## Description

This JavaScript web application serves the purpose of generating a random password based off of the criteria chosen by the user via prompts and confirms that pop up on the page. That being said, the complexity of the password is strictly determined by the user's preferences. 

The password length has to be at least 8 characters and no more than 128 characters. The four character types to choose from are as follows: lowercase letters, uppercase letters, numbers, and/or special characters. The user must select at least one type in order to have a password generated. That being said, the user also has the option to choose multiple character types. 

The alerts, prompts, and confirms require a response in order for a password to be generated at all. If an input returns invalid, the user will be prompted to try again and the prompt redirects them. 
After all selections have been made by the user and validated by the program, the password will be displayed in the textbox above the button. The algorithm generation ends there and can be restarted if the user clicks the button again or refreshes the page. 


## Installation

There is no installation necessary to use this web application; just a web browser. 


## Usage

To use this web application, the first thing you have to do is click "OK" on the introduction alert. Then, you will see the password generator. 

To bein, click the red button labeled "Generate Password." The first window will pop up and ask you to enter a value for how many characters you want the password to be; invalid data will reprompt you to try again. Next, you will have a series of confirm messages pop up asking whether or not you want to include the respective character type in your password; click confirm to include that type, click cancel to exclude that character type. 

Once the input is validated, a randomly generated password with your preferences applied will display in the textbox on the screen. 

There are multiple console logs done throughout the entire process to ensure things are working correctly with the functions and buttons. Those interested can open up DevTools, open up the console, click the generate password button, and watch the values appear in the console as you're taken through the series of prompts and confirms. 

![The Friendly Zebra Password Generator Screenshot](./assets/images/screenshot_pw%20generator.png)

**Link to the deployeed application: https://blairrrrwho.github.io/the-friendly-zebra-pw-generator/**
 

## Credits 🏆

This JavaScript web application was completed with the help of a starter code. This respective repo included a completed HTML file and CSS stylesheet with a starter code in the script.js file. The content and appearance of the webpage was completed based off of the original repository. The link for said repository is displayed in the [Credits](#credits-🏆) section of this document. 

Google was my best friend throughout this project, as was YouTube. They served the purpose of helping set a foundation to start pseudocoding the application. Intensive research was done to figure out different issues that developed once I started putting in code.

Once things started working for the most part, my research shifted into optimization. 
Not necessarily pseudocoding, but going back through the code and asking questions about whether or not this/that line of code could be cleaned up, and even entire code processes - if they could be cleaned up, optimized, or done more efficiently. 




I really could not have worked through this project alone without the help of my colleagues, specifically Christina Hall and BJ Thompson. Together we worked through debugging and optimizing the code until it was working seamlessly. I also am grateful for their set of eyes once the application was deployed to ensure it was working properly. 

A few websites that helped me code out this application are, but not limited to: 
- W3Schools: https://www.w3schools.com/
- MDN Web Docs: https://developer.mozilla.org/en-US/ 
- Stack Overflow: https://stackoverflow.com/ 
- YouTube, specifically The Net Ninja:
    - JavaScript Tutorial: https://youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET )
   

Link to the GitHub repository with the original starter code, as mentioned in the [Usage](#usage) section: 
https://github.com/coding-boot-camp/friendly-parakeet 

Resource Link used to find a list of special characters: https://www.owasp.org/index.php/Password_special_characters

## Tests

If you open up the console log in DevTools, you can see the different console logs throughout the entire process of this app's execution. 