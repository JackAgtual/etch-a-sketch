const gridSize = 3;
const grid = document.querySelector('.grid');
const h1 = document.createElement('h1');
h1.innerText = 'Testing';

// grid.appendChild(h1);

for (let row = 0; row < gridSize; row++) {
    const child = document.createElement('div');
    
    child.style['flex-grow'] = 1;
    child.style['align-items'] = 'center';
    child.style['justify-content'] = 'space-between';
    child.style['display'] = 'flex';

    for (let col = 0; col < gridSize; col++) {
        const subChild = document.createElement('div');
        subChild.classList.add('grid-el')
        subChild.innerText = `Element ${row}, ${col}`;
        subChild.style['text-align'] = 'center';

        subChild.style['flex-grow'] = 1;
        child.appendChild(subChild);
    }
    

    grid.appendChild(child);
}