const fs = require('fs') //load module functionality
const _ = require('lodash')
const yargs = require('yargs')
const notes = require('./notes.js')

const titleOptions =  {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}
//const argv = yargs.argv
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv

var command = process.argv[2]
console.log('Command', command)
//console.log('Process', process.argv )
//console.log('Yarg', argv)

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if(note) {
        console.log('Note created')
        notes.logNote(note)
    } else {
        console.log('Note title taken')
    }
} else if(command === 'list') {
    var allNotes = notes.getAll()
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach((note)=> notes.logNote(note));
    // allNotes.forEach((note) => {
    //     notes.logNote(note)
    // });
} else if(command === 'read') {
    var note = notes.getNote(argv.title)
    if (note) {
        console.log('Note found')
        notes.logNote(note)
    } else {
        console.log('Note not found')
    }
} else if(command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title)
    var msg = noteRemoved ? 'Note was removed' : 'Note not found'
    console.log(msg)
} else {
    console.log('Command not recognized')
}
// console.log(_.isString(true))
// console.log(_.isString('abhi'))

// var res = notes.add(1,-3)
// console.log(res)
// var user = os.userInfo()
// fs.appendFile('greetings.txt', 'Hello '+notes.age, function(err){
// 	if(err) {
// 		console.log('unable to write to file')
// 	}
// })
