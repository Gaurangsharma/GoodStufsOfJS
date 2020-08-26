let multiply=(x,y)=>{
    console.log(x*y);
}

//bind method

const multiplybytwo= multiply.bind(this,2);
multiplybytwo(5);
multiplybytwo(6);


const multiplybyThree= multiply.bind(this,7);
multiplybyThree(5);


//clouser method
let multiplyy=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiByTwo=multiplyy(2);
multiByTwo(9);