// Classes & Objects!
let student = {
    fullName : "Shravan Jindal",
    age : 20,
    sayhello () {
        console.log("Hello!");
    }
}

let arr = [1,2,3];

console.dir(student);
console.dir(arr);

// prototype is a reference to an object

// Classes

class toyotaCar{
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new toyotaCar();
fortuner.setBrand("fortuner");

console.log(fortuner);
fortuner.start();

// constructor() menthod is special method. - to initialize the object.

// inheritance

class a{
    constructor(){
        console.log("class a object was made");
    }
    hello () {
        console.log("class a");
    }
}

class b extends a{
    constructor() {
        super(); // super keyword - calls parent constructor first
        console.log("class b object was made"); 
    }
    hi () {
        console.log("class b");
    }
    hello() {
        console.log("class b says helo");
    }
}

class c extends b{
    bye () {
        console.log("class c");
    }
}

let obj = new c();

let obj2 = new b();

                      