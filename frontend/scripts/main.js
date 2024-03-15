// sign-up function
const singupBtn = document.getElementById("signup-btn");

singupBtn.addEventListener("click", () => {
  const fullname = document.getElementById("fullname");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmpassword = document.getElementById("confirmpassword");

  if (password.value == confirmpassword.value) {
    let signupformdata = new FormData();
    signupformdata.append("name", fullname.value);
    signupformdata.append("username", username.value);
    signupformdata.append("email", email.value);
    signupformdata.append("password", password.value);
    signup(signupformdata);
  } else {
    alert("Passwords doesnt match");
  }
});


