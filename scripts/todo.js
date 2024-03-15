const addTodo = async (formdata) => {
    try {
      const result = await fetch("http://localhost/todo-website/php/createTodo.php", {
        body: formdata,
        method: "POST",
      });
  
      return await result.json();
    } catch (error) {
      console.log(error);
    }
  };
  const addTododata = new FormData();
  addTododata.append("description", "this is my new todo");
  addTodo(addTododata).then((response) => {
    console.log(response);
  });
  