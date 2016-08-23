function isAdminPage(){
    var url = window.location.href;
    if (url.indexOf('admin') > -1){
        return true;
    }
    return false;
}

function wraplog(wrapper){
    console.log(wrapper, arguments);
}

/*
PURE FUNCTIONS ARE:
Testable
Portable
Memoizable
Parallelizable
*/