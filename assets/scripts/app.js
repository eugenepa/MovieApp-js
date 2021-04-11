let addModal = document.querySelector('#add-modal');
let backDrop = document.querySelector('#backdrop');
let addButton = document.querySelector('header').querySelector('button');
let cancelMovieButton = addModal.querySelector('.btn--passive');


let toggleBackDrop = ()=>{
    backDrop.classList.toggle('visible');
}

let toggleMovieAddButton = ()=>{
    addModal.classList.toggle('visible');
    toggleBackDrop();
}

addButton.addEventListener('click', toggleMovieAddButton);
backDrop.addEventListener('click', toggleMovieAddButton);
cancelMovieButton.addEventListener('click', toggleMovieAddButton)

// modal.style.display = 'block';