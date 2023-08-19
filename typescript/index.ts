const age: number = 30;
const isStudent: boolean = true;
const hobbies: string[] = ["reading", "swimming", "coding"];

function sayHello(str: string): void {
    console.log(`Hello ${str}!`)
}

sayHello('World');

interface Person {
    name: string;
    age: number;
    isStudent?: boolean;
}
function introduce(person: Person): void {
    console.log(`My name is ${person.name} and I'm ${person.age} years old.`);
}

let john: Person = { name: "John", age: 30 };

introduce(john);