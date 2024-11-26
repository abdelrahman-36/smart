var signUp = document.getElementById("sign in");
var userName = document.getElementById("user name");
var userEmail = document.getElementById("user email");
var userPassword = document.getElementById("user password");
var btnSignUp = document.getElementById("btn signup");
var arraySignUp = [];
if (localStorage.getItem("arraySignUp") != null) {
  arraySignUp = JSON.parse(localStorage.getItem("arraySignUp"));
} else {
  arraySignUp = [];
}
signUp.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hello");
  window.location = "./index.html";
});

btnSignUp.addEventListener("click", function () {
  signUpEmail();
});

function checkForm() {
  if (
    userName.value == "" ||
    userEmail.value == "" ||
    userPassword.value == ""
  ) {
    return false;
  }
}

function signUpEmail() {
  var email = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };
  if (arraySignUp==[]) {
    arraySignUp.push(email);
    localStorage.setItem("arraySignUp", JSON.stringify(arraySignUp));
  }
  if (checkForm() == false) {
    document.getElementById("exsit").innerHTML =
      '<span class="text-danger my-2">All inputs is required</span>';
  } else {
    if (isEmailExist() == false) {
      document.getElementById("exsit").innerHTML =
        '<span class="text-danger my-2">this email is existing</span>';
    } else {
      document.getElementById("exsit").innerHTML =
        '<span class="text-success my-2">Success</span>';

      arraySignUp.push(email);
      localStorage.setItem("arraySignUp", JSON.stringify(arraySignUp));

      
    }
  }
}

function isEmailExist() {
  for (i = 0; i < arraySignUp.length; i++) {
    if (arraySignUp[i].email.toLowerCase() == userEmail.value.toLowerCase()) {
      return false;
    }
  }
}
