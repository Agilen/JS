function iter(target) {
    var ul = document.createElement('ul'),
        li;

    target.appendChild(ul);
    return function (a) {
        if (Array.isArray(a)) {
            if (!li) {
                li = document.createElement('li');
                ul.appendChild(li);
            }
            a.forEach(iter(li));
            return;
        }
        li = document.createElement('li');
        li.appendChild(document.createTextNode(a));
        ul.appendChild(li);
    };
}

var myArray = ['Value 1', ['Inner value 1', 'Inner value 2', 'Inner value 3', 'Inner value 4'], 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6'];

myArray.forEach(iter(document.getElementById('myList')));

