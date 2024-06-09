document.getElementById('checkout-button').addEventListener('click', async () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    const response = await fetch('http://localhost:4000/api/v1/create-checkout-session', {
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