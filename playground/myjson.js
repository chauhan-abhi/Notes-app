// var obj= {
//     name: 'Abhi'
// }

// var stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)
var personString = '{"name":"Abhi", "age": 21}'
var person = JSON.parse(personString)
console.log(typeof person)
console.log(person)