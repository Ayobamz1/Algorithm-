function calculateGrade(gpa) {
  if (gpa >= 4.5) {
    return "First Class";
  } else if (gpa >= 3.5) {
    return "Second Class Upper";
  } else if (gpa >= 2.4) {
    return "Second Class Lower";
  } else if (gpa >= 1.5) {
    return "Third Class";
  } else if (gpa >= 1.0) {
    return "Pass";
  } else {
    return "Fail";
  }
}

let checkButton = document.getElementById("calculate-gpa-btn");
let resultBox = document.getElementById("university-result");
let resultText = document.getElementById("university-gpa");

checkButton.addEventListener("click", function () {
  let gpaInput = document.getElementById("student-gpa").value;

  if (gpaInput === "") {
    resultText.textContent = "Please enter your GPA.";
    resultBox.style.display = "block";
    return;
  }

  let gpa = Number(gpaInput);

  if (gpa < 0 || gpa > 5) {
    resultText.textContent = "Enter a GPA between 0 and 5.";
    resultBox.style.display = "block";
    return;
  }

  let result = calculateGrade(gpa);

  resultText.textContent = result;

  resultBox.style.display = "block";
});
