// Declare variables
let course = "Web Development";
const year = 2026;

function showMessage() {
    let username = document.getElementById("username").value;

    document.getElementById("output").innerHTML =
        "Hello " + username + "<br>" +
        "Course: " + course + "<br>" +
        "Year: " + year;
}
