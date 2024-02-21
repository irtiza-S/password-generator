// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Array of special characters to be included in password
let specialCharacters = [
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
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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
let upperCasedCharacters = [
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
  if (passwordLength < 8) {
    alert('Minimum 8 characters.')
    passwordText.innerHTML = 'password not generated'
    return
  }

  // if password length is more than 128
  if (passwordLength > 128) {
    alert('Maximum 128 characters')
    passwordText.innerHTML = 'password not generated'
    return
  }

  let askLowerCase = confirm('Would you like lowercase characters in your password? ')
  let askUpperCase = confirm('Would you like uppercase characters in your password? ')
  let askNumericChar = confirm('Would you like to include numbers in your password? ')
  let askSpecialChar = confirm('Would you like to include special characters? ')

  // return an object containing the user's input
  return {passwordLength, askLowerCase, askUpperCase, askNumericChar, askSpecialChar}
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}

// Function to generate password with user input
function generatePassword() {

  // holds the generated password, which is eventually converted to a string
  let passText = []
  //store password object in userInput 
  var userInput = getPasswordOptions()
  //based on user input - store all possible elements. 
  let allChars = []
  
  // Concatenate arrays based on user preferences
  if (userInput.askUpperCase) {
    allChars = allChars.concat(upperCasedCharacters);
  }

  if (userInput.askNumericChar) {
    allChars = allChars.concat(numericCharacters);
  }

  if (userInput.askSpecialChar) {
    allChars = allChars.concat(specialCharacters);
  }

  // If none of the character types are selected, use lowercase characters by default
  if (!userInput.askUpperCase && !userInput.askNumericChar && !userInput.askSpecialChar) {
    allChars = lowerCasedCharacters;
  }

  //generate password - randomly selecting characters from the combined array
  for (let i = 0; i < userInput.passwordLength; i++) {
    let randomChar = getRandom(allChars)
    passText.push(randomChar)
  }

  // returned the passText as a string
  return passText.join('')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);