// Create todo
const addTodo = async (formdata) => {
  try {
    const result = await fetch(
      "http://localhost/todo-website/backend/createTodo.php",
      {
        body: formdata,
        method: "POST",
      }
    );

    return await result.json();
  } catch (error) {
    console.log(error);
  }
};
// const addTododata = new FormData();
// addTododata.append("description", "this is my new todo");
// addTodo(addTododata).then((response) => {
//   console.log(response);
// });




// Read todo
const readTodo = async () => {
  try {
    const result = await fetch("http://localhost/todo-website/backend/readTodo.php", {
      method: "GET",
    });

    return await result.json();
  } catch (error) {
    console.log(error);
  }
};
// readTodo().then((response) => {
//   console.log(response);
// });




// Delete todo 
const deleteTodo = async (formdata) => {
  try {
    const result = await fetch(
      "http://localhost/todo-website/backend/deleteTodo.php",
      {
        body: formdata,
        method: "POST",
      }
    );

    return await result.json();
  } catch (error) {
    console.log(error);
  }
};
// const deleteTododata = new FormData();
// deleteTododata.append("todo-id", 15);
// deleteTodo(deleteTododata).then((response) => {
// console.log(response);
// });



// Update todo
const updateTodo = async (formdata) => {
  try {
    const result = await fetch(
      "http://localhost/todo-website/backend/updateTodo.php",
      {
        body: formdata,
        method: "POST",
      }
    );

    return await result.json();
  } catch (error) {
    console.log(error);
  }
};

// const updateTododata = new FormData();
// updateTododata.append("description", "this is a todo");
// updateTododata.append("todo-id", 8);
// updateTodo(updateTododata).then((response) => {
// console.log(response["status"]);
// });

