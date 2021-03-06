console.clear();
var _ = R;
var P = PointFree;
var map = P.fmap;
var compose = P.compose;
var Maybe = P.Maybe;
var Identity = P.Id;

var Either = folktale.data.Either;
var Left = Either.Left;
var Right = Either.Right;
var IO = P.IO.IO;
var runIO = P.IO.runIO;
P.IO.extendFn();

var log = function(x){ console.log(x); return x; }

// Exercise 1
// ==========
// Write a function that uses checkActive() and showWelcome() to grant access or return the error
var showWelcome = compose(_.add( "Welcome "), _.get('name'))

var checkActive = function(user) {
 return user.active ? Right(user) : Left('Your account is not active')
}

var ex1 = compose(map(showWelcome), checkActive);

console.log(Left('Your account is not active'), "=", ex1({active: false, name: 'Gary'}))
console.log(Right('Welcome Theresa'), "=", ex1({active: true, name: 'Theresa'}))



// Exercise 2
// ==========
// Write a validation function that checks for a length > 3. It should return Right(x) if it is greater than 3 and Left("You need > 3") otherwise
console.log("--------Start exercise 2--------")

var ex2 = function(x) {
    return x.length > 3 ? Right(x) : Left("You need > 3");
//   return "TODO: write me";
}


console.log(Right("fpguy99"), ex2("fpguy99"))
console.log(Left("You need > 3"), ex2("..."))





// Exercise 3
// ==========
// Use ex2 above and Either as a functor to save the user if they are valid

var save = function(x){ console.log("SAVED USER!"); return x; }

var ex3 = compose(map(save), ex2);

console.log("--------Start exercise 3--------")
console.log(Right("fpguy99"), ex3("fpguy99"))
console.log(Left("You need > 3"), ex3("duh"))
console.log("exercise 3...ok!")






// Exercise 4
// ==========
// Get the text from the input and strip the spaces
console.log("--------Start exercise 4--------")

var getValue = function(x){ return document.querySelector(x).value }.toIO()
var stripSpaces = function(s){ return s.replace(/\s+/g, ''); }

var ex4 = compose(map(stripSpaces), getValue);

console.log("honkeytonk", runIO(ex4('#text')));
console.log("exercise 4...ok!")





// Exercise 5
// ==========
// Use getHref() / getProtocal() and runIO() to get the protocal of the page.
var getHref = function(){ return location.href; }.toIO();
var getProtocal = compose(_.head, _.split('/'))
var ex5 = compose(map(getProtocal), getHref);

console.log("--------Start exercise 5--------")
console.log('http:', runIO(ex5(null)))
console.log("exercise 5...ok!")





// Exercise 6*
// ==========
// Write a function that returns the Maybe(email) of the User from getCache(). Don't forget to JSON.parse once it's pulled from the cache so you can _.get() the email

// setup...
localStorage.user = JSON.stringify({email: "george@foreman.net"})

var getCache = function(x){ return Maybe(localStorage[x]); }.toIO();
var ex6 = undefined

console.log(Maybe("george@foreman.net"), runIO(ex6('user')))
console.log("exercise 6...ok!")
