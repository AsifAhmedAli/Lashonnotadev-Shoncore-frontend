// JavaScript to Fetch and Display Data
					
document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('product-container');

    // Fetch product data from the API
    fetch('http://localhost:4000/api/v1/allProduct')
        .then(response => response.json())
        .then(data => {
            if (data.success && data.result) {
                const products = data.result.slice(0, 4); // Get the top 5 products
                products.forEach(product => {
                    const productCard = createProductCard(product);
                    productContainer.appendChild(productCard);
                });
            } else {
                console.error('Failed to fetch products');
            }
        })
        .catch(error => console.error('Error:', error));
});

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'col-lg-3 col-sm-6 col-12 mastercardshow';

    card.innerHTML = `
        <div class="containerhh mx-0 mb-3">
            <div class="linesetting"></div>
            <img src="${product.Image.url}" alt="">
            <div class="linesettingsecond"></div>
            <div class="textcardcart">
                <h6>${product.Name}</h6>
            </div>
        </div>
        <div class="cardcontentghome">
            <div class="py-1 innercardhom">
                <p class="mb-0"> Full</p>
            </div>
            <div class="d-flex justify-content-between pt-2 milatrysetting">
                <p class="mb-0"> Military</p>
                <p class="mb-0">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 3C5.25 4.38071 4.13071 5.5 2.75 5.5C1.36929 5.5 0.25 4.38071 0.25 3C0.25 1.61929 1.36929 0.5 2.75 0.5C4.13071 0.5 5.25 1.61929 5.25 3Z" fill="#D9D9D9"/>
                    </svg>
                </p>
                <p class="mb-0"> Mature</p>
                <p class="mb-0">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 3C5.25 4.38071 4.13071 5.5 2.75 5.5C1.36929 5.5 0.25 4.38071 0.25 3C0.25 1.61929 1.36929 0.5 2.75 0.5C4.13071 0.5 5.25 1.61929 5.25 3Z" fill="#D9D9D9"/>
                    </svg>
                </p>
                <p class="mb-0"> Action</p>
            </div>
            <div class="milatrypset">
                <p>${product.Description}</p>
            </div>
            <a href="">
                <div class="containerhhbtn">
                    <div class="linesettingbtn"></div>
                    <button>READ MORE </button>
                    <div class="linesettingsecondbtn"></div>
                </div>
            </a>
        </div>
    `;

    return card;
}