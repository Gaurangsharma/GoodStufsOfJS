
const expensive=()=>{
    console.count("Expensive function");
}
window.addEventListener("resize",expensive)

const newexpensive = () =>{
    console.count("Threshold Func");
}

const throttling= function(func,limit){
    let flag=true;
    return function(){
        let context=this;
        let args=arguments;
        if(flag){
            func.apply(context,args);
            flag=false;
            setTimeout(()=>{
                flag=true;
            },limit);
        }
    }
}
const betterfunction= throttling(newexpensive,1000);
window.addEventListener("resize",betterfunction)