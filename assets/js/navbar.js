export function navbar() {
    const closeMoreBtn = document.getElementById('closeMore');
    const moreSection = document.getElementById('more');
    const pageElements = document.querySelectorAll('div:not(nav div)');
    const footer = document.querySelector('footer');
    const nav = document.querySelector('nav');
    const moreLi = document.querySelector('ul li.li-more');
    const moreIcon = document.querySelector('ul li.li-more img.more-icon');
    const arrowIcon = document.querySelector('ul li.li-more img.arrow-icon');
    const navbar = document.querySelector('nav ul');
    const closeNavBtn = document.getElementById('closeNav');
    const openNavBtn = document.getElementById('openNav');
    const searchCon = document.querySelector('nav .box');

    let moreActive = false;

    function showMoreSection() {
        moreSection.style.transform = 'translateY(0%)';
        moreSection.style.opacity = '1';
        nav.style.position = 'relative';
        moreLi.classList.add('active');
        moreIcon.src = '../assets/images/navbar/activeMore.svg';
        arrowIcon.src = '../assets/images/navbar/activeArrow.svg';
        moreLi.style.order = '1';

        pageElements.forEach(el => el.classList.add('hidden'));
        footer.classList.add('hidden');
        moreActive = true;
    }

    function hideMoreSection() {
        moreSection.style.transform = 'translateY(100%)';
        moreSection.style.opacity = '0.7';
        nav.style.position = 'fixed';
        moreLi.classList.remove('active');
        moreIcon.src = '../assets/images/navbar/more.svg';
        arrowIcon.src = '../assets/images/navbar/arrow.svg';
        moreLi.style.order = '0';

        pageElements.forEach(el => el.classList.remove('hidden'));
        footer.classList.remove('hidden');
        moreActive = false;
    }

    function openNav() {
        searchCon.style.display = 'none';
        navbar.style.transform = 'translateX(0%)';
        closeNavBtn.style.display = 'block';
        nav.style.position = 'fixed';
    }

    function closeNav() {
        navbar.style.transform = 'translateX(1000%)';
        closeNavBtn.style.display = 'none';
        searchCon.style.display = 'flex';

        hideMoreSection();

        pageElements.forEach(el => el.classList.remove('hidden'));
        footer.classList.remove('hidden');
        moreActive = false;
    }

    moreLi.addEventListener('click', () => {
        if (moreActive) {
            hideMoreSection();
        } else {
            showMoreSection();
        }
    });

    closeMoreBtn.addEventListener('click', hideMoreSection);

    openNavBtn.addEventListener('click', openNav);

    closeNavBtn.addEventListener('click', closeNav);
}
