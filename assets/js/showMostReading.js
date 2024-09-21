const mostReadings = [
    {
        title: "أول قرار من بيولي بعد توليه تدريب النصر.. قبل الإعلان الرسمي",
        category: "كرة سعودية",
    },
    {
        title: "تهديد مستقبل سعود عبدالحميد في روما .. إقالة دي روسي رسميا",
        category: "كرة سعودية",
    },
    {
        title: "كشف السبب وراء تواجد فهد المولد في دبي.. النوفل يخرج عن صمته بعد الحادث الأليم",
        category: "كرة سعودية",
    },
    {
        title: "إقالة جديدة في النصر وكاسترو لن يرحل وحيدا .. المريسل يكشف مفاجأة مدوية",
        category: "كرة سعودية",
    },
    {
        title: "فهد المولد في وضع حرج .. محاولة فاشلة للإخلاء الطبي وقرار جديد خلال ساعات",
        category: "كرة سعودية",
    }
];

export function showMostReading() {
    const mostReadingContainer = document.getElementById('most-reading-container');
    mostReadingContainer.innerHTML += mostReadings.map((item, index) => `
        <div class="box">
            <span>
                <p>${index + 1}</p>
                <a href="#" title="${item.title}">${item.title}</a>
            </span>
            <div class="category-details">
                <span></span>
                <a href="#" title="${item.category}">${item.category}</a>
            </div>
        </div>
    `).join('');
}