const reqUrl = 'https://api.github.com/users/hiteshchoudhary';

const xhr = new XMLHttpRequest();

xhr.open('GET',reqUrl)
xhr.onreadystatechange = function (){
    console.log(xhr.readyState); //4th stage aggi //chnage in state excute this function
    if(xhr.readyState===4){
        const data =  JSON.parse(this.responseText);
        //console.log(data) //response always comes in string need to convert in object
       // console.log(this.responseText)
       console.log(`followers is`,data.followers)
       console.log(`Picture is`,data.avatar_url);
        
    }
}
//console.log(xhr.readyState);

xhr.send()