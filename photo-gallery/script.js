const btnEl = document.getElementById("btn");
const galleryEl = document.getElementById("gallery");
const errorMessageEl = document.getElementById("errorMessage");
const UNSPLASH_API_KEY = "aIW8_-hKye1RfyMz4sqWEKoznz28hGeK72qPXO6LFv8";
function fetchImage() {
    const inputValue = document.getElementById("number-input").value;
    if (inputValue > 10 || inputValue < 1) {
        errorMessageEl.style.display = "block";
        errorMessageEl.innerText = "Number should be between 0 and 11";
        return;
    }
    imgs = "";
    try {
        // btnEl.style.display = "none";
        const loading = `<img src="spinner.svg" />`;
        galleryEl.innerHTML = loading;
        fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random() * 1000)}&client_id=${UNSPLASH_API_KEY}`).then((res) =>
            res.json().then((data) => {
                if (data) {
                    data.forEach((pic) => {
                        imgs += `<img src=${pic.urls.small} alt="image">`;
                        galleryEl.style.display = "block";
                        galleryEl.innerHTML = imgs;
                    });
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
