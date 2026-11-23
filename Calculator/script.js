let display = document.getElementById("current-display");

let numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        if (display.innerHTML === "0") {
            display.innerHTML = button.innerHTML;
        } else {
            display.innerHTML = display.innerHTML + button.innerHTML;
        }

    });
});

let clearAll = document.getElementById("clear");

clearAll.addEventListener("click", function() {
    display.innerText = 0;
});

let deleteLast = document.getElementById("delete");

deleteLast.addEventListener("click", function() {
        display.innerHTML = display.innerHTML.slice(0, -1) || "0";
});


