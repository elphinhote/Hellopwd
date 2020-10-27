

//Generate Password
var password = "";

var passwordGeneration = function() {
  password = "";

  //Create a function that will ask user for length of password. Note: Must be between 8 and 128 Chara long
  var lengthPassword = passwordLength();

  //Create a function that will determine all inclusions for Character Sets
  var passwordInclusions = charaInclusions();
  var passwordInclusionsLength = passwordInclusions.length;

  for (var i = 0; i < lengthPassword; i++) {
    password += passwordInclusions.charAt(Math.floor(Math.random() * passwordInclusionsLength));
  }
console.log (password.charCodeAt(0))
  return password;
};

//This is the function that will prompt for **password length**
var passwordLength = function() {
  //First, lets ask the user for the length of the password using a prompt
  var lengthPass = prompt("Enter Desired Length of New Password. Must Be Between 8 and 128 Characters Long.");

  //Next, lets validate the user input(Whether user entered invalid length or entered nothing at all)
  if (lengthPass < 8 || lengthPass > 128 || lengthPass === "") {
    alert("Invalid Length Entry. Length Must Be Between 8 and 128 Characters Long.")
    return passwordLength;
  }

  //This turns string into number. Note:refer to documentation if im still confused later.
  lengthPass = Math.floor(Number(lengthPass));

  //This will send data from this function to layout function!
  return lengthPass;
}

//Function That will determine included Character sets
var charaInclusions = function() {
  //String to send back inclusions at end
  var passwordInclusions = "";

  //Character Sets
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChara = "~`!@#$%^&*+<?/;:(=)|{";
  var Emojis= "😊😍🤣😂😜😃😉👀😒😆🤔🙄😶😣😏🤨😮";

  //Ask to include characters(Confirms or Prompts?)
  var confirmLower = confirm("Include Lower Case Characters?");
  var confirmUpper = confirm("Include Upper Case Characters?");
  var confirmNumber = confirm("Include Numbers?");
  var confirmSpecial = confirm("Include Special Characters?");
  var confirmEmojis = confirm("Include Emojis?");

  //Validate Selections
  if (confirmLower === true) {
    passwordInclusions += lowerCase;
  }
  if (confirmUpper === true) {
    passwordInclusions += upperCase;
  }
  if (confirmNumber === true) {
    passwordInclusions += numbers;
  }
  if (confirmSpecial === true) {
    passwordInclusions += specialChara;
  }
  if (confirmEmojis === true) {
    passwordInclusions += Emojis;
  }

  //Send back results
  console.log (passwordInclusions)
   return passwordInclusions;
    
}

// Assignment Code Ending
var generateBtn = document.querySelector("#generate");
console.log (generateBtn)
// Write password to the #password input
function writePassword(event) {
    event.preventDefault();
  var password = passwordGeneration();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);