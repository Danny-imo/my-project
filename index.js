const nav = document.querySelector('.portfolioM');
const hambugger = document.querySelector('.ham');
const closeBtn = document.querySelector('.portfolioB');
const menuItem = document.querySelectorAll('.menu');

hambugger.addEventListener('click', () => {
  nav.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  nav.style.display = 'none';
});
menuItem.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    nav.style.display = 'none';
  });
});