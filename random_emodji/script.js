//API https://emoji-api.com/
const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji =[];

async function getEmoji(){
    let response = await fetch(`https://emoji-api.com/emojis?access_key=ab6102a4271a4a71b020be3cfdc4d5c7eab1b7a1`);
    const data = await response.json();
    // console.log(data);
    for(let i=0; i < data.length;i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName
        })
    }

}

getEmoji();

console.log(emoji)

btnEl.addEventListener("click", ()=> {
 const randNum = Math.floor(Math.random() * emoji.length +1);
 btnEl.innerText= emoji[randNum].emojiName;
 emojiNameEl.innerText = emoji[randNum].emojiCode;
})

document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for form submission
    document.getElementById('searchForm').addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Get the value from the search input
        const inputValue = document.getElementById("emojiSearch").value.toLowerCase();

        if (inputValue === "") {
            return;
        }

        try {
            const response = await fetch(`https://emoji-api.com/emojis?search=${inputValue}&access_key=ab6102a4271a4a71b020be3cfdc4d5c7eab1b7a1`);
            const data = await response.json();

            if (data.length > 0) {
                // Update the displayed emoji based on search results
                const resultEmoji = data[0]; // Assuming you want to display the first result
                emojiNameEl.innerText = resultEmoji.unicodeName;
                btnEl.innerText = resultEmoji.character;
            } else {
                // Handle the case where no emoji is found
                console.log('No emoji found for the search term:', inputValue);
            }
        } catch (error) {
            console.error('Error during emoji search:', error);
        }
    });
});