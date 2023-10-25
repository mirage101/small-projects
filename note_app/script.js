const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

getNotes().forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content);
    appEl.insertBefore(noteEl, btnEl);
});
function createNoteEl(id, content) {
    const element = document.createElement("div");
    element.classList.add("note");

    const textArea = document.createElement("textarea");
    textArea.placeholder = "Empty Note";
    textArea.value = content;
    textArea.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note?");
        if (warning) {
            deleteNote(id, element);
        }
    });
    textArea.addEventListener("input", () => {
        updateNote(id, textArea.value);
    });

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close");
    closeBtn.innerText = "X";
    closeBtn.addEventListener("click", () => {
        deleteNote(id, element);
    });

    element.appendChild(textArea);
    element.appendChild(closeBtn);

    return element;
}

function addnote() {
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    };
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);

    notes.push(noteObj);

    saveNote(notes);
}

function saveNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

function updateNote(id, content) {
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    saveNote(notes);
}

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != note.id);
    saveNote(notes);
    appEl.removeChild(element);
}

btnEl.addEventListener("click", addnote);
