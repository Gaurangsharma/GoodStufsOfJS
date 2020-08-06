let name={
    firstname: "Gaurang",
    lastname: "Sharma",
    
}
let fullName=function(hometown,state){
    console.log(this.firstname+" "+this.lastname+" from "+hometown+" state "+state);    
}
fullName.call(name,"Ayodya","Up");
let name2={
    firstname: "Sachin",
    lastname: "Tendulddkar",
}
//function borrowing 
fullName.call(name2,"Mathura","MP");

fullName.apply(name2,["rajola","Panjab"]);

// bind method
let printName=fullName.bind(name,"Mathura","UP");
console.log(printName);
printName();