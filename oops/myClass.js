//ES6 
//constructor call when we use {new} keyword
/*class User {
    constructor(username,email,password){
        this.username = username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername () {
        return `${this.username.toUpperCase()}`
    }

}



console.log(chai.encryptPassword())

console.log(chai.changeUsername())
*/ 
//behind the seen

function User (username,email,password) {
    this.username =username;
    this.email= email;
    this.passowrd = password


}
const chai = new User ("chai" ,"mamta@love.com","123")

User.prototype.encryptPassword = function() {
    return `${this.passowrd}abc`
}
User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}
console.log(chai.encryptPassword())
console.log(chai.changeUsername())

