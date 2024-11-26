var signUp = document.getElementById("sign up");
var logIn = document.getElementById("login");
var logInEmail = document.getElementById("login email");
var logInPassword = document.getElementById("login password");

signUp.addEventListener("click", function (e) {
  e.preventDefault();
  window.location = "./signup.html";
});
var arraySignUp = [];
if (localStorage.getItem("arraySignUp") !== null) {
  arraySignUp = JSON.parse(localStorage.getItem("arraySignUp"));
}
logIn.addEventListener("click", function () {
  if (LoginEmpt() == true) {
    document.getElementById("exsit").innerHTML =
      '<span class="text-danger my-2">All inputs is required</span>';
  }

  for (let i = 0; i < arraySignUp.length; i++) {
    if (
      arraySignUp[i].email.toLowerCase() == logInEmail.value.toLowerCase() &&
      arraySignUp[i].password.toLowerCase() == logInPassword.value.toLowerCase()
    ) {
      localStorage.setItem(
        "sessionUsername",
        JSON.stringify(arraySignUp[i].name)
      );

      console.log(localStorage.getItem("sessionUsername"));
      document.getElementById("exsit").innerHTML =
        '<span class="text-success my-2">Success</span>';
      window.location = "./home.html";
    } else {
      document.getElementById("exsit").innerHTML =
        '<span class="text-danger my-2">All inputs is required</span>';
    }
  }
});
function LoginEmpt() {
  if (logInEmail.value == "" || logInPassword.value == "") {
    return true;
  }
}
