//creating class and inside create constructor and function
class sindhu {
    constructor(name) {
        this.name = name;
    }

    hello(){
        console.log(`Hello ${this.name}`)
    }

}
 
let obj = new sindhu('JavaScript');
console.log(obj.name); 

obj.hello()

//creating multiple functions inside one class

class yash {
    good(a,b){
    console.log(a+b)
    }

    bad(c,d){
        // console.log(a, d)
        console.log(d)
    }
   
}

let obj1 = new yash()
obj1.good(8,8,8)
obj1.bad(4,8)

//creating functions

function add(num1, num2) { 
    return num1 + num2;    
}
console.log(add(2,9));