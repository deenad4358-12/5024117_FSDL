// Creating Class
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateGrade() {
        if (this.marks >= 90) {
            return "A Grade";
        } else if (this.marks >= 75) {
            return "B Grade";
        } else if (this.marks >= 50) {
            return "C Grade";
        } else {
            return "Fail";
        }
    }

    getResult() {
        return "Name: " + this.name + 
               "<br>Marks: " + this.marks + 
               "<br>Grade: " + this.calculateGrade();
    }
}

// Function called from HTML
function createStudent() {

    let name = document.getElementById("name").value;
    let marks = parseInt(document.getElementById("marks").value);

    if (name === "" || isNaN(marks)) {
        document.getElementById("result").innerHTML = 
        "Please enter valid details!";
        return;
    }

    // Creating Object
    let student1 = new Student(name, marks);

    // Display Result
    document.getElementById("result").innerHTML = student1.getResult();
}
