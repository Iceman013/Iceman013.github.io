const quoteList = quoteLista.concat(quoteListb);

function getNames() {
    var peopleInput = document.getElementById("names").value;
    var names = [];
    while (peopleInput.includes("\n")) {
        names.push(peopleInput.substring(0, peopleInput.indexOf("\n")));
        peopleInput = peopleInput.substring(peopleInput.indexOf("\n") + 1);
    }
    names.push(peopleInput);
    for (let i = 0; i < names.length; i++) {
        if (names[i] == "") {
            names.splice(i, 1);
            i--;
        }
    }

    return names;
}
function getList(size) {
    var list = [];
    for (let i = 0; i < quoteList.length; i++) {
        if (quoteList[i].getCount() == size) {
            list.push(quoteList[i]);
        }
    }
    return list;
}
function makeQuote(input) {
    var out = document.getElementById("output");

    var names = getNames();

    var list = getList(names.length);
    if (list.length == 0) {
        console.log("No quotes meeting specifications");
        return;
    }

    var r = -1;
    if (input) {
        r = out.value;
    } else {
        r = Math.floor(list.length*Math.random());
    }
    var chosen = list[r];

    chosen.show(names, out);
    out.value = r;
}