console.log('starting app')
const fs = require('fs') //load module functionality
//const os = require('os')
const _ = require('lodash')
const yargs = require('yargs')
const notes = require('./notes.js')
const argv = yargs.argv
var command = process.argv[2]
console.log('Command', command)
console.log('Process', process.argv )
console.log('Yarg', argv)

if(command === 'add') {
    notes.addNote(argv.title, argv.body)
} else if(command === 'list') {
    notes.getAll()
} else if(command === 'read') {
    notes.getNote(argv.title)
} else if(command === 'remove') {
    notes.removeNote(argv.title)
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
