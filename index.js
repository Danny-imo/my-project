

const nav = document.querySelector('.portfolioM');
const hambugger = document.querySelector('.ham');
const closeBtn = document.querySelector('.portfolioB');

hambugger.addEventListener('click', () => {
    nav.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
    nav.style.display = 'none';
});