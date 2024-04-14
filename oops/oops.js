//javascript and classes

//oop classes are just programing paradigram(style)  class oriented 
//collection of property and methods

//why we use OOP
//OOPs provide good code structure and resueablitity
//parts of oop
//constructor and prototype //classes // instancec(new,this)

//4pillar
//abstraction => hide internal deatil (fetching)
//encapsulation => wrapping data()
//inheritance => refer to prototype
//polymorphises => one method many from


//constructor function
const user = {
    username: "hitesh",
    loginCount : 8,
    signedIn : true,
    
    getUserDeatil : function () {
        console.log(this)
        console.log("Got user Deatil from Database")
       // console.log(`Username: ${username}`)=> undefinded
      console.log(`Username: ${this.username}`) // => this will print hitesh 
    }
}

// new keywork is constructor function 



// console.log(user.username)
//console.log(user.getUserDeatil());//=> undefinded
//console.log(`global context`,this)//=> empty value in node envourment //in broswer there are many things


//userScehma
function User (username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function (){
        console.log(`welcome ${this.username}`)
    }
     // return this //bydeafult return no need 
}
// new keyword is nesscary because other wisw userTwo value get  override in userone
//on new keyword a empty object is created
const userOne = new User("hitesh" ,12,true)
const userTwo =  new User("Chai" ,22,true)
console.log(userOne.constructor); //=> [Function : User]

//console.log(userOne);
//console.log(userTwo);

//google => instanceof user in javascript


