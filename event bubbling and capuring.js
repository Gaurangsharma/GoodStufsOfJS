document.querySelector("#grandparent")
.addEventListener('click',()=>{
    console.log("Grandparent Clicked");
},true)//true indicated capturing outer to inner

document.querySelector("#parent")
.addEventListener('click',()=>{
    console.log("Parent Clicked");
},false)// false indicate bubbling inner to outer

document.querySelector("#child")
.addEventListener('click',(e)=>{
    console.log("Child Clicked");
    e.stopPropagation()
},false)//propogation itself is expensive so we stop the propogation through stop propogation
