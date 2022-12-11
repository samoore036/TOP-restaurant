function createMenu() {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.classList.add('grid-content');

    menu.appendChild(createItemCard('The Original', 'Steak, potato, onion, and turnip with a side of house gravy.'));
    menu.appendChild(createItemCard('Bangers and Mash', 'Sausage, grilled onion, mashed potato, with a side of house gravy.'));
    menu.appendChild(createItemCard('Chicken Pot Pie', 'Chicken, carrots, potato, celery, and onion in a rosemary gravy,'));
    menu.appendChild(createItemCard('The Yankee', 'Turkey, sweet potato, grilled onion and housemade stuffing. Served with a cranberry sauce.'));
    menu.appendChild(createItemCard('Stew', 'Steak simmered in a Guinness gravy, with red potato, mushrooms, carrots, and celery. Layered with cheddar, sautéed leeks, and cabbage.'));
    menu.appendChild(createItemCard('Chicken Tikka Masala', 'Chicken breast, tikka masala sauce, green bell pepper, and potato. Served with minted yogurt.'));
    
    return menu;
}

function createItemCard(title, content) {
    const menuItem = document.createElement('div');
    menuItem.setAttribute('class', 'menu-item');

    const header = document.createElement('header');
    header.textContent = title;
    const menuDescription = document.createElement('p');
    menuDescription.textContent = content;

    menuItem.appendChild(header);
    menuItem.appendChild(menuDescription);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());

    const btns = Array.from(document.querySelectorAll('button'));
    btns.forEach(btn => btn.classList.remove('current-btn'));
    
    const menuBtn = document.getElementById('menu-btn');
    menuBtn.classList.add('current-btn');
}

export default loadMenu;