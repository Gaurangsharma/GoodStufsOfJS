let arr=[2,3,4,5];

Object.prototype.obj1= {
    name: "Rajan",
    city: "Mathura",
    getInto: function () {
        console.log(this.name+" "+this.city);
    }
}

const obj2={
    name: "Gaurang",
    __proto__:obj1    //good method for object inheritance
}
obj2.__proto__=obj1 //bad method for object inheritence

//goo methor or function inharitance
Function.prototype.multiply=function (){ 
    console.log("Hello");
}
const mul=function(){
    console.log("Radhey");
}
mul();
    