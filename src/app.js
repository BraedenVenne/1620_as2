//Created templates
const textboxTemp = `<textarea id='create-note' rows='30' cols='50' placeholder='Title... \nBody...'></textarea>`
// const saveBtnTemp = `<button id='save'>Save</button>`
// const cancelBtnTemp = `<button id='cancel'>Cancel</button>`
const closeBtnTemp = `<button id='close'>Close</button>`
const saveCancelBtnTemp = "<div><button id='save'>save</button><button id='cancel'>Cancel</button></div>"

const createNotes = document.querySelector('.write-note-area')
const noteBtn = document.querySelector('.fa-circle-plus')
const readNoteArea = document.querySelector('.read-note-area')



//Array used for storing note titles, body, and ids
const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

//Creates a textbox with a save and cancel button
function createNotesArea() {
  noteBtn.removeEventListener('click', createNotesArea)
  createNotes.insertAdjacentHTML('afterend', saveCancelBtnTemp)
  createNotes.insertAdjacentHTML('afterend', textboxTemp)

  if (readNoteArea.contains(document.querySelector('#note-title'))) {
    closeNote()
  }

  const cancelBtn = document.querySelector('#cancel')
  cancelBtn.addEventListener('click', cancelNote)

  const saveBtn = document.querySelector('#save')
  saveBtn.addEventListener('click', saveNote)
}

//Closes the note area after clicking the Cancel button
function cancelNote(evt) {
  const textbox = document.querySelector('#create-note')
  const savebtn = document.querySelector('#save')
  const cancelbtn = document.querySelector('#cancel')
  
  textbox.remove()
  savebtn.remove()
  cancelbtn.remove()
  createNoteBtn()
}

//Saves the note after clicking the Save button
function saveNote(evt) {
  const textbox = document.querySelector('#create-note')
  let text = textbox.value.split('\n')
  let textTitle;
  if (text[0] == '') {
    textTitle = 'No Title'
  } else {
    textTitle = text[0]
  }
  
  let textBody = text.slice(1)
  let id = notes.length + 1
  notes.push({title: textTitle, noteBody: textBody, id: id})
  console.log(notes)
  noteTitles(textTitle)
  noteTitleBtn(id)
  cancelNote(evt)
  createNoteBtn()
}

//Stores the note titles in the side nav list
function noteTitles() {
  const noteID = notes[notes.length - 1]
  const navBar = document.querySelector('.notes-list')
  let titles = `<li id=${noteID.id}>${noteID.title}</li>`
  navBar.insertAdjacentHTML('afterbegin', titles)
}

//Adds event listeners to the titles in the list
function noteTitleBtn(id) {
  const createNoteArea = document.querySelector('.create-note-area')

  const noteTitles = document.getElementById(id)
  noteTitles.addEventListener('click', readNotes)
  if (createNoteArea.contains(document.querySelector('#create-note'))) {
    closeNote()
  }
}

//Opens the saved notes and adds a close button
function readNotes(evt) {
  readNoteArea.insertAdjacentHTML('afterend', closeBtnTemp)
  let hTemp = `<h1 id='note-title'>${notes[evt.target.id - 1].title}</h1>`
  let pTemp = `<p id='note-body'></p>`

  if (readNoteArea.contains(document.querySelector('#note-title'))) {
    closeNote()
    readNoteArea.insertAdjacentHTML('beforeend', hTemp)
    readNoteArea.insertAdjacentHTML('beforeend', pTemp)
  } else {
    readNoteArea.insertAdjacentHTML('beforeend', hTemp)
    readNoteArea.insertAdjacentHTML('beforeend', pTemp)
  }

  for (const words of notes[evt.target.id - 1].noteBody) {
    const noteP = document.querySelector('#note-body')
    noteP.insertAdjacentHTML('beforeend', words)
    noteP.insertAdjacentHTML('beforeend', `<br>`)
  }


  const closeBtn = document.querySelector('#close')
  closeBtn.addEventListener('click', closeNote)


}

//Closes the notes after pressing the Close button
function closeNote() {
  const closeBtn = document.querySelector('#close')
  while (readNoteArea.firstChild) {
    readNoteArea.removeChild(readNoteArea.firstChild)
  }
  closeBtn.remove()
}


//Function that adds the event listener back to the plus button
function createNoteBtn() {
  noteBtn.addEventListener('click', createNotesArea)
}

createNoteBtn()

//Bonus
//Toggles dark-theme
function toggleDarkMode() {
  const mainContainer = document.querySelector('.main-container')
  mainContainer.classList.toggle('dark-theme')
}

const themeBtn = document.querySelector('.theme-toggle')
themeBtn.addEventListener('click', toggleDarkMode)