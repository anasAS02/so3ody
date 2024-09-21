export function voting() {
    const questionData = {
        question: "هل توافق على قيادة بيولي للنصر بعد إقالة كاسترو ؟",
        options: [
            { text: "نعم", percentage: "46.9%" },
            { text: "لا", percentage: "53.1%" }
        ],
        thumbnail: "../assets/images/voting.webp"
    };

    const questionElement = document.getElementById('question');
    const questionThumbnail = document.querySelector('.voting-con .img');
    questionElement.textContent = questionData.question;
    questionThumbnail.innerHTML += `
        <img src="${questionData.thumbnail}" title="${questionData.question}" alt="${questionData.question}" />
    `

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = questionData.options.map(option => `
        <span class="${option.text === "نعم" ? 'yes' : 'no'}">${option.text}</span>
    `).join('');

    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = questionData.options.map(option => `
        <div class="option-${option.text === "نعم" ? '1' : '2'}">
            <div class="head"> 
                <p>${option.text}</p>
                <p>${option.percentage}</p>
            </div>
            <div class="bar">
                <span></span>
            </div>
        </div>
    `).join('');

    const optionContainer = document.querySelector('.options');
    const yesOption = document.querySelector('.yes');
    const noOption = document.querySelector('.no');
    const resultSection = document.querySelector('.result');
    const showResultBtn = document.getElementById('showResult');
    
    function showResult() {
        resultSection.style.display = 'flex';
        optionContainer.style.display = 'none';
        showResultBtn.style.display = 'none';
    }
    
    yesOption.addEventListener('click', showResult);
    noOption.addEventListener('click', showResult);
    showResultBtn.addEventListener('click', showResult);
}