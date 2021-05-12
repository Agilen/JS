var myArray = [
    "Зовнішній 1",
    "Зовнішній 2",
    "Зовнішній 3",
    "Зовнішній 4",
    "Зовнішній 5",
    "Зовнішній 6",
    "Зовнішній 7",
    "Зовнішній 8",
  ];
  
  var div = document.getElementById("myList");
  var ul = document.createElement("ul");
  var li;
  
  function addLiInUl(item) {
    if (Array.isArray(item)) {
    } else {
      li = document.createElement("li");
      li.appendChild(document.createTextNode(item));
      ul.appendChild(li);
    }
  }
  
  div.appendChild(ul);
  myArray.map(addLiInUl);