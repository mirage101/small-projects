const ratingEls = document.querySelectorAll('.rating');
const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('container');
let selectedRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener('click', (event) =>{
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        //console.log(event.target.innerText || event.target.parentNode.innerText);
        event.target.classList.add('active');
        event.target.parentNode.classList.add('active');
        
    })
})

btnEl.addEventListener('click', () =>{
    if(selectedRating !==""){
        containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use this feeback to improve our customer support!</p>
        `
    }
    setTimeout(() => resetForm(), 8000);
})

function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove('active');
    })
}


function resetForm () {
    containerEl.innerHTML =`
        <h1 class="heading">Feedback UI</h1>
        <div class="ratings-container" id="ratings-container">
            <div class="rating">
                <img src="https://cdn-icons-png.flaticon.com/128/166/166527.png" alt="">
                <small>Unhappy</small>
            </div>

            <div class="rating">
                <img src="https://cdn-icons-png.flaticon.com/128/3508/3508576.png" alt="">
                <small>Neutral</small>
            </div>

            <div class="rating">
                <img src="https://cdn-icons-png.flaticon.com/128/166/166538.png" alt="">
                <small>Satisfied</small>
            </div>
        </div>
        <button class="btn" id="btn">
            Send Review
        </button>
    
    `;
}