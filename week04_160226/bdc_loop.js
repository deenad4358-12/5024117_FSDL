let donors = [];

function addDonor() {

    let name = document.getElementById("name").value;
    let bloodGroup = document.getElementById("bloodGroup").value;

    if (name === "") {
        alert("Please enter name");
        return;
    }

    // Store donor in array
    donors.push({ name: name, bloodGroup: bloodGroup });

    displayDonors();
}

function displayDonors() {

    let list = document.getElementById("donorList");
    list.innerHTML = "";

    // LOOP USED HERE
    for (let i = 0; i < donors.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = donors[i].name + " - " + donors[i].bloodGroup;
        list.appendChild(li);
    }
}
