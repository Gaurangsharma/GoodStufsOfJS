var finalobj={};
let user={
    name: "Gaurang",
    address: {
        personal:{
            city: "Mathura",
            area: "Krishna Nagar"
        },
        office:{
            city: "Banglore",
            area: "White Field"
        }
    }
}
let magic=function (obj,parent){
    for(let key in obj){
        if(typeof(obj[key])=='Object'){
            magic(obj[key],parent+"_"+key)
        }
        else{
            finalobj[parent+"_"+key]=obj[key];
        }
    }
}
magic(user,"user")
for (let i in finalobj){
    console.log(i+" "+finalObj[i]);
}
console.log(finalobj);