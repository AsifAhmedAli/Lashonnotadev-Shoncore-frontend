		// Function to create a cart item card HTML
		function createCartItemCard(product, index) {
			return `
				<div class="col-lg-4 col-md-6 mt-md-0 mt-5 mastercardshow">
					<div class="card more-news-card bg-transparent border-0">
						<div class="linesetting"></div>
						<button type="button" class="btn remove-column" data-product-index="${index}">Remove</button>
						<img src="${product.Image.url}" alt="${product.Name}">
						<div class="linesettingsecond"></div>
						<div class="textcardcart">
							<h5>${product.Name || 'No Name'}</h5>
						</div>
					</div>
				</div>
			`;
		}
	  
		// Function to load cart items from localStorage and display them
		function loadCartItems() {
			const cart = JSON.parse(localStorage.getItem('cart')) || [];
			const cartItemsContainer = document.getElementById('cart-items-container');
			cartItemsContainer.innerHTML = '';
	  
			cart.forEach((product, index) => {
				cartItemsContainer.innerHTML += createCartItemCard(product, index);
			});
	  
			setupRemoveButtons(); // Set up event listeners for remove buttons
		}
	  
		// Function to set up event listeners for remove buttons
		function setupRemoveButtons() {
			const buttons = document.querySelectorAll('.remove-column');
			buttons.forEach(button => {
				button.addEventListener('click', event => {
					const productIndex = event.target.getAttribute('data-product-index');
					removeFromCart(productIndex);
					showAlert('Product removed from cart.');
				});
			});
		}
	  // Function to show Bootstrap alert
function showAlert(message) {
	const alertContainer = document.getElementById('alert-container');
	if (alertContainer) {
		const alertHtml = `
			<div class="alert alert-success alert-dismissible fade show" role="alert">
				${message}
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>
		`;
		alertContainer.innerHTML = alertHtml;

		// Automatically remove the alert after a certain time
		setTimeout(() => {
			const alertElement = alertContainer.querySelector('.alert');
			if (alertElement) {
				alertElement.remove();
			}
		}, 3000); // Adjust the duration as needed
	}
}
		// Function to remove product from cart
		function removeFromCart(productIndex) {
			let cart = JSON.parse(localStorage.getItem('cart')) || [];
			cart.splice(productIndex, 1);  // Remove the product at the specified index
			localStorage.setItem('cart', JSON.stringify(cart));
			loadCartItems();
		}
	  
		// Function to handle checkout
		document.getElementById('checkout-button').addEventListener('click', async () => {
			const cart = JSON.parse(localStorage.getItem('cart')) || [];
	  
			if (cart.length === 0) {
				alert('Your cart is empty.');
				return;
			}
	  
			const response = await fetch('/create-checkout-session', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ cart }),
			});
	  
			const session = await response.json();
	  
			const stripe = Stripe('pk_test_51LMVNcIWZTB35DcnHABwapLkQGGuyUL8WYOq1x0kZPzxC7ryHen3Nmcn8Xl9lU8Ekyhqw3it1DnHeuQ6zHWYZg6s00lzbLqLEU');
			stripe.redirectToCheckout({ sessionId: session.id });
		});
	  
		// Load cart items on page load
		window.onload = loadCartItems;