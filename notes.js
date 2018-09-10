console.log('Starting notes.js')
// module.exports.age =21
// module.exports.add = (a,b) => {
//     return a+b
// }
var addNote = (title,body) => {
    console.log('Adding note', title, body)  
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