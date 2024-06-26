document.addEventListener('DOMContentLoaded', function () {
    const authContainer = document.getElementById('auth-container');
    const authButton = document.getElementById('auth-button');
    const alertContainer = document.getElementById('alert-container');

    function updateAuthContainer() {
        const token = localStorage.getItem('token');
        
        if (token) {
            // User is logged in, show SIGNOUT button
            authButton.textContent = 'SIGNOUT';
            authButton.removeAttribute('data-bs-toggle');
            authButton.removeAttribute('href');
            authButton.setAttribute('href', '#');
            authButton.setAttribute('id', 'signout-button');

            authButton.addEventListener('click', function () {
                localStorage.removeItem('token');
                showAlert('You have successfully signed out.');
                setTimeout(() => {
                    location.reload(); // Reload the page to reflect the change
                }, 2000); // Adjust the delay as needed
            });
        } else {
            // User is not logged in, show LOGIN button
            authButton.textContent = 'LOGIN';
            authButton.setAttribute('Login.html');
            authButton.setAttribute('Login.html');
        }
    }

    function showAlert(message) {
        const alertElement = document.createElement('div');
        alertElement.className = 'alert alert-success';
        alertElement.role = 'alert';
        alertElement.textContent = message;
        alertContainer.appendChild(alertElement);

        // Automatically remove the alert after a certain time
        setTimeout(() => {
            alertElement.remove();
        }, 3000); // Adjust the duration as needed
    }

    updateAuthContainer();
});