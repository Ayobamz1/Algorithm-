let task = [];

function displayTasks() {
  let input = "";

  for (let i = 0; i < task.length; i++) {
    input +=
      "<li>" +
      task[i] +
      "<button onclick='removeTask(" +
      i +
      ")'></button></li>";
  }

  let display = document.getElementById("list");
  display.innerHTML = input;
}

function addTask() {
  let taskInput = document.getElementById("task").value;

  if (taskInput === "") {
    alert("Enter a task werey");
    return;
  }

  task.push(taskInput);
  document.getElementById("task").value = "";

  displayTasks();
}

function clearAll() {
  if (task = []) {
    let display = document.getElementById("list");
    display.innerHTML = "Your task will display here";
    return;
  }

  displayTasks();
}

function removeTask() {
    task.splice(i, 1);

    displayTasks();
}