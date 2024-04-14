let myName = "Surinder     "
//console.log(myName.trim().length)// not good approch low iq


console.log(myName.trueLength)

const myHero  = ["thor","spiderman"]


const myItem = {
    pencil: "writing",
    rubber: "eraser",

    getInventory: function (){
        console.log(`This Item is a Good ${this.rubber}`)
    }
}

//factory functions

Object.prototype.hitesh = function() { //=> refer to all array // object but whyb???
    console.log(`hitsh is present in all subject`)
}
Array.prototype.suri =  function () {
    console.log(`This is Surinder this side`)
}

myItem.hitesh()
myHero.hitesh()

//myItem.suri() => dont have power
const User = {
    name:"chai",
    class:"5"

}

const teacher = {
    makeVideo :  true
}

const techSupport = {
    isAvailble : false
}

const taSupport = {
    makeAssignment : true,
    fullTime:true,
    __proto__:techSupport
}

teacher.__proto__ = User

console.log(teacher.name)

//modern inheritance

Object.setPrototypeOf(teacher,techSupport)

console.log(teacher.isAvailble)


let anotherUsername  = "chaiAurCode  "
let myUser = "guru baba bhola"
String.prototype.trueLenght = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`TrueLenght is ${this.trim().length}`)
}

anotherUsername.trueLenght()

"love mamta".trueLenght()