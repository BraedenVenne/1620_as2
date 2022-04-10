const textboxTemp = `<textarea id='create-note' rows='30' cols='50'></textarea>`
const saveBtnTemp = `<button id='save'>Save</button>`
const cancelBtnTemp = `<button id='cancel'>Cancel</button>`
const createNotes = document.querySelector('.write-note-area')
const btn = document.querySelector('.fa-circle-plus')


const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]


function createNotesArea() {
  createNotes.insertAdjacentHTML('afterend', cancelBtnTemp)
  createNotes.insertAdjacentHTML('afterend', saveBtnTemp)
  createNotes.insertAdjacentHTML('afterend', textboxTemp)
  
  const cancelBtn = document.querySelector('#cancel')
  cancelBtn.addEventListener('click', cancelNote)

  const saveBtn = document.querySelector('#save')
  saveBtn.addEventListener('click', saveNote)
}


function cancelNote(evt) {
  const textbox = document.querySelector('#create-note')
  const savebtn = document.querySelector('#save')
  const cancelbtn = document.querySelector('#cancel')
  
  textbox.remove()
  savebtn.remove()
  cancelbtn.remove()
}


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


function noteTitles(evt) {
  const noteID = notes[notes.length - 1]
  const navBar = document.querySelector('.notes-list')
  let titles = `<li id=${noteID.id}>${noteID.title}</li>`
  navBar.insertAdjacentHTML('afterbegin', titles)
}


function noteTitleBtn(id) {
  const noteTitles = document.getElementById(id)
  noteTitles.addEventListener('click', readNotes)
}

function readNotes() {
  alert('Test')
}


btn.addEventListener('click', createNotesArea)
