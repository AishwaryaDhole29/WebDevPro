document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  // Load tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => renderTask(task));

  // Add task on button click
  addTaskButton.addEventListener("click", () => {
    addTask();
  });

  // Add task on Enter key
  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = ""; // clear input
  }

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span class="task-text">${task.text}</span>
      <button class="delete-btn">Delete</button>
    `;

    const textSpan = li.querySelector(".task-text");
    const deleteBtn = li.querySelector(".delete-btn");

    // ✅ Toggle completion ONLY when clicking on task text
    textSpan.addEventListener("click", () => {
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    // ✅ Delete task ONLY when clicking delete button
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });

    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
