// Get elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completed on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent li click
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = ""; // clear input
});
