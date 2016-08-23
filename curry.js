//var greet = function(greeting, name) {
//  console.log(greeting + ", " + name);
//};
//greet("Hi", "Shai");

var curryGreeting = function(greeting){
    return function(name){
        return function(age){
            console.log(greeting, name, age);
        }
    }
}

var greeting = curryGreeting('hi');
var age = greeting('Shaike');
age('30');