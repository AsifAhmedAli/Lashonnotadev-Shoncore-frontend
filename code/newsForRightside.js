document.addEventListener("DOMContentLoaded", async () => {
    const newsContainer = document.getElementById("news-containers");

    try {
      const response = await fetch(`${base_url}/allnews`);
      const data = await response.json();

      if (data.success) {
        // Limit to the first five news items
        const newsItems = data.result.slice(0, 5);

        newsItems.forEach(news => {
          const newsHTML = `
            <a href="" class="text-decoration-none">
              <div class="row mt-5">
                <div class="col-5 px-sm-0">
                  <div class="latest-news-card border-0">
                    <img src="${news.Image.url}" class="latest-news-card-img" alt="${news.Title}">
                  </div>
                </div>
                <div class="col-7 text-start">
                  <div class="latest-news-card border-0">
                    <div class="card-body latest-news-card-body p-0">
                      <h6 class="card-title text-white">${news.Title}</h6>
                      <p class="card-text latest-news-card-text text-white text-start">${news.Description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div class="break-line d-none d-sm-flex"></div>
          `;

          newsContainer.insertAdjacentHTML("beforeend", newsHTML);
        });
      } else {
        newsContainer.innerHTML = "<p>No news available</p>";
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      newsContainer.innerHTML = "<p>Error loading news</p>";
    }
  });