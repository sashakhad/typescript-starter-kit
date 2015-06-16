console.log('Hello World')

///////////////////ES6 Features

//Classes
class Test {}
var t = new Test();

//Destructuring
function displayPerson(p) {
    let {name, age} = p;
    console.log(name, age);
}

var john = { name: "John", age: 20 };
displayPerson(john); 

//Swapping
var a = 1;
var b = 2;

[b, a] = [a, b];
console.log(a, b)

//Let + Const
let shmoosh = "shmoosh"
console.log(shmoosh)
const Gaia = "Gaia"

let nums = [1, 2, 3]
console.log(nums)
console.log(...nums) 

//Generators
function * idMaker() {
    var index = 0;
    while (index < 3)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined

//////////////Types

//Boolean
var truth: boolean = true
truth = "truth"

//Number
var six: number = 6;

//String
var name: string = "foo";
name = "bar"



//Any Type
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; 

var list: any[] = [1, true, "free"];

list[1] = 100;

//Void type
var sayHi = function(): void {
    console.log("hi");
}

sayHi = "hi"

