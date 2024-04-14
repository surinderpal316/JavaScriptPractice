//related to object


//

//cant change like that
/*console.log(Math.PI)
Math.PI=5
console.log(Math.PI)*/

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(descripter)


const surinder = {
    name:"sunny",
    class:"betch",
    isNow:true,
    order: function(){
        console.log("chai nhi bani")
    }
}


//console.log(Object.getOwnPropertyDescriptor(surinder, "name"));


Object.defineProperty(surinder,'name',{
   // writable:false,
    enumerable:false,
})

// console.log(Object.getOwnPropertyDescriptor(surinder,"name"));
 

//object is not itrable
for(const [key,value] of Object.entries(surinder)){
    if(typeof value !== 'function'){
        console.log(`${key} and ${value}`)
    }
 
}

//pie nu chnage krna wa brother
