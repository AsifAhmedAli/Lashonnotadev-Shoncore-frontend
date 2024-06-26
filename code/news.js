// Function to create a news card HTML
function createNewsCard(news) {
  // Fallback for image URL if not provided
  const imageUrl = news.Image.url || 'default-image.png';
  
  return `
    <div class="col-lg-4 col-md-6 mt-md-0 mt-5 mastercardshow">
      <div class="card more-news-card bg-transparent border-0">
        <img src="${imageUrl}" class="card-img border-0" alt="${news.Title}">
        <div class="card-body mobilecardnes">
          <h4 class="card-title text-white fw-bold neswscard">${news.Title}</h4>
          <p class="card-text text-white nedhfgd">${news.Description}</p>
        </div>
      </div>
    </div>
  `;
}

// Function to fetch news from the backend API
async function fetchNews() {
  try {
    console.log('Fetching news...');
    const response = await fetch(`${base_url}/allnews`); // Adjust the endpoint as needed

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Data received:', data);

    if (data.success && data.result) {
      const newsContainer = document.getElementById('news-container');
      if (newsContainer) { // Check if newsContainer is not null or undefined
        // Clear the container first
        newsContainer.innerHTML = '';
        // Iterate over the array of news and append each news card to the container
        data.result.forEach(news => {
          newsContainer.innerHTML += createNewsCard(news);
        });
      } else {
        console.error('Error: newsContainer element not found');
      }
    } else {
      console.error('Failed to fetch news:', data.message);
    }
  } catch (error) {
    console.error('Error fetching news:', error.message);
  }
}

// Fetch news on page load
window.onload = fetchNews;