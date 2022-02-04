function setPage(input) {
    var pages = ["manual","mixer","manage","market"];
    var a = 0;
    while (a < pages.length) {
        document.getElementById(pages[a]).style.display = "none";
        a = a + 1;
    }
    document.getElementById(pages[input]).style.display = "block";
}