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
        try {
            const response = await fetch('http://localhost:4000/api/v1/login', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log('Response:', data);
            
            // Save token to localStorage
            if (data.success == true) {
                localStorage.setItem('token', data.authToken);
                //redirect to home page
                const alertContainer = document.getElementById('alert-container');
                if (alertContainer) {
                    const alertHtml = `
                        <div class="alert alert-success alert-container alert-dismissible fade show" role="alert">
                            ${`Login Successful`}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    `;
                    alertContainer.innerHTML = alertHtml;
                }
                window.location.href = './index.html';
            } else {
                const alertContainer = document.getElementById('alert-container');
                if (alertContainer) {
                    const alertHtml = `
                        <div class="alert alert-danger alert-container alert-dismissible fade show" role="alert">
                            ${data.message}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    `;
                    alertContainer.innerHTML = alertHtml;
                } else {
                    alert(data.message); // Fallback for non-Bootstrap environments
                }
            }
            
            // Optionally, redirect or perform other actions upon successful login
            // window.location.href = '/dashboard'; // Example redirect

        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show an error message)
        }
    });
})