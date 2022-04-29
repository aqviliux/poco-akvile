const person1 = {
    name: "John",
    age: 38,
};

person2 = person1;

function printPerson(person) {
    console.log(`the person name is ${person.name} and age is ${person.age}`);
}

printPerson(person1);

//increase the age of this person by years
function increaseAge(person, years) {
    person.age = person.age + years;
}

function Person(name, age, married) {
    this.name = name;
    this.age = age;
    this.isMarried = married;
    this.hello = function () {
        return "Hello " + this.name;
    };
    this.increaseAge = function (years) {
        this.age = this.age + years;
        // this.increaseAge = (years) => { this.age += years;}
    };
}

//functions

calculate(5, 7, "+");

function calculate(num1, num2) {
    return num1 + num2;
}

let calculateArrow = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
            break;
    }
};
calculateArrow(5, 7, "+");

let calcAsExpresion = function (num1, num2, operator) {};

let animals = ["dog", "cat", "mouse"];

for (let i = 0; i < animals.lenght; i++) {
    console.log(animals[i]);
}
//returns just values, no undefined values
animals.forEach((animal) => console.log(animal));

let i = 0;
while (i < animals.lenght) {
    console.log(animals[i]);
    i++;
}
//still go at least one
i = 0;
do {
    console.log(animals[i]);
    i++;
} while (i < animals.lenght);

//for of loop
//using for arrays and get just value logged
//let x = 0;
for (let animal of animals) {
    console.log(animal);
}

//for in loop
//used for objects
//gives the index back
//but returns only values no undefined values
//let x = 0;
for (let x in animals) {
    console.log(animals[x]);
}

const person2 = {
    name: "John",
    age: 38,
    gender: "male",
    isMarried: false,
    hasChildren: false,
    noOfChildren: 0,
    spokenLanguages: ["German", "English", "French"],
    languageSkills: {
        motherTongue: "German",
        advanced: "English",
        basic: ["French", "Fennish"],
    },
};

//for in loop  for object - gives all values back
for (let property in person2) {
    console.log(person2[property]);
}

//this don't work for object!! it works for iterable objects. Use it for array
for (let value of person2) {
    console.log(value);
}

//it works
for (let key in person2) {
    console.log(`${key}: ${person[key]}`);
}

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
