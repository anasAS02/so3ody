import { news } from "./news.js";

export function showReports() {
    const reportsCon = document.querySelector('.reports-con');

    reportsCon.innerHTML = '';
    
    news.slice(0, 3).forEach(report => {
        const reportHTML = `
            <div class="box">
                <div class="img">
                    <img src="${report.thumbnail}" alt="${report.title}" title="${report.title}" />
                </div>
                <a href="#" title="${report.title}">
                    ${report.title}
                </a>
                <div class="info">
                    <div class="category">
                        <span></span>
                        <p>${report.category}</p>
                    </div>
                    <span>
                        <p>منذ ${report.time}</p>
                        <span class="views">
                            <img src="../assets/images/news/eye.svg" alt="مشاهدات" />
                            ${report.views}
                        </span>
                    </span>
                </div>
            </div>
        `;
        reportsCon.innerHTML += reportHTML;
    });
}