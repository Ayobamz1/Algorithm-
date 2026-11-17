function calculateGrade(score) {
  if (score >= 75) {
    return {
      grade: "A1",
      remark: "Excellent",
    };
  } else if (score >= 70) {
    return {
      grade: "B2",
      remark: "Very Good",
    };
  } else if (score >= 65) {
    return {
      grade: "B3",
      remark: "Good",
    };
  } else if (score >= 60) {
    return {
      grade: "C4",
      remark: "Credit",
    };
  } else if (score >= 55) {
    return {
      grade: "C5",
      remark: "Credit",
    };
  } else if (score >= 50) {
    return {
      grade: "C6",
      remark: "Credit",
    };
  } else if (score >= 45) {
    return {
      grade: "D7",
      remark: "Pass",
    };
  } else if (score >= 40) {
    return {
      grade: "E8",
      remark: "Pass",
    };
  } else {
    return {
      grade: "F9",
      remark: "Fail",
    };
  }
}

let checkButton = document.getElementById("check-grade-btn");
let resultBox = document.getElementById("secondary-result");
let resultText = document.getElementById("secondary-result-text");

checkButton.addEventListener("click", function () {
  let subject = document.getElementById("subject-name").value.trim();
  let scoreInput = document.getElementById("subject-score").value;

  if (subject === "" || scoreInput === "") {
    resultText.textContent = "Please enter a subject and score.";
    resultBox.style.display = "block";
    return;
  }

  let score = Number(scoreInput);

  if (score < 0 || score > 100) {
    resultText.textContent = "Enter a score between 0 and 100.";
    resultBox.style.display = "block";
    return;
  }

  let result = calculateGrade(score);

  resultText.textContent =
    subject + ": " + score + "% — " + result.grade + " (" + result.remark + ")";

  resultBox.style.display = "block";
});
