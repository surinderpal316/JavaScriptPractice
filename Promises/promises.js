//fetch('http://somthing.com').then().catch.finally()


//creating promises

const promiseOne =  new Promise(function(resolve,reject){
    //callback
    //async task
    //network call
    setTimeout(function(){
        console.log("Async task is complted")
        resolve()
    },1000)
})
//promises  consuption

promiseOne.then(function(){
    console.log("promises is consumed");
})


new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("second promies is full fill")
})


//resolve diretly connected to then 
const promiesThree = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email: "chai@example.com"})
    },1000)
    
})
//parameter passing
promiesThree.then(function(user){
    console.log(user);
})


const promiesFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"guru",email:"suri@gmail.com"})
        }else{
            reject('Error: something went wrong')
        }

    },1000)
})

promiesFour.then((user)=> {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)

}).catch(function(error){
    console.log("err")  
}).finally(function(){
    console.log("task 4  either done or not done")
})



//async + Promises

const promiseFive = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JavaScript",email:"mamta@gmail.com"})
        }else{
            reject('Error: JS WENT WRONG')
        }
    },1000)
    
    //async need try catch for promises
});
async function consumePromiseFive () {
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error)
    }
}
consumePromiseFive();

async function getUser () {
    try {
      const response = await fetch ('https://api.github.com/users/hiteshchoudhary')
      //console.log(response)
    const data =  await response.json()
    console.log(data)
    }catch(error){
        console.log("E:,error");
    }
}
// getUser()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=> {
    return response.json()
}).then((data)=> {
    console.log(data)
})
.catch((err)=> console.log(err))