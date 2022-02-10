setPage(0);
var money = 0;
var table = new table();
table.update();
var store = new supTable();
store.clear();
store.build();
var i = 0;
while (i < vats.length) {
    document.getElementById("demo").appendChild(vats[i].getElement());
    i = i + 1;
}