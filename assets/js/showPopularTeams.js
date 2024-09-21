const popularTeams = [
    {
        name: "الأهلي",
        logo: "../assets/images/teams/ahly.webp",
    },
    {
        name: "أرسنال",
        logo: "../assets/images/teams/arsenal.webp",
    },
    {
        name: "أتليتكو مدريد",
        logo: "../assets/images/teams/atletico.webp",
    },
    {
        name: "برشلونة",
        logo: "../assets/images/teams/barcelona.webp",
    },
    {
        name: "بايرن ميونخ",
        logo: "../assets/images/teams/bayern.webp",
    },
    {
        name: "تشيلسي",
        logo: "../assets/images/teams/chelsea.webp",
    },
    {
        name: "الهلال",
        logo: "../assets/images/teams/helal.webp",
    },
    {
        name: "اتحاد جدة",
        logo: "../assets/images/teams/ittehad.webp",
    },
    {
        name: "يوفنتوس",
        logo: "../assets/images/teams/juventus.webp",
    },
    {
        name: "ليفربول",
        logo: "../assets/images/teams/liverpool.webp",
    },
    {
        name: "مانشستر سيتي",
        logo: "../assets/images/teams/man-city.webp",
    },
    {
        name: "مانشستر يونايتد",
        logo: "../assets/images/teams/man-united.webp",
    },
    {
        name: "النصر",
        logo: "../assets/images/teams/nasser.webp",
    },
    {
        name: "باريس سان جيرمان",
        logo: "../assets/images/teams/paris.webp",
    },
    {
        name: "ريال مدريد",
        logo: "../assets/images/teams/real-madrid.webp",
    },
    {
        name: "روما",
        logo: "../assets/images/teams/roma.webp",
    },
    {
        name: "الشباب",
        logo: "../assets/images/teams/shabab.webp",
    },
    {
        name: "توتنهام",
        logo: "../assets/images/teams/tottenham.webp",
    },
    {
        name: "الزمالك",
        logo: "../assets/images/teams/zamalek.webp",
    },
    {
        name: "أهلي جدة",
        logo: "../assets/images/teams/ahly-jeddah.webp",
    },
]

export function showPopularTeams() {
    const popularTeamsContainer = document.querySelector('.popular-teams');
    popularTeamsContainer.innerHTML = '';

    popularTeams.forEach(team => {
        const teamElement = `
            <a href="#" title="${team.name}">
                <img src="${team.logo}" alt="${team.name}" />
            </a>
        `;
        popularTeamsContainer.innerHTML += teamElement;
    });
}