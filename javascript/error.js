document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  // accessing the selectors
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');
  let country = document.getElementById("country").value;
  let checkbox = document.querySelector('input[name="check1"]:checked');

  // accessing error elements
  let usernameError = document.getElementById("usernameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let confirmPasswordError = document.getElementById("confirmPasswordError");
  let formMessage = document.getElementById("formMessage");
  let genderError = document.getElementById("genderError");
  let countryError = document.getElementById("countryError");
  let checkboxError = document.getElementById("checkboxError");

  // by default showing them empty
  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  formMessage.textContent = "";
    genderError.textContent = "";
    countryError.textContent = "";
    checkboxError.textContent = "";


  // validations

  // validation for username
  if (username === "") {
    usernameError.textContent = "Username Required";
    isValid = false;
  } else if (username.length < 3) {
    usernameError.textContent = "Username must be more than 3 characters";
    isValid = false;
  }

  // validation for email

  if (email === "") {
    emailError.textContent = "Email is Required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.textContent = "Enter valid Email";
    isValid = false;
  }

  // validation for password

  // <!-- ^(?=.*[a-z]): Ensures at least one lowercase letter. -->
  // <!-- (?=.*[A-Z]): Ensures at least one uppercase letter. -->
  // <!-- (?=.*\d): Ensures at least one digit. -->
  // <!-- (?=.*[\W_]): Ensures at least one special character (non-word character). -->
  // <!-- .{8,}$: Ensures the password is at least 8 characters long. -->

  const passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_]).{8,}$/;

  if (password === "") {
    passwordError.textContent = "Password is Required";
    isValid = false;
  } else if (!passwordPattern.test(password)) {
    passwordError.textContent =
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    isValid = false;
  }
  // validation for confirm password
  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Confirm Password is Required";
    isValid = false;
  } else if (confirmPassword != password) {
    confirmPasswordError.textContent = "Passwords do not match";
    isValid = false;
  }

  if (isValid) {
    formMessage.textContent = "Form Submitted Successfully";
    formMessage.style.color = "green";
    console.log("Form Data", { username, email, password });

    document.getElementById("signupForm").reset();
  }
  if (!gender) {
    genderError.textContent = "Please select your gender";
    isValid = false;
  } else{
    genderError.textContent = "";
    isValid = true;

      }
    if (country === "Select") {
    countryError.textContent = "Please select your country";
    isValid = false;

  }  else{
    countryError.textContent = "";
    isValid = true;
  }   
    if (!checkbox) {
    checkboxError.textContent = "You must agree to the terms and conditions";
    isValid = false;
  }else{
    checkboxError.textContent = "";
    isValid = true;
  }
});