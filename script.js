 //Created by: Anand Seshadri
//GMU ID: G01351350 


// Below function will load the content of each page into the main section of the current page when the link is clicked.
function loadPage(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", page, true);
    xhttp.send();
  }

  document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("#nav a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function(e) {
        e.preventDefault();
        var page = this.getAttribute("href");
        loadPage(page);
      });
    }
  });


// -------------------------------------------------------
// Survey Form Extension and Average & Maximum Computation
// -------------------------------------------------------

const dataInput = document.getElementById("data");
const averageOutput = document.getElementById("average");
const maximumOutput = document.getElementById("maximum");
// const errorOutput = document.createElement("span");
const errorOutput = document.getElementById("error-output");


// Function to calculate the average and maximum of the input
function calculateAverageAndMaximum(data) {
  // Split the input by commas and convert the resulting strings to numbers
  const numbers = data.split(",").map(Number);
  // Check if there are exactly ten numbers
  if (numbers.length !== 10) {
    return null;
  }
  // Check if all the numbers are between 1 and 100 (inclusive)
  if (numbers.some((n) => n < 1 || n > 100)) {
    return null;
  }
  // Calculate the average and maximum of the numbers
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  const average = sum / numbers.length;
  const maximum = Math.max(...numbers);
  return { average, maximum };
}

// Function to update the average and maximum outputs
function updateOutputs() {
  const data = dataInput.value;
  const result = calculateAverageAndMaximum(data);
  if (result === null) {
    // Display an error message if the input is invalid
    errorOutput.textContent =
      "Please enter exactly ten comma separated numbers from 1 to 100 (inclusive)";
    dataInput.parentNode.insertBefore(errorOutput, dataInput.nextSibling);
    averageOutput.textContent = "";
    maximumOutput.textContent = "";
  } else {
    // Clear the error message if the input is valid
    errorOutput.textContent = "";
    // Update the average and maximum outputs
    averageOutput.textContent = ` ${result.average.toFixed(2)}`;
    maximumOutput.textContent = ` ${result.maximum}`;
  }
}

// Update the outputs when the input changes
dataInput.addEventListener("change", updateOutputs);


//--------------------------------------------------------------
// Form Validation Event Handling
//--------------------------------------------------------------

const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const streetInput = document.getElementById('Street');
const cityInput = document.getElementById('City');
const stateInput = document.getElementById('State');
const zipcodeInput = document.getElementById('Zipcode');
const emailInput = document.getElementById('Email');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const radioButtons = document.querySelectorAll('input[type="radio"]');

var errorMessages = [];
function validate(){
  errorMessages=[];
  validateName();
  validateAddress();
  validateCheckboxes();
  validateRadioButtons();
  validateEmail();
  displayErrorMessages();
}

  
  
  function validateName() {
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(nameInput.value)) {
      errorMessages.push('Name should contain only alphabets.<br>');
      nameInput.value = '';
    }
  }
  
  function validateAddress() {
    const regex = /^[0-9a-zA-Z]+$/;
    if (!regex.test(streetInput.value)) {
      errorMessages.push('Street address should contain only appropriate numeric, alphabet or alphanumeric characters.<br>');
      streetInput.value = '';
    }
    if (!regex.test(cityInput.value)) {
      errorMessages.push('City should contain only appropriate numeric, alphabet or alphanumeric characters.<br>');
      cityInput.value = '';
    }
    if (!regex.test(stateInput.value)) {
      errorMessages.push('State should contain only appropriate numeric, alphabet or alphanumeric characters.<br>');
      stateInput.value = '';
    }
    const zipcodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (!zipcodeRegex.test(zipcodeInput.value)) {
      errorMessages.push('Zipcode should contain only numeric characters with a valid format.<br>');
      zipcodeInput.value = '';
    }
  }
  
  function validateCheckboxes() {
    let count = 0;
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        count++;
      }
    });
    if (count < 2) {
      errorMessages.push('Please select at least two checkboxes.<br>');
    }
  }
  
  function validateRadioButtons() {
    let selected = false;
    radioButtons.forEach(function(radioButton) {
      if (radioButton.checked) {
        selected = true;
      }
    });
    if (!selected) {
      errorMessages.push('Please select a radio button option.<br>');
    }
  }
  
  function validateEmail() {
    const regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(emailInput.value)) {
      errorMessages.push('Email address should be in a valid format.<br>');
      emailInput.value = '';
    }
  }
  

// function displayErrorMessages() {
//   const errorMessageDiv = document.getElementById('error-messages');
//   if (errorMessages.length > 0) {
//     errorMessageDiv.innerHTML = errorMessages.join('<br>');
//     errorMessages.length = 0;
//   } else {
//     form.submit();
//   }
// }

function displayErrorMessages() {
  if (errorMessages.length > 0) {

    var errorMessage ="";
    errorMessage = errorMessages.join('\n');
    // if (confirm(errorMessage + '\n\nDo you want to correct the errors and resubmit the form?')) {
    //   errorMessages.length = 0;
    // }
    document.getElementById('error-messages').innerHTML = errorMessage;
    const db = document.querySelector('dialog');
    db.show();s
  } else {
    form.submit();
  }
}

function closedialog() {
  const db = document.querySelector('dialog');
  db.close();
}


// -----------------------------------------------------------
// AJAX JSON
// -----------------------------------------------------------

// Create an instance of XMLHttpRequest
var req = new XMLHttpRequest();


// Handle the response
 function getValuesZip () {
  if (req.status === 200 && req.readyState === 4) {
    // The response is stored in req.response
    var zipcodes  = JSON.parse(req.responseText).zipcodes;
    var zip = zipcodeInput.value;
    var city = "";
    var state = "";
    for(zipc in zipcodes){
      if(zipcodes[zipc].zip == zip){
        city = zipcodes[zipc].city;
        state = zipcodes[zipc].state;
      }
    }
    if(city == "" || state == ""){
      alert("Invalid Zipcode");
      document.getElementById("Zipcode").value="";
      document.getElementById("City").value="";
      document.getElementById("State").value="";
    }
    else{
      document.getElementById("City").value=city;
      document.getElementById("State").value=state;
    }
 }
}

function validateZip() {
  // Define the path to your local JSON file
var path = "./zip.json";


  const zipcode = zipcodeInput.value;
  req.open("GET", path, true);

// Set the response type to JSON
req.responseType = "application/json";
req.setRequestHeader("Accept", "application/json");



req.onreadystatechange= getValuesZip;
  // Send the request
  req.send(null);
}



// -----------------------------------------------------------
// Cookie Implementation
// -----------------------------------------------------------


// Cookie Implementation

// Function to get a cookie by name
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) {
    return parts.pop().split(";").shift();
  }
}

// Function to set a cookie
function setCookie(name, value, days) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (days * 60 * 1000)); // Set expiration time to 20 minutes from now
  document.cookie = name + "=" + value + ";expires=" + expires.toUTCString() + ";path=/";
}

// Function to prompt user for their name and set the cookie
function promptForName() {
  var name = prompt("Please enter your name:");

  if (name != null && name != "") {
    setCookie("username", name, 20);
    return name;
  } else {
    return promptForName(); // Prompt again if name is empty or null
  }
}

function prompt2() {
  var name = prompt("Please enter your name:");

  if (name != null && name != "") {
    setCookie("username", name, 20);
    updateVal();
  } else {
    return promptForName(); // Prompt again if name is empty or null
  }
}

function updateVal() {
  // Get the user's name from the cookie, or prompt for it if the cookie is not set
  var userName = getCookie("username");

  if (userName == null || userName == "") {
    userName = promptForName();
  }

  // Get the current hour to determine appropriate greeting
  var now = new Date();
  var currentHour = now.getHours();
  var greeting = "";

  if (currentHour >= 0 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  // Display the greeting with the user's name
  document.getElementById("greeting").innerHTML = greeting + " " + userName + ", welcome to the SWE642 Survey!";
}
updateVal();
