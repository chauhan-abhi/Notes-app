console.log('starting app')

const fs = require('fs') //load module functionality
const _ = require('lodash')
const yargs = require('yargs')
const notes = require('./notes.js')

const argv = yargs.argv
var command = process.argv[2]
console.log('Command', command)
//console.log('Process', process.argv )
console.log('Yarg', argv)

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if(note) {
        console.log('Note created')
        notes.logNote(note)
    } else {
        console.log('Note title taken')
    }
} else if(command === 'list') {
    notes.getAll()
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
