function check() {
  let birthDate = document.getElementById("input").value;
  let displayArea = document.getElementById("display");

  if (birthDate == "") {
    alert("input should not be empty");
  }

  let currentDate = new Date().getFullYear();
  console.log(currentDate);

  let age = currentYear - Number(birthYear);

  if (age >= 18) {
    displayArea.innerHTML = `<p>You can vote</p>`;
  } else if (age < 18) {
    displayArea.innerHTML = `<p>You are not eligible to vote, you still have ${18 - age} years to vote<p>`;
  }
}