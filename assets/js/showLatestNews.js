import { news } from "./news.js";

export function showLatestNews() {
    const newsContainer = document.querySelector('.news-con');

    newsContainer.innerHTML = '';

    news.forEach(item => {
        const newsItem = `
            <div class="box">
                <div class="img">
                    <img src="${item.thumbnail}" alt="${item.title}" title="${item.title}" />
                </div>
                <div class="mob-style">
                    <a href="#" title="${item.title}">
                        ${item.title}
                    </a>
                    <div class="category">
                        <span></span>
                    <p>${item.category}</p>
                </div>
                </div>
                <a href="#" title="${item.title}" class="lg">
                    ${item.title}
                </a>
                <div class="info">
                    <div class="category">
                        <span></span>
                        <p>${item.category}</p>
                    </div>
                    <span>
                        <p>منذ ${item.time}</p>
                        <span class="views">
                            <img src="../assets/images/news/eye.svg" alt="مشاهدات" />
                            ${item.views}
                        </span>
                    </span>
                </div>
            </div>
        `;
        newsContainer.innerHTML += newsItem;
    });
}