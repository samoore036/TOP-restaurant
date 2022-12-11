import MinersImg from './images/miners.jpg'

function createHistory() {
    const history = document.createElement('div');
    history.classList.add('tab-content');

    const p1 = document.createElement('p');
    p1.textContent = 'The pasty (pass-tee) originates from Cornwall and can be traced back as far as the 1200\'s.' + 
    'Mining was once a thriving industry in Cornwall and during those times pasties were baked by the wives and mothers of the miners.' + 
    'A miner\'s hands would often be covered in arsenic so pasties were made with a thick crimped edge along one side so' + 
    'the miners had a handle to hold while eating.';

    const p2 = document.createElement('p');
    p2.textContent = 'Traditionally, pasties were made with different fillings at each end. One end contained meat and vegetables, ' +
    'while the other end had a sweet filling. The sweet end would be marked with an initial so the miners would know which end to eat first.' +
    'By the 1800s, the tin mining industry had rapidly declined. This caused many Cornish miners to emigrate to Michigan\'s Upper Peninsula ' +
    'for copper mining, bringing pasties with them.';

    const miningImg = new Image();
    miningImg.setAttribute('id', 'miners-img');
    miningImg.src = MinersImg;

    history.appendChild(p1);
    history.appendChild(miningImg);
    history.appendChild(p2);

    return history;
}

function loadHistory() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHistory());

    const btns = Array.from(document.querySelectorAll('button'));
    btns.forEach(btn => btn.classList.remove('current-btn'));
    
    const historyBtn = document.getElementById('history-btn');
    historyBtn.classList.add('current-btn');
}

export default loadHistory;