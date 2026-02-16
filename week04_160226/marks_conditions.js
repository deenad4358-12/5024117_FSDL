function calculate() {

    let maths = Number(document.getElementById("maths").value);
    let physics = Number(document.getElementById("physics").value);
    let chemistry = Number(document.getElementById("chemistry").value);

    let total = maths + physics + chemistry;
    let average = total / 3;
    let percentage = (total / 300) * 100;

    let grade;
    let resultStatus;

    // Pass / Fail Condition
    if (maths < 35 || physics < 35 || chemistry < 35) {
        resultStatus = "Fail";
        grade = "No Grade";
    } 
    else {
        resultStatus = "Pass";

        // Grade Condition
        if (percentage >= 90) {
            grade = "A+";
        } 
        else if (percentage >= 75) {
            grade = "A";
        } 
        else if (percentage >= 60) {
            grade = "B";
        } 
        else if (percentage >= 50) {
            grade = "C";
        } 
        else {
            grade = "D";
        }
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average: " + average.toFixed(2) + "<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Result: " + resultStatus + "<br>" +
        "Grade: " + grade;
}
