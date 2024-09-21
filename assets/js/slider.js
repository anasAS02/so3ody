export function slider() {
    const matchesCon = document.querySelector('.matches-con');
    const leftArrow = document.querySelector('.slider .left');
    const rightArrow = document.querySelector('.slider .right');

    const scrollStep = 200;
    let scrollAmount = 0;

    function scrollRight() {
        const maxScroll = matchesCon.scrollWidth - matchesCon.clientWidth;
        scrollAmount += scrollStep;
        if (scrollAmount > maxScroll) scrollAmount = maxScroll;
        matchesCon.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }

    function scrollLeft() {
        scrollAmount -= scrollStep;
        if (scrollAmount > 0) scrollAmount = 0;
        matchesCon.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }

    rightArrow.addEventListener('click', scrollRight);
    leftArrow.addEventListener('click', scrollLeft);
}