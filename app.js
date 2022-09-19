const gridSize = 60;
const grid = document.querySelector('.content');

const changeColorOnHover = node => {
    node.addEventListener('mouseover', () => {
        node.classList.add('grid-el-colored');
    })
}

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

        changeColorOnHover(subChild);

        child.appendChild(subChild);
    }

    grid.appendChild(child);
}