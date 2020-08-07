

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#grandparent")
    .addEventListener('click',()=>{
        console.log("Grandparent Clicked");
    },true)//true indicated capturing outer to inner
    
    document.querySelector("#parent")
    .addEventListener('click',()=>{
        console.log("Parent Clicked");
    },true)// false indicate bubbling inner to outer
    
    document.querySelector("#child")
    .addEventListener('click',(e)=>{
        console.log("Child Clicked");
    },true)//propogation itself is expensive so we stop the propogation through stop propogation
    
})
