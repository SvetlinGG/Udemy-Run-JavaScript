// Function statement 
function greet(){
    console.log('Hi');
    
}
greet();

// Functions are first-class

function logGreeting(fn){
    fn()
}
logGreeting(greet);

// Function expression 

let greetMe = function(){
    console.log('Hi Tony!');
    
}
greetMe();

// It's first - class

logGreeting(greetMe)

// Use a function expression on the fly

logGreeting(function(){
    console.log('Hello Again Tony!');
    
});