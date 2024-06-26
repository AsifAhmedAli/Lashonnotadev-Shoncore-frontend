// JavaScript to Fetch and Display Data
					
document.addEventListener('DOMContentLoaded', function () {
    const newsContainer = document.getElementById('news-container');

    // Fetch news data from the API
    fetch(`${base_url}/allnews`)
        .then(response => response.json())
        .then(data => {
            if (data.success && data.result) {
                const newsItems = data.result.slice(0, 3); // Get the top 3 news items
                newsItems.forEach(news => {
                    const newsCard = createNewsCard(news);
                    newsContainer.appendChild(newsCard);
                });
            } else {
                console.error('Failed to fetch news');
            }
        })
        .catch(error => console.error('Error:', error));
});

function createNewsCard(news) {
    const newsCard = document.createElement('div');
    newsCard.className = 'container pt-md-5';

    newsCard.innerHTML = `
        <a href="" class="text-decoration-none">
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-4 px-sm-0">
                    <div class="latest-news-card border-0">
                        <img src="${news.Image.url}" class="latest-news-card-img" alt="...">
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-4 mt-3 mt-md-0">
                    <div class="latest-news-card border-0">
                        <div class="latest-news-card-body p-0">
                            <h6 class="card-tilte text-white">COMICS</h6>
                            <h6 class="card-tilte indxcardti">
                                ${news.Title}
                            </h6>
                            <h6 class="card-tilte text-white">1 DAY AGO</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-2"></div>
            </div>
        </a>
        <div class="row mt-4">
            <div class="col-md-1"></div>
            <div class="col-md-10 p-0">
                <div class="break-line"></div>
            </div>
        </div>
    `;

    return newsCard;
}