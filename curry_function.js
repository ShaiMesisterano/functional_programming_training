function curry(fn){
    return function(){
        if (fn.length > arguments.length){
            var slice = Array.prototype.slice;
            var args = slice.apply(arguments);
            return function(){
                return fn.apply(null, args.concat(slice.apply(arguments)));
            };
        }
        return fn.apply(null, arguments);
    }
}

var get = curry(function(prop, obj){
    return obj[prop]; 
});

var add = curry(function(a, b){
    return a + b;
});

// Practice
//var add2  = add(2);
//console.log( add2(3) ); // 5

var cars = [
    {name: 'Volvo', year: 2002},
    {name: 'Audi', year: 2012},
    {name: 'Honda', year: 2010}
];
console.log(
    cars.map(get('year'))
);