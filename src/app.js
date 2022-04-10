const textboxTemp = `<textarea id='create-note' rows='30' cols='50'></textarea>`
const saveBtnTemp = `<button id='save'>Save</button>`
const cancelBtnTemp = `<button id='cancel'>Cancel</button>`
const createNotes = document.querySelector('.create-note-area')
const btn = document.querySelector('.icons')


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
  var text = textbox.value.split('\n')
  var textTitle = text[0]
  var textBody = text.slice(1)
  
  notes.push({title: textTitle, noteBody: textBody, id:notes.length + 1})
  console.log(notes)

  cancelNote(evt)
}


btn.addEventListener('click', createNotesArea)
