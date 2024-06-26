// document.addEventListener('DOMContentLoaded', function () {
//     // Select the form element
//     const form = document.querySelector('form');

//     // Add an event listener for the form's submit event
//     form.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Get values from input fields using placeholders to identify them
//         const name = document.querySelector('input[placeholder="Name"]').value;
//         const email = document.querySelector('input[placeholder="Email"]').value;
//         const password = document.querySelector('input[placeholder="Password"]').value;
//         const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;

//         // Create an object with the gathered data
//         const formData = {
//             name: name,
//             email: email,
//             password: password,
//             confirmPassword: confirmPassword
//         };
//         // console.log("THIS IS FRONR" , formData)
//         // Send data to the backend
//         fetch('http://localhost:4000/api/v1/registers', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         })
    
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//             // Handle success (e.g., show a success message, redirect to another page, etc.)
//             window.location.href = './Login.html';
//         })

//         .catch(error => {
//             console.error('Error:', error);
//             // Handle error (e.g., show an error message)
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Select the form element
//     const form = document.querySelector('form');

//     // Add an event listener for the form's submit event
//     form.addEventListener('submit', async function (event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Get values from input fields using placeholders to identify them
//         const name = document.querySelector('input[placeholder="Name"]').value;
//         const email = document.querySelector('input[placeholder="Email"]').value;
//         const password = document.querySelector('input[placeholder="Password"]').value;
//         const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;

//         // Create an object with the gathered data
//         const formData = {
//             name: name,
//             email: email,
//             password: password,
//             confirmPassword: confirmPassword
//         };

//         try {
//             // Send data to the backend
//             const response = await fetch('http://localhost:4000/api/v1/registers', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             const data = await response.json();
//             console.log('Success:', data);

//             if (data.success == true) {
//                 // Handle success (e.g., show a success message, redirect to another page, etc.)
//                 const alertContainer = document.getElementById('alert-container');
//                 if (alertContainer) {
//                     const alertHtml = `
//                         <div class="alert alert-success alert-container alert-dismissible fade show" role="alert">
//                             ${`Signin Successful`}
//                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                     `;
//                     alertContainer.innerHTML = alertHtml;
//                 }
//                 window.location.href = './Login.html';
//             } else {
//                 const alertContainer = document.getElementById('alert-container');
//                 if (alertContainer) {
//                     const alertHtml = `
//                         <div class="alert alert-danger alert-container alert-dismissible fade show" role="alert">
//                             ${data.message || data.message == undefined && data.errors[1].msg}
//                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                     `;
//                     alertContainer.innerHTML = alertHtml;
//                 } else {
//                     alert(data.message); // Fallback for non-Bootstrap environments
//                 }
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             // Handle error (e.g., show an error message)
//         }
//     });
// });
// document.addEventListener('DOMContentLoaded', function () {
//     // Select the form element
//     const form = document.querySelector('form');

//     // Add an event listener for the form's submit event
//     form.addEventListener('submit', async function (event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Get values from input fields using placeholders to identify them
//         const name = document.querySelector('input[placeholder="Name"]').value;
//         const email = document.querySelector('input[placeholder="Email"]').value;
//         const password = document.querySelector('input[placeholder="Password"]').value;
//         const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;

//         // Create an object with the gathered data
//         const formData = {
//             name: name,
//             email: email,
//             password: password,
//             confirmPassword: confirmPassword
//         };

//         try {
//             // Send data to the backend
//             const response = await fetch('http://localhost:4000/api/v1/registers', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             const data = await response.json();
//             console.log('Success:', data);

//             if (data.success == true) {
//                 // Handle success (e.g., show a success message, redirect to another page, etc.)
//                 const alertContainer = document.getElementById('alert-container');
//                 if (alertContainer) {
//                     const alertHtml = `
//                         <div class="alert alert-success alert-container alert-dismissible fade show" role="alert">
//                             ${`Signin Successful`}
//                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                     `;
//                     alertContainer.innerHTML = alertHtml;
//                 }
//                 window.location.href = './Login.html';
//             } else {
//                 const alertContainer = document.getElementById('alert-container');
//                 if (alertContainer) {
//                     let errorMessages = '';
//                     if (data.errors && data.errors.length > 1) {
//                         errorMessages = data.errors
//                             .map((error, index) => `${index + 1}. ${error.msg}`)
//                             .join('<br>');
//                     } 
//                     // const errorMessages = data.errors.map((error, index) => `${index + 1}. ${error.msg}`).join('<br>');
//                     const alertHtml = `
//                         <div class="alert alert-danger alert-container alert-dismissible fade show" role="alert">
//                             ${ data.message || errorMessages }
                           
//                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                     `;
//                     alertContainer.innerHTML = alertHtml;
//                 } else {
//                     const errorMessages = data.errors.map(error => error.msg).join('\n');
//                     alert(errorMessages); // Fallback for non-Bootstrap environments
//                 }
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             // Handle error (e.g., show an error message)
//             const alertContainer = document.getElementById('alert-container');
//             if (alertContainer) {
//                 const alertHtml = `
//                     <div class="alert alert-danger alert-container alert-dismissible fade show" role="alert">
//                         ${error.message}
//                         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                 `;
//                 alertContainer.innerHTML = alertHtml;
//             } else {
//                 alert(error.message); // Fallback for non-Bootstrap environments
//             }
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    const form = document.querySelector('form');

    // Add an event listener for the form's submit event
    form.addEventListener('submit', async function (event) {
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

        try {
            // Send data to the backend
            const response = await fetch('http://localhost:4000/api/v1/registers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log('Success:', data);

            if (data.success === true) {
                // Handle success (e.g., show a success message, redirect to another page, etc.)
                const alertContainer = document.getElementById('alert-container');
                if (alertContainer) {
                    const alertHtml = `
                        <div class="alert alert-success alert-container alert-dismissible fade show" role="alert">
                            ${`Signin Successful`}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    `;
                    alertContainer.innerHTML = alertHtml;
                }
                window.location.href = './Login.html';
            } else {
                const alertContainer = document.getElementById('alert-container');
                if (alertContainer) {
                    let errorMessages = '';

                    if (data.errors && data.errors.length > 0) {
                        errorMessages = data.errors
                            .map((error, index) => `${index + 1}. ${error.msg}`)
                            .join('<br>');
                    } else {
                        errorMessages = data.message || 'An unknown error occurred.';
                    }

                    const alertHtml = `
                        <div class="alert alert-danger alert-container alert-dismissible fade show" role="alert">
                            ${errorMessages}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    `;
                    alertContainer.innerHTML = alertHtml;
                } else {
                    const errorMessages = data.errors ? data.errors.map(error => error.msg).join('\n') : data.message || 'An unknown error occurred.';
                    alert(errorMessages); // Fallback for non-Bootstrap environments
                }
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show an error message)
            const alertContainer = document.getElementById('alert-container');
            if (alertContainer) {
                const alertHtml = `
                    <div class="alert alert-danger alert-container alert-dismissible fade show" role="alert">
                        ${error.message}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                `;
                alertContainer.innerHTML = alertHtml;
            } else {
                alert(error.message); // Fallback for non-Bootstrap environments
            }
        }
    });
});
