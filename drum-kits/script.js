const kits = ["crash", "kick", "snare", "tom"];
const sounds = ["drum-kits_sounds_crash.mp3", "drum-kits_sounds_kick.mp3", "drum-kits_sounds_snare.mp3", "drum-kits_sounds_tom.mp3"];
const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  const legendText = document.createElement("span");
  const instrumentWrap = document.createElement("div");
  containerEl.appendChild(instrumentWrap);
  instrumentWrap.appendChild(btnEl);
  instrumentWrap.appendChild(legendText);
  instrumentWrap.classList.add("instrument-part");
  btnEl.classList.add("btn");
  btnEl.setAttribute("id", kit);
  btnEl.innerText = kit;
  btnEl.style.textTransform = "capitalize";
  btnEl.addEventListener("click", () => {
    const audioEl = document.createElement("audio");
    audioEl.src = `sounds/drum-kits_sounds_${kit}.mp3`;
    audioEl.play();
    btnEl.style.transform = "scale(1.2)";
    setTimeout(() => {
      btnEl.style.transform = "scale(1)";
    }, 100);
  });
  legendText.classList.add("legend");
  legendText.innerText = "Press for '" + kit.toUpperCase() + "' key: " + kit.toUpperCase().slice(0, 1);
});

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  switch (key) {
    case "s": // 'S' key for Snare
      document.getElementById("snare").click();
      break;
    case "k": // 'K' key for Kick
      document.getElementById("kick").click();
      break;
    case "c": // 'C' key for Crash
      document.getElementById("crash").click();
      break;
    case "t": // 'T' key for Tom
      document.getElementById("tom").click();
      break;
    default:
      break;
  }
});
