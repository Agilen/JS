var mas = ['hello', 'world', 23, '23', null]
while (true) {
    let type = prompt("Enter the type")

    if (type.toLowerCase() == "undefined" || type.toLowerCase() == "string" || type.toLowerCase() == "number" || type.toLowerCase() == "boolean" || type.toLowerCase() == "symbol" || type.toLowerCase() == "object" || type.toLowerCase() == "function") {
        filterBy(mas, type)
        break;
    }
    else{
        alert("Try again!")
    }
}
function filterBy(mas, type) {



    var trueType = mas.filter(function (elem) {
        if(typeof elem==type)
        return elem
    });

    alert(trueType); 
}



