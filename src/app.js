const createNote = document.querySelector('.create-note-area')
const btn = document.querySelector('.icons')
const noteArea = `<textarea class='create-note' rows='30' cols='50'></textarea>`
const savebtn = `<button class='savedel'>save</button>`
const cancelbtn = `<button class='savedel'>cancel</button>`
const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]


function createNotesArea() {
  createNote.insertAdjacentHTML('afterend', cancelbtn)
  createNote.insertAdjacentHTML('afterend', savebtn)
  createNote.insertAdjacentHTML('afterend', noteArea)
}


btn.addEventListener('click', createNotesArea)