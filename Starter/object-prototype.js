
function Person(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function(){
    console.log(`Hello my name is ${this.firstName}, ${this.lastName}`);
    
}


let john = new Person('John', 'Doe');
john.greet();

let jane = new Person('Jane', 'Doe');
jane.greet();
console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);



