document.addEventListener("DOMContentLoaded", async () => {
    const newsContainer = document.getElementById("news-container");
    const mainNewsContainer = document.querySelector(".news-container-row");
  
    try {
      const response = await fetch(`${base_url}/allnews`);
      const data = await response.json();
  
      if (data.success) {
        // Show the first five news items in the main section
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
  
        // Show only the second news item in the specific section
        const secondNews = data.result[1];
  
        const mainNewsHTML = `
          <div class="row">
            <div class="col-lg-11">
              <div class="news-card border-0">
                <div class="card-body news-card-body">
                  <h6 class="card-subtitle mb-2 news-card-subtitle">${secondNews.Title}</h6>
                  <h6 class="card-subtitle mb-2 text-white opacity-50 mt-3">${new Date(secondNews.createdAt).toLocaleDateString()}</h6>
                  <h1 class="card-title news-card-title fw-bold my-5 text-white">${secondNews.Description}</h1>
                  <p class="card-text pb-3 news-card-text text-white opacity-75">${secondNews.Description}</p>
                </div>
              </div>
            </div>
            <div class="break-line col-lg-11"></div>
            <div class="col-lg-11 py-3 py-md-none d-flex justify-content-between align-items-center flex-sm-row flex-column">
              <h2 class="text-white">BY shoncore</h2>
              <div class="me-5">
                <span class="news-img news-img-2"><img src="./img/ic_baseline-facebook.png" alt=""></span>
                <span class="news-img2 news-img-2"><img src="./img/formkit_twitter.png" alt=""></span>
              </div>
            </div>
            <div class="break-line col-lg-11"></div>
            <div class="col-lg-11 newsedetails">
              <p class="text-white">${secondNews.Description}</p>
            </div>
            <div class="col-lg-11 mt-5 carddetails">
              <div class="card bg-transparent border-0">
                <img src="${secondNews.Image.url}" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 class="card-title text-white">${secondNews.Title}</h5>
                  <h6 class="card-text text-white">${secondNews.Description}</h6>
                </div>
              </div>
              <p class="text-white mt-3">${secondNews.Description}</p>
              <div>
                <span class="text-white"> In this article : <a href="#" class="text-uppercase text-white ms-2 news-link">Good Devil</a></span>
              </div>
              <div class="col-lg-11 col-12 mt-3">
                <a href="#" class="news-img mx-1"><img src="./img/ic_baseline-facebook.png" alt=""></a>
                <a href="#" class="news-img2 mx-1"><img src="./img/formkit_twitter.png" alt=""></a>
              </div>
            </div>
          </div>
        `;
  
        mainNewsContainer.innerHTML = mainNewsHTML;
      } else {
        newsContainer.innerHTML = "<p>No news available</p>";
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      newsContainer.innerHTML = "<p>Error loading news</p>";
    }
  });