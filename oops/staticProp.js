class User {
    constructor (username,email,password){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }

     static createId(){  //static  rok da access to
        return '123'
    }
}

const hitesh = new User("surinder")

//console.log(hitesh.createId())
class  teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }

}

const iphone = new teacher ("iphone" , "iphone@gmail.com")

iphone.logMe()

// console.log(iphone.createId()) not accessable because of static //




