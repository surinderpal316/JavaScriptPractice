//Call-Stack

function setUsername (username) {
    this.username = username
    console.log("called")

}

function createUser (username,email,password){
    //setUsername(username) => refrence is pass but not call
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser ("chai","chai@fb.com","1233")
console.log(chai)