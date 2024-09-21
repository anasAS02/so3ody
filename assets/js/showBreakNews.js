export function showBreakNews() {
    const breakNews = document.querySelector('.break-news');
    const closeBtn = document.querySelector('.break-news .close');

    closeBtn.onclick = () => {
        breakNews.style.display = 'none';
    };
}
