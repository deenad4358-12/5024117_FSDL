// Selecting elements
let input = document.getElementById("nameInput");
let button = document.getElementById("greetBtn");
let message = document.getElementById("message");

// Click Event
button.addEventListener("click", function() {
    let name = input.value;

    if (name === "") {
        message.innerHTML = "Please enter your name!";
        message.style.color = "red";
    } else {
        message.innerHTML = "Hello, " + name + " 👋";
        message.style.color = "green";
    }
});

// Keyup Event
input.addEventListener("keyup", function() {
    message.innerHTML = "";
});

// Mouseover Event
button.addEventListener("mouseover", function() {
    button.style.transform = "scale(1.1)";
});

// Mouseout Event
button.addEventListener("mouseout", function() {
    button.style.transform = "scale(1)";
});
