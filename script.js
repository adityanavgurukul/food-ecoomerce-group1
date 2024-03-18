const main = document.getElementById("main");
const toggleForm = () => {
  const container = document.querySelector('.container');
  container.classList.toggle('panel');
};
document.addEventListener("DOMContentLoaded", function() {
  const registerButton = document.getElementById("registerButton");

  registerButton.addEventListener("click", function() {
    if (main.style.display === "none") {
      main.style.display = "block";
    } else {
      main.style.display = "none";
    }
  });
});
function button_signup() {
  let gmail = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (gmail.trim() === "" || password.trim() === "") {
    alert("Please enter email and password");
    return;
  }

  localStorage.setItem("gmail", gmail);
  localStorage.setItem("password", password); 
  alert("Sign up completed");
  window.location.href = "index.html";
}

function login() {
  let gmail = document.getElementById("email-2").value;
  let password = document.getElementById("password-2").value;
  let oldemail = localStorage.getItem("gmail");
  let oldpassword = localStorage.getItem('password'); 

  if (gmail.trim() === "" || password.trim() === "") {
    alert("Please enter email and password");
    return;
  }

  if (gmail === oldemail && password === oldpassword) {
    alert("Login successful");
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password");
  }
}
