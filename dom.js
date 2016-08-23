// BEFORE
function summary(words, el){
    setText(el, slice(0, words, getText(el)));
}

map(summary(50), document.getElementsByClassName('p'));

// AFTER
var summary = slice(0);
map( compose(setText, summary(50), getText(el)), document.getElementsByClassName('p') );