import { news } from "./news.js";

export function showVideos() {
    const mainVideo = document.getElementById('main-video');
    mainVideo.innerHTML = `
        <div class="img">
            <img src="${news[0].thumbnail}" alt="${news[0].title}" title="${news[0].title}" />
            <img src="../assets/images/news/white play.svg" alt="${news[0].title}" class="play" />
        </div>
        <a href="#" title="${news[0].title}">${news[0].title}</a>
        <p>${news[0].desc}</p>
        <div class="info">
            <p>منذ ${news[0].time}</p>
            <span class="views">
                <img src="../assets/images/news/eye.svg" alt="مشاهدات" />
                ${news[0].views}
            </span>
        </div>
    `;

    const videosContainer = document.getElementById('videos-container');
    news.slice(0, 4).forEach(item => {
        const videoBox = document.createElement('div');
        videoBox.className = 'box';
        videoBox.innerHTML = `
            <div class="img">
                <img src="${item.thumbnail}" alt="${item.title}" title="${item.title}" />
                <img src="../assets/images/news/white play.svg" alt="${item.title}" class="play" />
            </div>
            <a href="#" title="${item.title}">${item.title}</a>
            <div class="info">
                <p>منذ ${item.time}</p>
                <span class="views">
                    <img src="../assets/images/news/eye.svg" alt="مشاهدات" />
                    ${item.views}
                </span>
            </div>
        `;
        videosContainer.appendChild(videoBox);
    });
}
