var userName = JSON.parse(localStorage.getItem("sessionUsername"));
var logOUt = document.getElementById("log out");

document.getElementById("welcome").innerHTML = "welcome" + userName;
logOUt.addEventListener("click", function () {
  localStorage.removeItem("sessionUsername");
  window.location = "./index.html";
});
