const btnEl = document.getElementById("btn");
const galleryEl = document.getElementById("gallery");
const errorMessageEl = document.getElementById("errorMessage");
const searchInputEl = document.getElementById("searchInput"); // Change this line
const searchEl = document.getElementById("search");
const UNSPLASH_API_KEY = "aIW8_-hKye1RfyMz4sqWEKoznz28hGeK72qPXO6LFv8";

function searchImages() {
    const inputValue = document.getElementById("number-input").value;
    // Get the value entered in the search input
    const searchTerm = searchInputEl.value.toLowerCase(); // Change this line

    if (searchTerm === "") {
        errorMessageEl.style.display = "block";
        errorMessageEl.innerText = "There is no search text";
        return;
    }

    // Get all the images in the gallery
    let imgs = ""; // Change this line
    try {
        const loading = `<img src="spinner.svg" />`;
        galleryEl.innerHTML = loading;

        fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=${inputValue}&client_id=${UNSPLASH_API_KEY}`).then((res) =>
            res.json().then((data) => {
                if (data.results) {
                    // Change this line
                    data.results.forEach((pic) => {
                        // Change this line
                        imgs += `<img src=${pic.urls.small} alt="image">`;
                    });
                    galleryEl.style.display = "block"; // Change this line
                    galleryEl.innerHTML = imgs;
                }
                console.log(data);
            })
        );
        errorMessageEl.style.display = "none";
    } catch (error) {
        errorMessageEl.style.display = "block";
        errorMessageEl.innerText = `An error happened - ${error}. Please try again later`;
    }
}

function fetchImage() {
    const inputValue = document.getElementById("number-input").value;
    if (inputValue > 10 || inputValue < 1) {
        errorMessageEl.style.display = "block";
        errorMessageEl.innerText = "Number should be between 1 and 10"; // Fix the range here
        return;
    }
    let imgs = ""; // Change this line
    try {
        const loading = `<img src="spinner.svg" />`;
        galleryEl.innerHTML = loading;

        fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random() * 1000)}&client_id=${UNSPLASH_API_KEY}`).then((res) =>
            res.json().then((data) => {
                if (data) {
                    data.forEach((pic) => {
                        imgs += `<img src=${pic.urls.small} alt="image">`;
                    });
                    galleryEl.style.display = "block"; // Change this line
                    galleryEl.innerHTML = imgs;
                }
                console.log(data);
            })
        );
        errorMessageEl.style.display = "none";
    } catch (error) {
        errorMessageEl.style.display = "block";
        errorMessageEl.innerText = `An error happened - ${error}. Please try again later`;
    }
}

btnEl.addEventListener("click", fetchImage);
searchEl.addEventListener("click", searchImages);
