import GitIcon from './images/github.png';
import loadHome from './loadHome';
import loadMenu from './loadMenu';
import loadHistory from './loadHistory';
import loadContact from './loadContact';


/*added global nav buttons array as passing an array from createNavButtons 
was calling the function every time in order to access any nav buttons.
nav buttons need to be accessed often when user clicks on a tab
*/
const navButtons = [];

//set header, navbar and footer which are common elements that are displayed across all tabs
function createHeader() {
    const header = document.createElement('div');
    header.id = 'header';

    const titleDiv = document.createElement('div');
    titleDiv.id = 'title';
    titleDiv.textContent = 'Cornwall Pasty Co.';

    header.appendChild(titleDiv);
    header.appendChild(createNavbar());
    return header;
}

//navbar goes in header div
function createNavbar() {
    const navbarDiv = document.createElement('div');
    navbarDiv.id = 'navbar';
    createNavButtons();
    navButtons.forEach(btn => navbarDiv.appendChild(btn));
    return navbarDiv;
}

function createNavButtons() {
    const homeBtn = document.createElement('button');
    homeBtn.id = 'home-btn';
    homeBtn.textContent = 'Home';
    navButtons.push(homeBtn);
    homeBtn.addEventListener('click', loadHome);

    const menuBtn = document.createElement('button');
    menuBtn.id = 'menu-btn';
    menuBtn.textContent = 'Menu';
    navButtons.push(menuBtn);
    menuBtn.addEventListener('click', loadMenu);

    const historyBtn = document.createElement('button');
    historyBtn.id = 'history-btn';
    historyBtn.textContent = 'History';
    navButtons.push(historyBtn);
    historyBtn.addEventListener('click', loadHistory);

    const contactBtn = document.createElement('button');
    contactBtn.id = 'contact-btn';
    contactBtn.textContent = 'Contact';
    navButtons.push(contactBtn);
    contactBtn.addEventListener('click', loadContact);
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}
 
function createFooter() {
    const footer = document.createElement('div');
    footer.id = 'footer';

    const gitIcon = new Image();
    gitIcon.id = 'git-icon';
    gitIcon.src = GitIcon;

    const gitLink = document.createElement('a');
    gitLink.href = 'https://github.com/samoore036'
    gitLink.appendChild(gitIcon);

    footer.textContent = 'Copyright © 2022 Shaheen Moore';
    footer.appendChild(gitLink);
    return footer;
}

function loadWebsite() {
    const content = document.createElement('div');
    content.id = 'content';

    content.appendChild(createHeader()); 
    content.appendChild(createMain());
    content.appendChild(createFooter());

    document.body.appendChild(content);

    //on page load home is default tab
    loadHome();
}

export default loadWebsite;