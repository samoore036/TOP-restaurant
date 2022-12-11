import phoneIcon from './images/phone.png'
import homeIcon from './images/home.png'
import cornwallPic from './images/cornwall-location.jpg'

function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('tab-content');

    const cornwall = new Image();
    cornwall.setAttribute('id', 'cornwall-img');
    cornwall.src = cornwallPic;

    contact.appendChild(createPhoneDiv());
    contact.appendChild(createAddressDiv());
    contact.appendChild(cornwall);

    return contact;
}

function createPhoneDiv() {
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('contact-div');

    const icon = new Image();
    icon.classList.add('icon');
    icon.src = phoneIcon;

    const p = document.createElement('p');
    p.textContent = '+44 1234 123456';

    phoneDiv.appendChild(icon);
    phoneDiv.appendChild(p);

    return phoneDiv;
}

function createAddressDiv() {
    const addressDiv = document.createElement('div');
    addressDiv.classList.add('contact-div');

    const icon = new Image();
    icon.classList.add('icon');
    icon.src = homeIcon;

    const p = document.createElement('p');
    p.textContent = 'You can find us in South West England!';

    addressDiv.appendChild(icon);
    addressDiv.appendChild(p);

    return addressDiv;
}

function loadContact() {
    console.log('loading contact');
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());

    const btns = Array.from(document.querySelectorAll('button'));
    btns.forEach(btn => btn.classList.remove('current-btn'));
    
    const contactBtn = document.getElementById('contact-btn');
    contactBtn.classList.add('current-btn');
}

export default loadContact;