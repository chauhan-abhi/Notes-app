console.log('Starting notes.js')
// module.exports.age =21
// module.exports.add = (a,b) => {
//     return a+b
// }
const fs = require('fs')
var addNote = (title,body) => {
    var notes = []
    var note = {
        title,
        body
    }
    // read file if already created 
    try {
        var notesString =  fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString)
    } catch (e) {
        
    }
    // var duplicateNotes = notes.filter((note) => {
    //     // if this method returns true element will be added
    //     //otherwise not
    //    return note.title === title 
    // })

    // valid error function in ES6
    var duplicateNotes = notes.filter((note) => note.title === title)
    if(duplicateNotes.length === 0) {
        notes.push(note)
        fs.writeFileSync('notes-data.json', JSON.stringify(notes))
    } 
}
var getAll = () => {
    console.log('Getting all notes')
}

var getNote = (title) => {
    console.log('Getting node', title)
}

var removeNote = (title) => {
    console.log('Removing node:', title)
}

module.exports = {
    //addNote: addNote   in < es6
    addNote,               // in es6
    getAll,
    getNote,
    removeNote
}