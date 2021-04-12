let addModal = document.querySelector('#add-modal');
let backDrop = document.querySelector('#backdrop');
let addButton = document.querySelector('header').querySelector('button');
let cancelMovieButton = addModal.querySelector('.btn--passive');
let addMovieButton = addModal.querySelector('.btn--success');
let userInputs = addModal.querySelectorAll('input');
let cardBg = document.querySelector("#entry-text");
let movies = []


let body = document.querySelector('body');
let main = document.createElement('div');
main.classList.add('grid');
console.log(main)
body.appendChild(main);

let toggleBackDrop = ()=>{
    backDrop.classList.toggle('visible');
}

let clearInputs = () => {
    for(let userInput of userInputs){
        userInput.value = '';
    }
}

let movieHandler = () => {

};

let renderUI = () => {
 if(movies.length > 0){
    cardBg.style.display = 'none';
    
    let movieDiv = document.createElement('div');
    movieDiv.classList.add('card');
    movieDiv.classList.add('cardMargin');
    main.appendChild(movieDiv);

    let movieTitle = document.createElement('h2');
    movieTitle.textContent = movies[movies.length - 1].title;
    movieDiv.appendChild(movieTitle);

    let movieImage = document.createElement('p');
    movieImage.textContent = movies[movies.length - 1].imageUrl;
    movieDiv.appendChild(movieImage);

    let movieRating = document.createElement('p');
    movieRating.textContent = movies[movies.length - 1].rating;
    movieDiv.appendChild(movieRating);
 }
 else{
    cardBg.style.display = 'block';
 }
};

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
    else{
        let newMovie = {
            title:title,
            imageUrl:imageUrl,
            rating:rating
        };

        movies.push(newMovie);
        clearInputs();
        toggleMovieAddButton();
        renderUI();
        console.log(movies)
    }
};

addButton.addEventListener('click', toggleMovieAddButton);
backDrop.addEventListener('click', toggleMovieAddButton);
cancelMovieButton.addEventListener('click', cancelMovieButtonHandler)
addMovieButton.addEventListener('click',addMovieButtonHandler);

// modal.style.display = 'block';