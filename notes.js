// module.exports.age =21
// module.exports.add = (a,b) => {
//     return a+b
// }
const fs = require('fs')

var fetchNotes = () => {
    // read file if already created    
    try {
        var notesString =  fs.readFileSync('notes-data.json')
        return JSON.parse(notesString)
    } catch (e) {
        return []
    }
} 

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title,body) => {
    var notes = fetchNotes()
    var note = {
        title,
        body
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
        saveNotes(notes)
        return note
    } 
}
var getAll = () => {
    return fetchNotes();
}

var getNote = (title) => {
    var notes = fetchNotes()
    var thisNotes = notes.filter((note) => note.title === title)
    return thisNotes[0]
}

var removeNote = (title) => {
    var notes = fetchNotes()
    var filteredNotes = notes.filter((note) => note.title !== title) 
    saveNotes(filteredNotes)
    return notes.length !== filteredNotes.length
}

var logNote = (note) => {
    console.log('--')
        console.log(`Title: ${note.title}`)
        console.log(`Body: ${note.body}`)
}

module.exports = {
    //addNote: addNote   in < es6
    addNote,               // in es6
    getAll,
    getNote,
    removeNote,
    logNote
}