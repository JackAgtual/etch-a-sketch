const gridSize = 3;
const grid = document.querySelector('.grid');

// loop through rows
for (let row = 0; row < gridSize; row++) {
    const child = document.createElement('div');
    
    child.style['display'] = 'flex';
    child.style['flex-grow'] = 1;
    child.style['justify-content'] = 'space-between';
    child.style['align-items'] = 'center';

    // loop through columns
    for (let col = 0; col < gridSize; col++) {
        const subChild = document.createElement('div');
        subChild.classList.add('grid-el')

        subChild.style['flex-grow'] = 1;
        subChild.style['height'] = '100%'
        subChild.style['text-align'] = 'center';

        child.appendChild(subChild);
    }

    grid.appendChild(child);
}