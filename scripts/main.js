
const signup = async (formdata) => {
    try {
      const result = await fetch("http://localhost/todo-website/php/signup.php", {
        body: formdata,
        method: "POST"
      });
  
      return await result.json();
  
    } catch (error) {
      console.log(error);
    }
  };


