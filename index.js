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


// PROJECT POPUP

const projects = [
  {
    image: 'img/Snapshoot Portfolio.png',
    name: 'Tonic',
    preview: '',
    code: '',
    tags: ['html', 'css', 'javascript'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    image: 'img/card 1.svg',
    name: 'Multi-Post Stories',
    preview: '',
    code: '',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    image: 'img/card 1 (2).svg',
    name: 'Tonic',
    preview: '',
    code: '',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    image: 'img/card 4.svg',
    name: 'Multi-Post Stories',
    preview: '',
    code: '',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
];

const cardsContainer = document.querySelector('.grid');

// Function to create project cards
function createProjectCard(project) {
  const item = document.createElement('work-container-main');
  item.classList.add('cards-held-here');

  const content = document.createElement('work-cont');
  content.innerHTML = `
    <section class="work-cont work-container-desktop">
      <div class="portfolio-img desktop-img-0">
        <img src="${project.image}" alt="${project.name}" class="full-size">
      </div>
      <div class="work-content">
        <h2 class="tonic0 tonic">${project.name}</h2>
        <ul class="prop">
          <li class="can">CANOPY</li>
          <li class="bac"><img src="img/dot.jpg" alt="dot"> Back End Dev</li>
          <li class="num"><img src="img/dot.jpg" alt="dot"> 2015</li>
        </ul>
        <p class="tonic-def">${project.desc}</p>
        <ul class="stack stack-desktop">
          ${project.tags.map(tag => `<li class="${tag}">${tag}</li>`).join('')}
        </ul>
        <div class="button">
          <button class="testButton">See Project</button>
        </div>
      </div>
    </section>
  `;

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.classList.add('d-none');
  const modalContent = document.createElement('div');
  modalContent.innerHTML = `
    <div class="work-content-modal">
      <span class="closeBtn">&times;</span>
      <h2 class="tonic0-modal">${project.name}</h2>
      <ul class="prop-modal">
        <li class="can">CANOPY</li>
        <li class="bac"><img src="img/dot.jpg" alt="dot"> Back End Dev</li>
        <li class="num"><img src="img/dot.jpg" alt="dot"> 2015</li>
      </ul>
      <div class="portfolio-modal-img">
        <img src="${project.image}" alt="${project.name}">
      </div>
      <div class="tonic-modal">
        <p>${project.desc}</p>
      </div>
      <div class="alignment">
        <ul class="stack-modal stack-desktop">
          ${project.tags.map(tag => `<li class="${tag}">${tag}</li>`).join('')}
          <li class="git">github</li>
          <li class="ruby">ruby</li>
          <li class="boot">Bootstraps</li>
        </ul>
        <img src="img/icon11.jpg" alt="separator" class="line">
        <div class="modal-button">
          <a href="${project.preview}"><button id="modalBtn-0" type="button">See live <img src="img/icon12.jpg" alt="modal-icon"></button></a>
          <a href="${project.code}"><button id="modalBtn-1" type="button">See Source <img src="img/icon13.jpg" alt="modal-icon-git"></button></a>
        </div>
      </div>
    </div>
  `;

  modal.appendChild(modalContent);
  item.appendChild(content);
  item.appendChild(modal);
  return item;
}

// Function to create project cards dynamically
function createProjectCards() {
  cardsContainer.innerHTML = '';
  projects.forEach((project) => {
    const card = createProjectCard(project);
    cardsContainer.appendChild(card);
  });
}

// Function to show/hide the modal popup
function toggleModal(index) {
  const modal = document.querySelectorAll('.modal')[index];
  modal.classList.toggle('modal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Event listeners for "See Project" buttons and close buttons
document.addEventListener('DOMContentLoaded', () => {
  createProjectCards();

  const buttons = document.querySelectorAll('.testButton');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      toggleModal(index);
    });
  });

  const closeButtons = document.querySelectorAll('.closeBtn');
  closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      toggleModal(index);
    });
  });
});
