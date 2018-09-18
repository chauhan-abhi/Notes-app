var square = (x) => x*x
console.log(square(3))

//also correct
//var square = x => x*x
//console.log(square(3))
var user = {
    name: 'Abhi',
    sayHi: () => {
        console.log(arguments)
        console.log(`Hi.. I am ${this.name}`)
    },
    //ES6 function alternate this keyword not bind in above
    // Arrow Function described below
    sayHiAlt () {
        console.log(arguments)
        console.log(`Hi.. I am ${this.name}`)
    }
}

user.sayHiAlt(1,2,3)