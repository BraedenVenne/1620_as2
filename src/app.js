//Created templates
const textboxTemp = `<textarea id='create-note' rows='30' cols='50'></textarea>`
const saveBtnTemp = `<button id='save'>Save</button>`
const cancelBtnTemp = `<button id='cancel'>Cancel</button>`
const closeBtnTemp = `<button id='close'>Close</button>`
const hTemp = `<h1></h1>`
const pTemp = `<p></p>`

const createNotes = document.querySelector('.write-note-area')
const noteBtn = document.querySelector('.fa-circle-plus')

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
  createNotes.insertAdjacentHTML('afterend', cancelBtnTemp)
  createNotes.insertAdjacentHTML('afterend', saveBtnTemp)
  createNotes.insertAdjacentHTML('afterend', textboxTemp)
  
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
}

//Stores the note titles in the side nav list
function noteTitles(evt) {
  const noteID = notes[notes.length - 1]
  const navBar = document.querySelector('.notes-list')
  let titles = `<li id=${noteID.id}>${noteID.title}</li>`
  navBar.insertAdjacentHTML('afterbegin', titles)
}

//Adds event listeners to the titles in the list
function noteTitleBtn(id) {
  const noteTitles = document.getElementById(id)
  noteTitles.addEventListener('click', readNotes)
}

//Opens the saved notes and adds a close button
function readNotes() {
  createNotes.insertAdjacentHTML('afterend', closeBtnTemp)

  

  const newNote = notes[notes.length - 1]
  let noteTitle = `<h1 id=${newNote.id}>${newNote.title}</h1>`
  let note = `<p id=${newNote.id}>${newNote.noteBody}</p>`
  createNotes.insertAdjacentHTML('afterend', noteTitle)
  createNotes.insertAdjacentHTML('afterend', note)

  const closeBtn = document.querySelector('#close')
  closeBtn.addEventListener('click', closeNote)
}

//Closes the notes after pressing the Close button
function closeNote(evt) {
  evt.currentTarget.remove()
}

//Opens the note area after pressing the plus button
noteBtn.addEventListener('click', createNotesArea)

//Bonus
//Toggles dark-theme
function toggleDarkMode(evt) {
  const mainContainer = document.querySelector('.main-container')
  if (evt.checked == true) {
    mainContainer.classList.toggle('light-theme')
  } else {
    mainContainer.classList.toggle('dark-theme')
  }


}

const themeBtn = document.querySelector('.theme-toggle')
themeBtn.addEventListener('click', toggleDarkMode)