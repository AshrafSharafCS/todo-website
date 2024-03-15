// view todos 

const todoContainer=document.getElementById("todo-container");
todos=readTodo();

todos.then((element)=>{
// todoContainer.innerHTML="";

element.array.forEach(element => {
  todoContainer.innerHTML+= `<div class="flex row todo-element">
  <h3>descriptasdsadion</h3>
  <button  id="edit-todo">Edit todo</button>
  <button  id="delete-todo">Delete todo</button>
</div>`;

  
});
});