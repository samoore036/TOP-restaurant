import PastyImg from './images/pasty-pic.jpeg';

//home tab content. first thing a user sees when they load the page
function createHome() {
    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    home.classList.add('tab-content');

    const pastyImg = new Image();
    pastyImg.id = 'home-img';
    pastyImg.src = PastyImg;

    home.appendChild(createSentenceList());
    home.appendChild(pastyImg);
    home.appendChild(createHoursList());

    return home;
}

function createSentenceList() {
    const ul = document.createElement('ul');
    ul.id = 'sentence-list';

    const li1 = document.createElement('li');
    li1.textContent = 'Authentic Cornish pasties made daily by hand';
    ul.appendChild(li1);

    const li2 = document.createElement('li');
    li2.textContent = 'Serving Cornwall since 1834';
    ul.appendChild(li2);

    return ul;
}

function createHoursList() {
    const hoursList = document.createElement('ul');

    const li1 = document.createElement('li');
    li1.textContent = 'Monday: Closed';
    hoursList.appendChild(li1);

    const li2 = document.createElement('li');
    li2.textContent = 'Tuesday-Friday: 12:00-14:30, 18:00- 21:00';
    hoursList.appendChild(li2);

    const li3 = document.createElement('li');
    li3.textContent = 'Saturday: 12:00-22:00';
    hoursList.appendChild(li3);

    const li4 = document.createElement('li');
    li4.textContent = 'Sunday: Closed';
    hoursList.appendChild(li4);

    return hoursList;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
    
    //remove current tab visual from each button and add it back to the currently selected tab
    const btns = Array.from(document.querySelectorAll('button'));
    btns.forEach(btn => btn.classList.remove('current-btn'));

    const homeBtn = document.getElementById('home-btn');
    homeBtn.classList.add('current-btn');
}

export default loadHome;