let addModal = document.querySelector('#add-modal');
let backDrop = document.querySelector('#backdrop');
let addButton = document.querySelector('header').querySelector('button');
let cancelMovieButton = addModal.querySelector('.btn--passive');
let addMovieButton = addModal.querySelector('.btn--success');
let userInputs = addModal.querySelectorAll('input');
let movies = []

let toggleBackDrop = ()=>{
    backDrop.classList.toggle('visible');
}

let clearInputs = () => {
    for(let userInput of userInputs){
        userInput.value = '';
    }
}

let toggleMovieAddButton = ()=>{
    addModal.classList.toggle('visible');
    toggleBackDrop();
}

let cancelMovieButtonHandler = ()=>{
    toggleMovieAddButton();
    clearInputs();
}

let addMovieButtonHandler = () => {
    let title = userInputs[0].value;
    let imageUrl = userInputs[1].value;
    let rating = userInputs[2].value;

    if (title.trim() === '' || imageUrl.trim() === '' || rating < 1 || rating>5){
        alert("Please enter valid details.")
    }

    let newMovie = {
        title:title,
        imageUrl:imageUrl,
        rating:rating
    };

    movies.push(newMovie);
    clearInputs();
    toggleMovieAddButton();
    console.log(movies)
};

addButton.addEventListener('click', toggleMovieAddButton);
backDrop.addEventListener('click', toggleMovieAddButton);
cancelMovieButton.addEventListener('click', cancelMovieButtonHandler)
addMovieButton.addEventListener('click',addMovieButtonHandler);

// modal.style.display = 'block';