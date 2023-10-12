const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const meaningEl = document.getElementById("meaning");
const titleEl = document.getElementById("title");
const audioEl = document.getElementById("audio");
const example = document.getElementById("example");
const phonetic = document.getElementById("phonetic");
const spinnerEl = document.getElementById("spinner");
const errorMessageEl = document.getElementById("errorMessage");

const UNSPLASH_API_KEY = "aIW8_-hKye1RfyMz4sqWEKoznz28hGeK72qPXO6LFv8";

async function fetchImage(word) {
    try {
        
        infoTextEl.style.display = "block";
        const url = `https://api.unsplash.com/search/photos?query=${word}&per_page=10&client_id=${UNSPLASH_API_KEY}`;
        const data = await fetch(url).then((res) => res.json());
        
        if (data.results) {
            //get existing images
            const image = document.querySelector('.search-image');
            //console.log(image);
            if(image !== null) {
                document.querySelector('.search-image').remove();
            }
            
            
            const imgElement = document.createElement('img');
            const rand = Math.round(Math.random() * 10);
            imgElement.src = data.results[rand].urls.small;
            imgElement.alt = 'image';
            imgElement.classList.add("search-image");
            imgElement.width = 300;

           
            meaningContainerEl.insertBefore(imgElement, meaningContainerEl.firstChild);
            imgElement.style.display ='inline-flex';
        }

        errorMessageEl.style.display = "none";
    } catch (error) {
        errorMessageEl.style.display = "block";
        errorMessageEl.innerText = `An error happened - ${error}. Please try again later`;
    }
}

async function fetchAPI(word) {
    try {
        infoTextEl.style.display = "block";

        infoTextEl.innerText = `Searching the meaning of ${word}`;
        spinnerEl.style.display = "inline-flex";
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());
        spinnerEl.style.display = "none";

        if (result.title) {
            titleEl.innerText = word;
            phonetic.innerText = "N/A";
            meaningEl.innerText = "N/A";
            audioEl.style.display = "none";
        } else {
            infoTextEl.style.display = "none";
            meaningContainerEl.style.display = "block";
            audioEl.style.display = "inline-flex";
            titleEl.innerText = result[0].word;
            phonetic.innerText = result[0].phonetic;
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
            if (result[0].meanings[0].definitions[0].example != null || result[0].meanings[0].definitions[0].example != undefined) {
                example.innerText = result[0].meanings[0].definitions[0].example;
            } else {
                example.innerText = "No example is provided.";
            }
            if (result[0].phonetics[0].audio !== "") {
                audioEl.src = result[0].phonetics[0].audio;
            } else {
                audioEl.style.display = "none";
            }
        }
    } catch (error) {
        console.log(error);
    }
}
inputEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchImage(e.target.value);
        fetchAPI(e.target.value);
        
    }
});
