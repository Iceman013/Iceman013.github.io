var money = 0;
var x = document.cookie;
if (x.length != 0){
    var cookieAr = x.split(";")
    money = parseInt(x[0].substring(6,x[0].length))
}
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