let firstName = 'Jane';

(function (lastName){

 let firstName = 'John';
 console.log(firstName);
 console.log(lastName);
 
}('Doe'));

console.log(firstName);
