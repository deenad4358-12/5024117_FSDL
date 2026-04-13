function showDetails() {

    // Store input values in variables
    let studentName = document.getElementById("name").value;
    let rollNumber = document.getElementById("rollno").value;

    // Display the values
    document.getElementById("output").innerHTML =
        "Name: " + studentName + "<br>" +
        "Roll Number: " + rollNumber;

    return false; // Prevent form from reloading page
}
