function f(x,y=7,z=10){
    return x+y+z
}
f(1) ===50

// es5

function f(x,y,z){
    if(y===undefined){
        y=7;
    }
    if(z===undefined){
        z=10
    }
    return x+y+z;
};
f(1) ===50;

//spread operator
var param=["hello",true]
var other=[1,2,...param]

var  str="Gaurang"
var chars=[...str]

// arrow function

odd=evens.map(v=>v+1)
pairs=evens.map(v=>({even:v+1,odd:v}))
nums=evens.map((v,i)=>v+i)

// More expressive closure syntax
array.forEach(element => {
    if (v%5 === 0) {
            fives.push(v)        
    }
});
//Support for method notation in object property definitions, for both regular functions and generator functions.
obj = {
    foo (a, b) {

    },
    bar (x, y) {
    
    },
    *quux (x, y) {
    
    }
}
  
//binary and octal literal
0b111110111 === 503
0o767 === 503

//object maching shorthand notation
var { op, lhs, rhs } = getASTNode()
//in es5
var tmp = getASTNode();
var op  = tmp.op;
var lhs = tmp.lhs;
var rhs = tmp.rhs;

//custom Interpolation
var url=get`http://example.com/foo?bar=${bar + baz}&quux=${quux};

//in es5

get([ "http://example.com/foo?bar=", "&quux=", "" ],bar + baz, quux);




