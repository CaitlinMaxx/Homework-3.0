// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = {
  "caps": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "lows": "abcdefghijklmnopqrstuvwxyz",
  "numb": "0123456789",
  "special": "!@#$%^&*()"
}

function questions(){
  var passwordLength = prompt("How long would you like your password to be? (Between 8 and 128 characters)");

  if (passwordLength >7 && passwordLength <129){
    var capitals = confirm("Would you like capital letters? (ABC...)");
    var lowers = confirm("Would you like lowercase letters? (abc...)");
    var numbers = confirm("Would you like numbers? (123...)");
    var specials = confirm("Would you like special characters? (!@#...)");
  }

  else if (passwordLength <8 || passwordLength >128){
    alert("Give number between 8 and 128")
    questions()
  }
  else if (passwordLength != Number){
    alert("Give an appropriate value")
    questions()
  }
} 
questions()


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  function generatePassword(){
  
    for (var i = 0; i < questions.passwordLength; i++){
      function gen(){
        value = characters.indexOf(Math.floor(Math.random() * 3) + 1)
      
        if (value === 1 && capitals === true){
          characters.caps.charAt(Math.floor(Math.random() * 25) + 1);
        }
        else if (value === 2 && lowers === true){
          characters.lows.charAt(Math.floor(Math.random() * 25) + 1);
        }
        else if (value === 3 && numbers === true){
          characters.numb.charAt(Math.floor(Math.random() * 10) + 1);    
        }
        else if (value === 4 && specials === true){
          characters.special.charAt(Math.floor(Math.random() * 10) + 1);    
        }
        else {
          gen()
        } 
      }
      gen()
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
