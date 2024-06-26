// Function to create a product card HTML
function createProductCard(product) {
    // Check if the product name is null or undefined
    const name = product.Name || 'Unknown Product';

    return `
        <div class="col-lg-3 col-6 mt-3 mastercardshow">
            <div class="containerhh mx-0 mb-3">
                <div class="linesetting"></div>
                <button type="button" class="btn add-to-cart" data-product='${JSON.stringify(product)}' >ADD</button>
                <img src="${product.Image.url}" alt="${name}">
                <div class="linesettingsecond"></div>
                <div class="textcardcart">
                    <h5>${name}</h5>
                </div>
            </div>
            <div class="cardcontentghome">
                <div class="py-1 innercardhom">
                    <p class="mb-0">${product.Description}</p>
                </div>
                <div class="d-flex justify-content-between pt-2 milatrysetting">
                    <p class="mb-0">Stock: ${product.stock}</p>
                </div>
                <a href="#">
                    <div class="containerhhbtn">
                        <div class="linesettingbtn"></div>
                        <button>READ MORE</button>
                        <div class="linesettingsecondbtn"></div>
                    </div>
                </a>
            </div>
        </div>
    `;
}

// Function to fetch products from the backend API
async function fetchProducts() {
    try {
        console.log('Fetching products...');
        const response = await fetch('http://localhost:4000/api/v1/allProduct'); // Adjust the endpoint as needed

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Data received:', data);

        if (data.success && data.result) {
            const productsContainer = document.getElementById('products');
            if (productsContainer) { // Check if productsContainer is not null or undefined
                // Clear the container first
                productsContainer.innerHTML = '';
                // Iterate over the array of products and append each product card to the container
                data.result.forEach(product => {
                    productsContainer.innerHTML += createProductCard(product);
                });
                setupAddToCartButtons(); // Set up event listeners after rendering products
            } else {
                console.error('Error: productsContainer element not found');
            }
        } else {
            console.error('Failed to fetch products:', data.message);
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
    }
}

// Function to set up event listeners for Add to Cart buttons
function setupAddToCartButtons() {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const product = JSON.parse(event.target.getAttribute('data-product'));
            addToCart(product);
        });
    });
}

// // Function to add product to the cart
// function addToCart(product) {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert(`${product.Name} added to cart!`);
// }

function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show Bootstrap danger alert instead of basic alert
    const alertContainer = document.getElementById('alert-container');
    if (alertContainer) {
        const alertHtml = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                ${product.Name} added to cart!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `;
        alertContainer.innerHTML = alertHtml;
    } else {
        alert(`${product.Name} added to cart!`); // Fallback for non-Bootstrap environments
    }
}

// Fetch products on page load
window.onload = fetchProducts;