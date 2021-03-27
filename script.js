// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["=","!","-","@",")","#","(","$","*","%","&","^","+",];
var numbers = ["1","2","3","4","5","6","7","8","9"];
var userinput;
var arrays =[];


function generatePassword(){
  userinput = window.prompt("How long do you want your chosen password? (between 8 & 128)")
  var length = Number (userinput)
  if (isNaN(length)) {
    alert("Input a Number");
    return generatePassword()

}
if(length<8 || length>128){
  alert("Choose a number from 8 to 128");
  return generatePassword()
}

var chooseupper = confirm("Want upper case letters?")
var chooselower = confirm("Want lower case latters?")
var choosenumbers = confirm("Want numbers?")
var choosespecial = confirm("Want special characters?")

if(!chooseupper&&chooselower&&!choosenumbers&&!choosespecial){
  alert("You must at least choose 1 character type!");
  return generatePassword()
}

if(chooseupper)   {
  chosenCharacters += upperCaseLetters
}
if(chooselower)   {
  chosenCharacters += lowerCaseLetters
}

if(choosenumbers) {
  chosenCharacters += numbers
}

if(choosespecial) {
  chosenCharacters += specialChar
}

for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;

}


// Write password to the #password input
function writepassword() {
  var password = genratepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
