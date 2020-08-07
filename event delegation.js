
console.log("Hello World");
document.querySelector("#form").addEventListener('click',(e)=>{
    console.log(e);
    // window.location.href="/"+e.target.id;
    if(e.target.dataset.uppercase != undefined){
        e.target.value=e.target.value.toUpperCase();
    }
})