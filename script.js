// define password characters 
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// define our variables 
const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const incUpper = document.getElementById("upper")
const generateBtn = document.getElementById("generate");

// click button to generate string 
generateBtn.addEventListener("click", () => {
    let characters = lower;
    incNumbers.checked ? (characters += numbers) : "";
    incSymbols.checked ? (characters += symbols) : "";
    incUpper.checked ? (characters += upper) : "";
    passwordTxt.value = generatePassword(length.value, characters);
  });

//   password generation
  const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };

// copy to clipboard
  const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password Copied");
});