const passingMarks = 40;
const studentName = "Deena Davis";
let maths = 95;
let physics = 68;
let chemistry = 82;

// Calculate total and average
let totalMarks = maths + physics + chemistry;
let averageMarks = totalMarks / 3;

// Display student details
console.log("Student Name: " + studentName);
console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks);

// Check pass or fail
if (averageMarks >= passingMarks) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}
