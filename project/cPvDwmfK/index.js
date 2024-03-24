// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

// Your web app's Firebase configuration. You will get this when you create a new Firebase project.
const appSettings = {
    // Add your Firebase configuration here
    // apiKey: "YOUR_API_KEY",
    // authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "https://learn-firebase-fb308-default-rtdb.asia-southeast1.firebasedatabase.app/",
    // projectId: "YOUR_PROJECT_ID",
    // storageBucket: "YOUR_STORAGE_BUCKET",
    // messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    // appId: "YOUR_APP_ID"
};

// Initialize Firebase app with the provided configuration
const app = initializeApp(appSettings);

// Get a reference to the Firebase Realtime Database
const database = getDatabase(app);

// Reference to the "items" location in the database
const itemsInDB = ref(database, "items");

// DOM elements
const inputFieldEl = document.getElementById("input-field");
const pushButtonEl = document.getElementById("push-button");
const shoppingListEl = document.getElementById("shopping-list");

// Event listener for the "Add to cart" button
pushButtonEl.addEventListener("click", function () {
    let inputValue = inputFieldEl.value; // Get the input value

    // Push the input value to the "items" location in the database
    push(itemsInDB, inputValue);

    // Clear the input field
    clearInputFieldEl();
});

// Event listener for changes in the "items" location in the database
onValue(itemsInDB, function (snapshot) {
    // Check if there are items in the database
    if (snapshot.exists()) {
        // Convert the snapshot values to an array
        let thingsArray = Object.entries(snapshot.val());

        // Clear the existing items in the shopping list
        clearShoppingList();

        // Loop through the items and add them to the shopping list
        for (let i = 0; i < thingsArray.length; i++) {
            let currentItem = thingsArray[i];
            appendItemToShoppingList(currentItem);
        }
    } else {
        shoppingListEl.innerHTML = "No items here ...yet";
    }
});

// Function to append item to the shopping list
function appendItemToShoppingList(item) {
    let itemID = item[0];
    let itemValue = item[1];

    let newEl = document.createElement("li");
    newEl.textContent = itemValue;

    // Add event listener to remove item on click
    newEl.addEventListener("click", function () {
        let exactLocationOfItemInDB = ref(database, `items/${itemID}`);
        remove(exactLocationOfItemInDB);
    });

    // Append the new item to the shopping list
    shoppingListEl.appendChild(newEl);
}

// Function to clear the shopping list
function clearShoppingList() {
    shoppingListEl.innerHTML = "";
}

// Function to clear the input field
function clearInputFieldEl() {
    inputFieldEl.value = "";
}
