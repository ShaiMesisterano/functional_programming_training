function compose(g, f){
    return function(x){
        return g(f(x));
    }
}

function add3(num){
    return num + 3;
}

function sub2(num){
    return num - 2;
}

var composed = compose(add3, sub2);
console.log(composed(5));


// ON ERROR
// BEFORE
on_error(function(error){
    log(error.message);
});
// AFTER
on_error(
    compose( log, get('message') )
);