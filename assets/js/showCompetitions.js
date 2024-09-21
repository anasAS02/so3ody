const competitions = [
    {
        name: "دوري روشن السعودي",
        logo: "../assets/images/competitions/دوري روشن السعودي.webp"
    },
    {
        name: "كأس خادم الحرمين الشريفين",
        logo: "../assets/images/competitions/كأس خادم الحرمين الشريفين.webp"
    },
    {
        name: "كأس السوبر السعودي",
        logo: "../assets/images/competitions/كأس السوبر السعودي.webp"
    },
    {
        name: "كأس آسيا",
        logo: "../assets/images/competitions/كأس آسيا.webp"
    },
    {
        name: "دوري أبطال آسيا للنخبة",
        logo: "../assets/images/competitions/دوري أبطال آسيا للنخبة.webp"
    },
    {
        name: "الدوري الانجليزي",
        logo: "../assets/images/competitions/الدوري الانجليزي.webp"
    },
]

export function showCompetitions() {
    const competitionsContainer = document.querySelector('.competitions-con');
    
    competitionsContainer.innerHTML = '';
    
    competitions.forEach(competition => {
        const competitionElement = `
            <div class="box">
                <img src="${competition.logo}" alt="${competition.name}" title="${competition.name}" />
                <a href="#" title="${competition.name}">
                    ${competition.name}
                </a>
            </div>
        `;
        competitionsContainer.innerHTML += competitionElement;
    });
}