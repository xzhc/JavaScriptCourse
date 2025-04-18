const todoList = JSON.parse(localStorage.getItem("todoList")) || [
  { name: "wash dishes", dueDate: "2021-12-22" },
  { name: "wash dishes", dueDate: "2021-12-22" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `<div>${name}</div>
    <div>${dueDate}</div>
		<button onclick="todoList.splice(${i}, 1); renderTodoList(); localStorage.setItem('todoList', JSON.stringify(todoList));";  class="delete-button">Delete</button> `;
    todoListHTML += html;
  }
  // console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function addTodo() {
  const todoName = document.querySelector(".js-todo-input").value;
  const todoDueDate = document.querySelector(".js-todo-date").value;
  todoList.push({ name: todoName, dueDate: todoDueDate });
  localStorage.setItem("todoList", JSON.stringify(todoList));
  renderTodoList();
}
