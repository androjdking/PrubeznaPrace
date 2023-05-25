var pozdrav = 'Hello World!';
console.log('Hello world');
console.log(pozdrav);

let name = 'Tom' ;
let age = 18;               //type of isAprooved - "boolean"
let isAproved = true;       //type of first name - "uneined"
let firstName = undefined;  
let lastName = null;        
let selectedColor = null; 

//datov typ object
let person = { 
    name: 'Tom',
    age: 18
};
console.log(person); //výstup vnitřek person
console.log(person.name); //výstup jen jméno

//arrays
let selectedColorArray = ['red', 'blue'];
selectedColorArray[2] = 'green';
console.log(selectedColorArray);
console.log(selectedColorArray.length); //počet hodnot v poli(array)

//functions
function greet() {
    console.log('Hellow World!');
}
greet();

function geets(name, lastName) {
    console.log('Hello'+ ' ' + name + ' ' + lastName);
}
greets('John', 'Smith');


function Square(number){
 return number * number;
}
console.log(Square(2));

function sayHello() {
    for(var i=0;i<5;i++){
        console.log(i);
    }
    console.log(i);
}
sayHello();


const Person = {
    name: 'Tomas',
    walk() {
        console.log(this);
    },
    talk() {}
};
Person.talk();
Person.name = '';

const targetMember = 'name';
Person[targetMember.value] = 'Tomas';

Person.walk();
const walk = Person.walk;
walk();


const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
];
const activeJobs = jobs.filter(function(job) {return job.isActive});
const ActiveJobs = jobs.filter(job => job.isActive);


const colors = ['red','green','blue'];
colors.map(color => `<li>${color}</li>`);
console.log(items);


const address = {
    street: '',
    city: '',
    country: ''
};
const street = address.street;
const city = address.city;
const country = address.country;
const {street: st } = address;


class Person1 {
    constructor(name){
        this.name = name;
    }
    walk() {
        console.log("walk");
    }
}
const Person2 = new Person1('Tomas');


class Teacher extends Person1 {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}
import { Teacher } from "./Teacher";
const teacher = new Teacher('Tomas',"MSc");
teacher.teach();


