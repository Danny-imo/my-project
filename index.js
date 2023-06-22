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
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the prinhe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    image: './img/Dbg1.png',
    stack: ['FACEBOOK', 'Full Stack Dev', '2015'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: '',
    sourceLink: ''
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the prinhe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    image: './img/Dbg2.png',
    stack: ['FACEBOOK', 'Full Stack Dev', '2015'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: '',
    sourceLink: ''
  },
  {
    name: 'Facebook 360',
    description: 'Lorem Ipsum is simply dummy text of the prinhe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    image: './img/Dbg3.png',
    stack: ['FACEBOOK', 'Full Stack Dev', '2015'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: '',
    sourceLink: ''
  },
  {
    name: 'UBER Navigation',
    description: 'Lorem Ipsum is simply dummy text of the prinhe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    image: './img/Dbg4.png',
    stack: ['FACEBOOK', 'Full Stack Dev', '2015'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: '',
    sourceLink: ''
  }
];

const cardsContainer = document.querySelector('#About');

projects.forEach((project) => {
  const card = document.createElement('div');
  card.classList.add('about-section');

  card.innerHTML = `
    <img src="${project.image}" class="card-img" />
      <div class="canopy">
        <h4 class="about-head">${project.name}</h4>
        <ul class="cano">
          <li class="tec">FACEBOOK</li>
          <li class="tech">Full Stack Dev</li>
          <li class="tech">2015</li>
        </ul>
        <p class="canopy-txt">
        A daily selection of privately personalized reads; no accounts or
          sign-ups required
        </p>
        <ul class="tech1">
          <li class="tech-t">HTML</li>
          <li class="tech-r">Ruby On Rails</li>
          <li class="tech-t">CSS</li>
          <li class="tech-j">JavaScript</li>
        </ul>
        
        <button type="button" class="project-btn">See Project</button>
      </div>
  `;

  cardsContainer.appendChild(card);

  const button = card.querySelector('.project-btn');
  button.addEventListener('click', () => {
    openModal(project);
  });
});




const modalContainer = document.createElement('div');
modalContainer.classList.add('modal');
modalContainer.id = 'modal';

modalContainer.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2 class="project-title" id="projectTitle"></h2>
    <ul id="cano">
    </ul>
    <div class="project-details">
      <img class="project-image" id="projectImage" src="" alt="">
      <div class="p-cont">
      <p class="project-description" id="projectDescription"></p>
      <div class="p-div">
      <ul class="project-technologies" id="projectTechnologies"></ul>
      <div class="project-buttons">
        <button class="btn-link"><a class="project-live-link" id="projectLiveLink" href="#" target="_blank">See Live <img src="img/Icon.png" class="btn-img"/></a></button>
        <button class="btn-link"><a class="project-source-link" id="projectSourceLink" href="#" target="_blank">See Source <img src="img/Frame.png" class="btn-img"/></a></button>
      </div>
      </div>
      </div>
    </div>
  </div>
`;

document.body.appendChild(modalContainer);



const modal = document.getElementById('modal');
const modalTitle = document.getElementById('projectTitle');
const modalImage = document.getElementById('projectImage');
const modalDescription = document.getElementById('projectDescription');
const modalTechnologies = document.getElementById('projectTechnologies');
const modalLiveLink = document.getElementById('projectLiveLink');
const modalSourceLink = document.getElementById('projectSourceLink');
const closeModalButton = document.querySelector('.close');
const modalStack = document.getElementById('cano');

function openModal(project) {
  modalTitle.textContent = project.name;
  modalImage.src = project.image;
  modalDescription.textContent = project.description;

  modalTechnologies.innerHTML = '';
  project.technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.textContent = technology;
    modalTechnologies.appendChild(li);
  });


  modalStack.innerHTML = '';
  project.stack.forEach((stx) => {
    const ol = document.createElement('li');
    ol.textContent = stx;
    modalStack.appendChild(ol);
  });


  modalLiveLink.href = project.liveLink;
  modalSourceLink.href = project.sourceLink;

  modal.classList.add('modal-open');
}

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('modal-open');
});