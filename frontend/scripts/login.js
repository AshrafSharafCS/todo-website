const login = async (formdata) => {
    try {
      const result = await fetch("http://localhost/todo-website/backend/login.php", {
        body: formdata,
        method: "POST",
      });
  
      return await result.json();
    } catch (error) {
      console.log(error);
    }
  };


  // login function

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", () => {
  window.location.href= "./frontend/pages/todo.html";
  const loginUsername = document.getElementById("login-username");
  const loginPassword = document.getElementById("login-password");

  let loginformdata = new FormData();
  loginformdata.append("email-username", loginUsername.value);
  loginformdata.append("password", loginPassword.value);
    login(loginformdata);
  window.location.href= "./frontend/pages/todo.html";

});