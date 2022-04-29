//new object type - class
//but it is just new version of function Person() {}
//try to copy other languages

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayAge() {
        console.log(this.age);
    }
}

const seb = new Person("Seb", 25);
console.log(seb.name);
seb.sayAge();

//class of animals
class Animal {
    constructor(name, age, isSleeping) {
        this.name = name;
        this.age = age;
        this.isSleeping = isSleeping;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }

    move() {
        console.log(`${this.name} is walking.`);
    }
}

//be more specific about specific animals
//bird class extends animal class
class Bird extends Animal {
    constructor(name, age, isSleeping, flownDistances) {
        super(name, age, isSleeping);
        this.flownDistances = flownDistances;
    }
    fly() {
        console.log(`${this.name} is flying.`);
    }
}

let parrot = new Bird("Hans", 2, false);
parrot.move();
//it returns parrot is walking
//......................
//need to explain it more

//.......................

const obj = {
    person: "Susanne",
    age: 38,
    experience: 13,
};

/** the way we know */
const person2 = obj.person;
let age2 = obj.age;
let experience2 = obj.experience;

/** destructured */
//if I need just specific property and faster creates variables
//if the variables are the same as objects properties
//you can use let or cont for not changing properties
const { person } = obj;
let { age3, experience3 } = obj;
console.log(age);
console.log(person);

const dominic = {
    age: 22,
    name: "Dominic",
    experience: NaN,
};
const { age } = dominic;
//and it look in dominic object, creates new  variable and assigns the value
//but it is not so common using thing

//dynamic property

//
const s1 = Symbol("s1");
const s2 = Symbol("s1");
console.log(s1 === s2);
//returns false because symbols is unique
//like identifier

const possibleStatus = {
    OPEN: Symbol("open"),
    IN_PROGRESS: Symbol("in_progress"),
};
