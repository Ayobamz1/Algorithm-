let display = document.getElementById("lyrics");

for (let i = 99; i >= 1; i--) {
  // display.innerHTML += `<p>${i}</p>`

  if (i === 1) {
    display.innerHTML += `<p>1 bottle of beer on the wall, 1 bottle of beer.</p>`;
  } else {
    display.innerHTML += `<p>${i} bottle of beer on the wall, ${i} bottle of beer.</p>`;
  }

  if (i - 1 === 1) {
    display.innerHTML +=
      "Take one down and pass it around, 1 bottle of beer on the wall.<br><br>";
  } else if (i - 1 === 0) {
    display.innerHTML +=
      "Take one down and pass it around, no more bottles of beer on the wall.<br><br>";
  } else {
    display.innerHTML += `<p>Take one down and pass it around, ${i - 1} bottle of beer.<br><br></p>`;
  }
}

display.innerHTML += `<p>No more bottles of beer on the wall, no more bottles of beer.</p>`;
display.innerHTML += `<p>Go to the store and buy some more, 99 bottles of beer on the wall.</p>`;
