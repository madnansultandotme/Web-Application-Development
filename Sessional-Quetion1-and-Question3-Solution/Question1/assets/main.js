// Define an array to store applicants outside the class
let applicants = [];

class ApplicantManager {
    constructor(cnic, firstName, lastName) {
        this.cnic = cnic;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method to save applicant data
    saveData() {
        // Create applicant object
        let applicant = {
            cnic: this.cnic,
            firstName: this.firstName,
            lastName: this.lastName
        };

        // Add applicant object to the array
        applicants.push(applicant);

        // Clear input fields
        document.getElementById("cnic").value = "";
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";

        alert("Data saved successfully!");
    }
}

// Create an instance of the ApplicantManager class
const applicantManager = new ApplicantManager();

// Function to save applicant data
function saveData() {
    // Get input values
    let cnic = document.getElementById("cnic").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    // Update properties of applicantManager instance
    applicantManager.cnic = cnic;
    applicantManager.firstName = firstName;
    applicantManager.lastName = lastName;

    // Save data using method from the class
    applicantManager.saveData();
}


// Function to print applicant data
function printData() {
    // Sort applicants array based on last name
    applicants.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);

    // Save applicant data to sessionStorage or localStorage
    localStorage.setItem("applicants", JSON.stringify(applicants));

    // Redirect to registration page
    window.location.href = 'registeration.html';
}
