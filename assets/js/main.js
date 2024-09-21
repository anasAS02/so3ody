import { navbar } from './navbar.js';
import { search } from './search.js';
import { slider } from './slider.js';
import { showPopularTeams } from './showPopularTeams.js';
import { showNews } from './showNews.js';
import { showReports } from './showReports.js';
import { showLatestNews } from './showLatestNews.js';
import { showCompetitions } from './showCompetitions.js';
import { showVideos } from './showVideos.js';
import { showMostReading } from './showMostReading.js';
import { voting } from './voting.js';
import { showBreakNews } from './showBreakNews.js';

document.addEventListener('DOMContentLoaded', () => {
    navbar();
    search();
    slider();
    showPopularTeams();
    showNews();
    showReports();
    showLatestNews();
    showCompetitions();
    showVideos();
    showMostReading();
    voting();
    showBreakNews();
});
