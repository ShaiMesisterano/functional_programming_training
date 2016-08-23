var articles = [
  {
    title: 'Everything Sucks',
    url: 'http://do.wn/sucks.html',
    author: {
      name: 'Debbie Downer',
      email: 'debbie@do.wn'
    }
  },
  {
    title: 'If You Please',
    url: 'http://www.geocities.com/milq',
    author: {
      name: 'Caspar Milquetoast',
      email: 'hello@me.com'
    }
  }
];

// -- Challenge 1 -------------------------
// Return a list of the author names in
// articles using only get, _.compose, and
// _.map.

var get = R.curry(function(x, obj) { return obj[x]; });

var names = R.map( R.compose(get('name'), get('author')) ); // change this

console.log(
  ['Debbie Downer', 'Caspar Milquetoast'],
  names(articles)
);

// -- Challenge 2 -------------------------
// Make a boolean function that says whether
// a given person wrote any of the articles.
// Use the names function you wrote above
// with _.compose and _.contains.

var isAuthor = function(name, articles){
    return R.compose( R.contains(name), names )( articles );
}
    
console.log(
  false,
  isAuthor('New Guy', articles)
);
console.log(
  true,
  isAuthor('Debbie Downer', articles)
);

// -- Challenge 3 -------------------------
// There is more to point-free programming
// than compose! Let's build ourselves
// another function that combines functions
// to let us write code without glue variables.

var fork = R.curry(function(lastly, f, g, x) {
  return lastly(f(x), g(x));
});

// As you can see, the fork function is a
// pipeline like compose, except it duplicates
// its value, sends it to two functions, then
// sends the results to a combining function.
//
// Your challenge: implement a function to
// compute the average values in a list using
// only fork, _.divide, _.sum, and _.size.

var avg = fork(R.divide, R.sum, R.size); // change this
console.log(3, avg([1,2,3,4,5]));