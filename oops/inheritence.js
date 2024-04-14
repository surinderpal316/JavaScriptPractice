class User {
    constructor (username){
        this.username =username

    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends User {
    constructor(username,email,password){
        super(username) // it will go to user class and get access
        this.email = email
        this.password = password
    }
    addCourse () {
        console.log(`Added new course ${this.username}`)
    }
}

const surinder =  new teacher("sunny","chai@gmail.com","asa")

surinder.addCourse()



const sunny = new User("mamta")
//sunny.logMe()

//.log(sunny)

console.log(surinder instanceof User)