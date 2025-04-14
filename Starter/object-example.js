
let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
        
    }
};

person.greet();

//console.log(person['firstName'], person['lastName']);
//console.log(person.greet());

