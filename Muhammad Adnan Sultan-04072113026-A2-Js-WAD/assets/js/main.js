console.log("Hi Its Choudhary Adnan");
// Define a class to handle form submission and data display
class FormHandler {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form data
        const formData = new FormData(this.form);

        // Create an object to store form data
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Open a new window to display the form data
        const newWindow = window.open('', '_blank');
        newWindow.document.write('<html><head><title>Form Data</title></head><body><h2>Submitted Form Data</h2>');
        
        // Display the form data in the new window
        newWindow.document.write('<ul>');
        for (const key in formDataObject) {
            newWindow.document.write(`<li><strong>${key}:</strong> ${formDataObject[key]}</li>`);
        }
        newWindow.document.write('</ul>');
        newWindow.document.write('</body></html>');
    }
}

// Instantiate the FormHandler class for the contact form
new FormHandler('contactForm');
