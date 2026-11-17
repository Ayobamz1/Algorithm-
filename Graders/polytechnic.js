function calculateGrade(gpa) {
  if (gpa >= 3.5) {
    return "Distinction";
  } else if (gpa >= 3.0) {
    return "Upper Credit";
  } else if (gpa >= 2.5) {
    return "Lower Credit";
  } else if (gpa >= 2.0) {
    return "Pass";
  } else {
    return "Fail";
  }
}

let checkButton = document.getElementById("calculate-poly-gpa-btn");
let resultBox = document.getElementById("poly-result");
let resultText = document.getElementById("poly-gpa");

checkButton.addEventListener("click", function () {
  let course = document.getElementById("course-name").value;
  let unit = document.getElementById("course-unit").value;

  if (course === "" || unit === "") {
    resultText.innerHTML = "Please enter the course-name and unit";
    resultBox.style.display = "block";
    return;
  }

  let gpa = Number(unit);

  if (gpa < 0 || gpa > 4) {
    resultText.textContent = "Enter a GPA between 0 and 4.";
    resultBox.style.display = "block";
    return;
  }

  let result = calculateGrade(gpa);

  resultText.innerHTML = course + ": " + result;

  resultBox.style.display = "block";
});
