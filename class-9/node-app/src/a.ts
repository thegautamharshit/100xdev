function greet(name:string){
    console.log("hello" + {name})
}

function sum(a:number,b:number): number{
    return a + b;
}

function isLegal(age:number){
    return age > 18;
}

function runAfter1s(fn: ()=> void){
    setTimeout(fn, 1000);
}

runAfter1s(function (){
    console.log("Yoo!")
})

greet("Harshit");
const ans = sum(19,23);
console.log(ans);
isLegal(23)


//================================INTERFACE and TYPE ==========

interface Person{
    name: string;
    age: number;
    greet(phrase:string):void;
}

class Employee implements Person{
    name:string;
    age: number;

    constructor(n:string,a:number){
        this.name = n;
        this.age = a
    }

    greet(phrase:string){
        console.log(`${phrase} ${this.name}`)
    }
}
// Enums

//=============Generics===================

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh",]);
console.log(el.toLowerCase())

//sql postgresql://postgres:iwtomyL@21@localhost:5432/ubuntu_database