export function search() {
    const searchInput = document.getElementById('searchInput');
    const searchIcon = document.querySelector('nav .box .search-icon');
    const openSearch = document.getElementById('searchIcon');
    const closeSearch = document.getElementById('closeSearch');
    const searchContainer = document.querySelector('nav .box .search');

    openSearch.addEventListener('click', () => {
        searchInput.style.opacity = '1';
        searchInput.style.display = 'block';
        searchIcon.style.display = 'block';
        closeSearch.style.display = 'block';
        openSearch.style.display = 'none';
        searchContainer.style.padding = '20px';
    })    

    closeSearch.addEventListener('click', () => {
        openSearch.style.display = 'block';
        searchInput.style.opacity = '0.5';
        searchInput.style.display = 'none';
        searchIcon.style.display = 'none';
        closeSearch.style.display = 'none';
        searchContainer.style.padding = '12px';
    })    
}