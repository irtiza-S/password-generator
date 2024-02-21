// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = parseInt(prompt("How many characters would you like your password to be? "))

  // if user input isn't a number 
  if (isNaN(passwordLength)) {
    alert('Please enter a number')
    passwordText.innerHTML = 'password not generated'
    return
  }

  // if password length is less than 8 
  if (lengthOfPassword < 8) {
    alert('Minimum 8 characters.')
    passwordText.innerHTML = 'password not generated'
    return
  }

  // if password length is more than 128
  if (lengthOfPassword > 128) {
    alert('Maximum 128 characters')
    passwordText.innerHTML = 'password not generated'
    return
  }

  var askLowerCase = confirm('Would you like lowercase characters in your password? ')
  var askUpperCase = confirm('Would you like uppercase characters in your password? ')
  var askNumericChar = confirm('Would you like to include numbers in your password? ')
  var askSpecialChar = confirm('Would you like to include special characters? ')

  // return an object containing the user's input
  return {lengthOfPassword, askLowerCase, askUpperCase, askNumericChar, askSpecialChar}
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  let passText = []
  var userInput = getPasswordOptions()
  console.log(userInput)
  // we want to write a function which will generate a password dependent on the length specified by the user, and what they decide to confirm in relation to special, numerical and uppercase characters.

  // if user wants everything in their password - upper, special, numerical
  if (userInput.askUpperCase && userInput.askNumericChar && userInput.askSpecialChar) {
    // we then want to loop for the length of the password, and add in the characters on each iteration
    for (let i = 0; i < userInput.lengthOfPassword; i++) {
      
    }
  }

  return passText.join('')
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);