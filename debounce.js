let counter=0;
const normalcall=()=>{
    console.log("Feching details...",counter++);
}

const magicFunction=function(fn,d){
    let timer;
    return function(){
        let context=this,
        arg=arguments;
        clearTimeout(timer);
        timer=setTimeout(()=>{
        fn.apply(context,arg);
        },d);
    }
}

const debounce =magicFunction(normalcall,300);

