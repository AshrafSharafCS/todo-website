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
  const logindata = new FormData();
  logindata.append("email-username", "i");
  logindata.append("password", "bob123");
  // login(logindata).then((response) =>{
  //   console.log(response);
  //   });