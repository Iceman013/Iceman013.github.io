var money = 0;
var markup = 1.25;
var mixup = 1.25;

setPage(0);
var table = new table();
table.update();
var store = new supTable();
store.clear();
store.build();
var i = 0;
while (i < vats.length) {
    var t = document.createElement("div");
    t.classList.add("col-20");
    t.appendChild(vats[i].getElement());
    document.getElementById("demo").appendChild(t);
    i = i + 1;
}