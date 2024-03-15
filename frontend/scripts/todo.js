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



