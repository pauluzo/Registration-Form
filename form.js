document.getElementById("button").addEventListener("click", (event) => {
  event.preventDefault();
  validateNames();
})

function validateNames() {
  let firstname = document.getElementById("first-name").value;
  let lastname = document.getElementById("last-name").value;
  if(firstname === "" || firstname.length <= 1) {
    alert('First name must be filled correctly!');
    return false;
  } else {
    console.log(firstname);
  }
  if(lastname === "" || lastname  <= 1) {
    alert('Last name must be filled correctly!');
    return false;
  } else {
    console.log(lastname);
    validateEmail();
  }
  // only call this function after the name validation above has completed
}

function validateEmail() {
  let email = document.getElementById("email").value;
  var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if(email.match(format)) {
    console.log(email);
    validatePassword();
  } else {
    alert('The email address you entered is not valid!');
    return false;
  }
}

function validatePassword() {
  let password = document.getElementById("password").value;
  let rePassword = document.getElementById("re-password").value;

  if(password.length >= 8 && password.length <= 16 && password === rePassword) {
    console.log('The password is ${password}');
    console.log('The re-entered password is ${rePassword}');
  } else if (password.length < 8 || password.length > 16) {
    alert('You have entered an invalid password. Must be between 8 - 16 characters long.');
    return false;
  } else if(password != rePassword) {
    alert('The re-entered password does not match your provided password. Please review.');
    return false;
  }
}