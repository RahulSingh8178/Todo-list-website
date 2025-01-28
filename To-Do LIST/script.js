document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const todoList = document.getElementById("todo-list");
    const searchInput = document.getElementById("search");
  
    // Add Task
    addTaskButton.addEventListener("click", () => {
      const taskValue = taskInput.value.trim();
      if (taskValue === "") return alert("Task cannot be empty!");
  
      createTask(taskValue);
      taskInput.value = "";
    });
  
    // Create Task Element
    function createTask(taskValue) {
      const listItem = document.createElement("li");
      const taskText = document.createElement("span");
      taskText.className = "task-text";
      taskText.textContent = taskValue;
  
      const editButton = document.createElement("button");
      editButton.className = "edit";
      editButton.textContent = "EDIT";
  
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete";
      deleteButton.textContent = "️DELETE";
  
      listItem.appendChild(taskText);
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
  
      todoList.appendChild(listItem);
  
      // Edit Task
      editButton.addEventListener("click", () => {
        const newTaskValue = prompt("Edit your task:", taskText.textContent);
        if (newTaskValue !== null) taskText.textContent = newTaskValue.trim();
      });
  
      // Delete Task
      deleteButton.addEventListener("click", () => {
        todoList.removeChild(listItem);
      });
    }
  
    // Search Tasks
    searchInput.addEventListener("input", (e) => {
      const searchValue = e.target.value.toLowerCase();
      const tasks = document.querySelectorAll(".task-text");
  
      tasks.forEach(task => {
        const taskParent = task.parentElement;
        if (task.textContent.toLowerCase().includes(searchValue)) {
          taskParent.style.display = "flex";
        } else {
          taskParent.style.display = "none";
        }
      });
    });
  });
  