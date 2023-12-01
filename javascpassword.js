// Getting the DOM Elements
const resultDOM = document.getElementById("result"); //DOM Elements is used to get the values from the user input and generate the password and display it in the result DOM element
const copybtnDOM = document.getElementById("copy"); // this DOM element is used to display the password in the result DOM element and copy the password to the clipboard when the user clicks on the copy button
const lengthDOM = document.getElementById("length"); 
const uppercaseDOM = document.getElementById("uppercase");
const numbersDOM = document.getElementById("numbers");
const symbolsDOM = document.getElementById("symbols");
const generatebtn = document.getElementById("generate");
const form1 = document.getElementById("passwordGeneratorForm"); 
//save button dom element
const savebtn = document.getElementById("save");




// Generating Character Codes For The Application
const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64)) // special characters from ! to @ used to generate the password
  .concat(arrayFromLowToHigh(91, 96)) // special characters from [ to ` used to generate the password
  .concat(arrayFromLowToHigh(123, 126)); // special characters from { to ~ used to generate the password
  // Character Code Generating Function
function arrayFromLowToHigh(low, high) { // this function is used to generate the character codes from the low to high range
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }
  // The Password Generating Function
let generatePassword = (
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  ) => {
    let charCodes = LOWERCASE_CODES;
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
      const characterCode =
        charCodes[Math.floor(Math.random() * charCodes.length)]; // this function is used to generate the random character codes from the character codes array
      passwordCharacters.push(String.fromCharCode(characterCode)); // this function is used to convert the character codes to the character
    }
    return passwordCharacters.join(""); // this function is used to join the character codes to form the password
  }
  // Copy password button
 



  // Checking the options that are selected and setting the password
form1.addEventListener("submit", (e) => { // this function is used to check the options that are selected and set the password
    e.preventDefault(); // this function is used to prevent the default behaviour of the form
    const characterAmount = lengthDOM.value;
    const includeUppercase = uppercaseDOM.checked;
    const includeNumbers = numbersDOM.checked;
    const includeSymbols = symbolsDOM.checked; // this function is used to check the options that are selected and set the password
    const password = generatePassword(
      characterAmount,
      includeUppercase,
      includeNumbers,
      includeSymbols
    );
    resultDOM.innerText = password; // this function is used to display the password in the result DOM element
  });





/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() { 
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function togglePopup() {
  document.getElementById("popup-1")
   .classList.toggle("active");
 }

 copybtnDOM.addEventListener("click", (e) => {
  e.preventDefault();
  const textarea = document.createElement("textarea");
  const passwordToCopy = resultDOM.innerText;
  // A Case when Password is Empty 
  if (passwordToCopy === "") {
    alert("Please Generate a Password First");
  } else {
 
  //Copy Functionality
  textarea.value = passwordToCopy;
  document.body.appendChild(textarea);
  textarea.select();

  document.execCommand("copy");
  textarea.remove();
  alert("Password Copied to Clipboard");
  }
  

  
});












 


/*
 
  $("form").submit(function() {
    $('.alert').append(JSON.stringify($("form").formToJson()));
    console.log($(this).formToJson());
    return false;
  });
try {
  fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
    return true;
  }).catch(function(e) {
    var carbonScript = document.createElement("script");
    carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
    carbonScript.id = "_carbonads_js";
    document.getElementById("carbon-block").appendChild(carbonScript);
  });
} catch (error) {
  console.log(error);
}

*/

/*

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxaDhWKWKqCcvroEH3OuEWRw2RZDwI85ibeeYhdCk6aVnU2F82ru171ufWdS-fAL34Gyw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit-to-google', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })



*/








 