// appointment.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".appointment-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Clear previous error messages
        clearErrorMessages();

        // Collect form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const services = document.getElementById("services").value;
        const date = document.getElementById("date").value;

        // Validate inputs
        const validationError = validateForm(name, email, phone, services, date);
        if (validationError) {
            showError(validationError.field, validationError.message);
            return; // Stop form submission if validation fails
        }

        // Display success message
        alert("Appointment booked successfully! You can download your appointment details.");

        // Reset the form fields after submission
        form.reset();
    });

    // Function to validate form inputs
    function validateForm(name, email, phone, services, date) {
        if (!name || name.length < 3) {
            return { field: 'nameError', message: "Please enter a valid full name (at least 3 characters)." };
        }
        if (!validateEmail(email)) {
            return { field: 'emailError', message: "Please enter a valid email address." };
        }
        if (!phone || phone.length < 10) {
            return { field: 'phoneError', message: "Please enter a valid phone number (at least 10 digits)." };
        }
        if (services === "Select Services") {
            return { field: 'servicesError', message: "Please select a service." };
        }
        if (!date) {
            return { field: 'dateError', message: "Please select a date." };
        }
        return null; // No errors
    }

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to show error message below the input field
    function showError(field, message) {
        document.getElementById(field).textContent = message;
    }

    // Function to clear previous error messages
    function clearErrorMessages() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = ''; // Clear the error message
        });
    }
});
