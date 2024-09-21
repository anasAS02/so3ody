import { news } from './news.js';

export function showNews() {
    const topNews = news[0];
    document.getElementById('top-news-thumbnail').src = topNews.thumbnail;
    document.getElementById('top-news-title').innerText = topNews.title;
    document.getElementById('top-news-link').href = '#';
    document.getElementById('top-news-category').innerText = topNews.category;

    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = `
        <div class="main-video">
            <div class="img">
                <img src="${news[1].thumbnail}" />
                <img src="../assets/images/news/white play.svg" class="play" />
            </div>
            <span>
                <img src="./assets/images/news/red play.svg" class="play" />
                <p>فيديو</p>
            </span>
            <a href="#" title="${news[1].title}">${news[1].title}</a>
        </div>
    `;

    news.slice(2, 4).forEach(video => {
        const videoSpan = document.createElement('span');
        videoSpan.innerHTML = `
            <img src="../assets/images/news/white play.svg" class="play" />
            <a href="#" title="${video.title}">${video.title}</a>
        `;
        videoContainer.appendChild(videoSpan);
    });

    const newsBoxes = document.getElementById('news-boxes');
    news.slice(0, 3).forEach((item) => {
        const newsBox = document.createElement('div');
        newsBox.className = 'box';
        newsBox.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}" title="${item.title}" />
            <div class="content">
                <a href="#${item.id}" title="عاجل النصر">${item.title}</a>
                <div class="category">
                    <span></span>
                    <p>${item.category}</p>
                </div>
            </div>
        `;
        newsBoxes.appendChild(newsBox);
    });
}