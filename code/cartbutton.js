document.getElementById('checkout-button').addEventListener('click', async () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    //  // Check if the user is logged in by verifying the JWT token in cookies
    //  const jwtToken = getCookie('token');
    //  if (!jwtToken) {
    //      alert('You must be logged in to proceed with the checkout.');
    //      return;
    //  }  

    const response = await fetch(`${base_url}/create-checkout-session`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart }),
    });

    const session = await response.json();

    const stripe = Stripe(`${stripe_key}`);
    stripe.redirectToCheckout({ sessionId: session.id });
});