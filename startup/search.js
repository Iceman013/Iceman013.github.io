function search(query) {
    if (query.slice(0, 7) == "http://") {
        // window.location.href = query
        window.open(query, "_self");
    } else {
        // window.location.href = "https://www.google.com/search?q=" + query
        debugger;
        window.open("https://www.google.com/search?q=" + query, "_self");
    }
}
function google() {
    var question = document.getElementById("search").value;
    search(question);
}
function focusOn() {
    document.getElementById("searchForm").search.focus({focusVisible: true});
}
focusOn();