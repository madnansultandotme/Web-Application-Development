// Define an array to store applicant data
let applicants = [];

// Function to save applicant data
function saveData() {
    // Get input values
    let cnic = document.getElementById("cnic").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    

    // Create applicant object
    let applicant = {
        firstName: firstName,
        lastName: lastName,
        cnic: cnic
    };

    // Add applicant object to the array
    applicants.push(applicant);

    // Clear input fields
    document.getElementById("cnic").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    

    alert("Data saved successfully!");
}

// Function to print applicant data
function printData() {
    // Sort applicants array based on last name
    applicants.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);

    // Display applicant data
    let output = "<h2>Applicant Data</h2>";
    output += "<table>";
    output += "<tr><th>Cnic</th><th>First Name</th><th>Last Name</th></tr>";
    applicants.forEach(applicant => {
        output += "<tr>";
        output += "<td>" + applicant.cnic + "</td>";
        output += "<td>" + applicant.firstName + "</td>";
        output += "<td>" + applicant.lastName + "</td>";
        output += "</tr>";
    });
    output += "</table>";

    // Display output on the page
    document.getElementById("output").innerHTML = output;
}
