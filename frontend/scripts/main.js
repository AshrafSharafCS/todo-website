// const fullname = document.getElementById("fullname");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const confirmpassword = document.getElementById("confirmpassword");

const singupBtn = document.getElementById("signup-btn");



singupBtn.addEventListener("click", () => {

    const fullname = document.getElementById("fullname");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmpassword = document.getElementById("confirmpassword");


  if (password.value == confirmpassword.value) {
    let formdata = new FormData();
    formdata.append("name", fullname.value);
    formdata.append("username", username.value);
    formdata.append("email", email.value);
    formdata.append("password", password.value);
    
    
  } else {
    alert("Passwords doesnt match");
  }
});
