let task = [];

function displayTasks() {
  let input = "";

  for (let i = 0; i < task.length; i++) {
    input +=
      "<li>" +
      task[i] +
      "<button onclick='removeTask(" +
      i +
      ")'>X</button></li>";
  }

  let display = document.getElementById("list");
  display.innerHTML = input;
}

function addTask() {
  let taskInput = document.getElementById("task").value;

  if (taskInput.trim() === "") {
    alert("Enter a task werey");
    return;
  }

  task.push(taskInput);
  document.getElementById("task").value = "";

  saveTask();
  displayTasks();
}

function clearAll() {
  task = [];

  saveTask();
  displayTasks();
}

function removeTask(i) {
  let check = confirm("Are you sure you wanna delete this");

  if (check) {
    task.splice(i, 1);
    saveTask();
    displayTasks();
  } else {
    return;
  }
}

function saveTask() {
  localStorage.setItem("task", JSON.stringify(task));
}

function loadTask() {
  let saved = localStorage.getItem("task");

  if (saved !== null) {
    task = JSON.parse(saved);
  }
}

loadTask();
displayTasks();
