const signup = async (formdata) => {
  try {
    const result = await fetch("http://localhost/todo-website/php/signup.php", {
      body: formdata,
      method: "POST",
    });

    return await result.json();
  } catch (error) {
    console.log(error);
  }
};
const signupdata = new FormData();
signupdata.append("name", "Bob Bob");
signupdata.append("username", "i");
signupdata.append("email", "i@gmail.com");
signupdata.append("password", "bob123");
// signup(signupdata);




const login = async (formdata) => {
  try {
    const result = await fetch("http://localhost/todo-website/php/login.php", {
      body: formdata,
      method: "POST",
    });

    return await result.json();
  } catch (error) {
    console.log(error);
  }
};
const logindata = new FormData();
logindata.append("email-username", "i");
logindata.append("password", "bob123");
// login(logindata).then((response) =>{
//   console.log(response);
//   });