document.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    const form = document.querySelector('form');

    // Add an event listener for the form's submit event
    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get values from input fields using placeholders to identify them
        const email = document.querySelector('input[placeholder="email"]').value;
        const password = document.querySelector('input[placeholder="password"]').value;

        // Create an object with the gathered data
        const formData = {
            email: email,
            password: password
        };

        // Send data to the backend
       await fetch('http://localhost:4000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
		// console.log("This data login", formData)
		.then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success (e.g., show a success message, redirect to another page, etc.)
        })
        // .then(data => {
        //     console.log('Success:', data);
        //     // Store the token in cookies
        //     document.cookie = `token=${data.token}; path=/; secure; HttpOnly; SameSite=Strict`;
        //     // Handle success (e.g., redirect to another page)
        // })
        .catch(error => {
            console.error('Error:', error);
            // Handle error (e.g., show an error message)
        });
    });
});