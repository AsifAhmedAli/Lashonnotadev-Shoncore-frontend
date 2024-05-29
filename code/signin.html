document.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    const form = document.querySelector('form');

    // Add an event listener for the form's submit event
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get values from input fields using placeholders to identify them
        const name = document.querySelector('input[placeholder="Name"]').value;
        const email = document.querySelector('input[placeholder="Email"]').value;
        const password = document.querySelector('input[placeholder="Password"]').value;
        const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;

        // Create an object with the gathered data
        const formData = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };
        // console.log("THIS IS FRONR" , formData)
        // Send data to the backend
        fetch('http://localhost:4000/api/v1/registers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success (e.g., show a success message, redirect to another page, etc.)
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error (e.g., show an error message)
        });
    });
});