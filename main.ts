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


//////////////Types

//Boolean
var truth: boolean = true

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
function sayHi(): void {
    console.log("hi");
}


