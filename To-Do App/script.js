let tasks = []

function displayTasks() {
    let input = "";

    for (let i = 0; i < tasks.length; i++) {
        input += "<li>" + tasks[i] + "<button onclick='removeTask(" + i + ")'></button></li>"
    }

    let display = document.getElementById("list")
    display.innerHTML = input
    
}