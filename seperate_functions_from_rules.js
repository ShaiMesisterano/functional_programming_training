var get = function(prop){
    return function (obj) {
        return obj[prop];
    };
};

var people = [{
    height: 180
}, {
    height: 187
}, {
    height: 162
}, {
    height: 158
}, {
    height: 190
}];

var heights = people.map(
    get('height')
);

console.log('heights', heights);