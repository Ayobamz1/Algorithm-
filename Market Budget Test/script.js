let budgetInput = document.getElementById("budget");

let setBudgetBtn = document.getElementById("setBudgetBtn");

let totalBudget = document.getElementById("totalBudget");

let totalExpenses = document.getElementById("totalExpenses");

let remainingBalance = document.getElementById("remainingBalance");

let itemName = document.getElementById("itemName");

let quantity = document.getElementById("quantity");

let price = document.getElementById("price");

let addItemBtn = document.getElementById("addItemBtn");

let shoppingList = document.getElementById("shoppingList");

let budgetWarning = document.getElementById("budgetWarning");

let budget = 0;

let itemNames = JSON.parse(localStorage.getItem("itemNames")) || [];
let itemQuantities = JSON.parse(localStorage.getItem("itemQuantities")) || [];
let itemPrices = JSON.parse(localStorage.getItem("itemPrices")) || [];
let itemTotals = JSON.parse(localStorage.getItem("itemTotals")) || [];

function addItem() {
  let name = itemName.value;
  let qty = Number(quantity.value);
  let itemPrice = Number(price.value);

  let total = qty * itemPrice;

  if (name === "") {
    alert("Input an item here");
    return;
  } else if (qty <= 0 || qty === 0) {
    alert("The quantity can not be less than or equal to zero");
    return;
  } else if (itemPrice <= 0) {
    alert("The price can not be less than or equal to zero");
    return;
  }

  let currentExpenses = 0;

  for (let i = 0; i < itemTotals.length; i++) {
    currentExpenses += itemTotals[i];
  }

  if (currentExpenses + total > budget) {
    alert("This item will exceed your budget!");
    return;
  }

  itemNames.push(name);
  itemQuantities.push(qty);
  itemPrices.push(itemPrice);
  itemTotals.push(total);

  saveItems();

  displayItems();

  calculateExpenses();

  itemName.value = "";
  quantity.value = "";
  price.value = "";
}

function displayItems() {
  shoppingList.innerHTML = "";

  if (itemNames.length === 0) {
    shoppingList.innerHTML = "No items added yet.";
    return;
  }

  for (let i = 0; i < itemNames.length; i++) {
    shoppingList.innerHTML += `
      <div class="item-row">
        <span>${itemNames[i]}</span>
        <span>${itemQuantities[i]}</span>
        <span>₦${itemPrices[i]}</span>
        <span>₦${itemTotals[i]}</span>
        <button onclick="deleteItem(${i})">Delete</button>
      </div>
    `;
  }
}

function deleteItem(index) {
  let check = confirm("Are you sure you want to delete?");

  if (check) {
    itemNames.splice(index, 1);
    itemQuantities.splice(index, 1);
    itemPrices.splice(index, 1);
    itemTotals.splice(index, 1);

    saveItems();
    displayItems();
    calculateExpenses();
  } else {
    return;
  }
}

function calculateExpenses() {
  let expenses = 0;

  for (let i = 0; i < itemTotals.length; i++) {
    expenses += itemTotals[i];
  }

  totalExpenses.innerHTML = "₦" + expenses;

  let balance = budget - expenses;

  remainingBalance.innerHTML = "₦" + balance;

  if (expenses > budget) {
    budgetWarning.innerHTML = "Warning! You have exceeded your budget.";
  } else {
    budgetWarning.innerHTML = "";
  }
}

function setBudget() {
  if (budgetInput.value === "" || Number(budgetInput.value) <= 0) {
    alert("Please enter a valid budget");
    return;
  }

  budget = Number(budgetInput.value);

  totalBudget.innerHTML = "₦" + budget;

  calculateExpenses();
}

function clearAllItems() {
  if (itemNames.length === 0) {
    alert("There are no items to delete werey");
    return;
  }

  let check = confirm("Are you sure you want to clear all items?");

  if (check) {
    itemNames = [];
    itemQuantities = [];
    itemPrices = [];
    itemTotals = [];

    saveItems();
    displayItems();
    calculateExpenses();
  }
}

function saveItems() {
  localStorage.setItem("itemNames", JSON.stringify(itemNames));
  localStorage.setItem("itemQuantities", JSON.stringify(itemQuantities));
  localStorage.setItem("itemPrices", JSON.stringify(itemPrices));
  localStorage.setItem("itemTotals", JSON.stringify(itemTotals));
}