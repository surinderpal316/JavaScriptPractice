document.getElementById('op').innerHTML="<h2>i love mamta</h2>";
console.log("hey-google")
console.log(document.getElementById('op').className);

document.getElementById('op').setAttribute('class','test');
const title = document.getElementById('op');
console.log(title);

title.style.backgroundColor = "green";
title.style.padding= "10px";
title.style.borderRadius = "15px";

console.log(title.textContent);

console.log(title.innerHTML);
console.log(document.getElementsByClassName("cen"));

const list = document.querySelector('ul');
console.log(list);
const li=list.querySelector('li')
console.log(li);
li.style.backgroundColor = "green";
li.innerHTML="four";

const temp = document.querySelectorAll("li");
console.log(temp)
//we cannot do styling in query select or all in simple way

temp[1].style.color= "blue";


const tempClass = (document.getElementsByClassName('cen'));

const classArr = Array.from(tempClass);
console.log(Array);
classArr.forEach(function(li) {
    li.style.color="orange";

})

