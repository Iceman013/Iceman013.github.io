var showList = ["the owl house","the ghost and molly mcgee","miraculous ladybug"];
function getShowCall(name) {
    var url = "https://api.tvmaze.com/singlesearch/shows?q=";
    var realName = "";
    for (let i = 0; i < name.length; i++) {
        if (name.substring(i, i + 1) == " ") {
            realName += "+";
        } else {
            realName += name.substring(i, i + 1);
        }
    }
    return url + realName;
}
function removeTags(input) {
    var output = "";
    var between = false;
    for (let i = 0; i < input.length; i++) {
        if (input.substring(i, i + 1) == "<") {
            between = true;
        }
        if (!between) {
            output += input.substring(i, i + 1);
        }
        if (input.substring(i, i + 1) == ">") {
            between = false;
        }
    }
    return output;
}
function makeShow(data) {
    // Base
    var base = document.createElement("div");
    base.classList.add("show");
    base.style.backgroundImage = "url('" + data.image.original + "')";
    document.getElementById("shows").appendChild(base);

    // Title Section
    var tBase = document.createElement("div");
    tBase.classList.add("showTitle");
    base.appendChild(tBase);

    // Title
    var title = document.createElement("h3");
    title.classList.add("title");
    title.innerHTML = data.name;
    tBase.appendChild(title);

    setTimeout(function() {
        dBase.style.minHeight = "calc(100% - " + tBase.clientHeight + "px)";
    }, 100);
    
    // Detail Section
    var dBase = document.createElement("div");
    dBase.classList.add("showDetails");
    base.appendChild(dBase);
    
    // Details
    function makeDropDown(element, name, content) {
        var category = document.createElement("p");
        category.classList.add("showCat");
        category.innerHTML = name;
        element.appendChild(category);

        var popdown = document.createElement("div");
        popdown.classList.add("showCatDetail");
        for (let i = 0; i < content.length; i++) {
            var des = document.createElement("p");
            des.innerHTML = content[i];
            popdown.appendChild(des);
        }
        element.appendChild(popdown);
        category.onclick = function() {
            popdown.classList.toggle("detailShowing");
        }
    }
    // Summary
    makeDropDown(dBase, "Summary", [removeTags(data.summary)]);

    // Next Episode stuff
    function addNextDate(nData) {
        var date = document.createElement("p");
        date.style.marginBottom = "0px";
        var airtime = new Date(nData.airstamp);
        date.innerHTML = getFull(airtime);
        tBase.appendChild(date);

        // Next Episode Summary
        makeDropDown(dBase, "Next Episode", [nData.name,removeTags(nData.summary)]);
    }
    if (data._links.nextepisode != null) {
        fetch(data._links.nextepisode.href).then(da => da.json().then(d => addNextDate(d)));
    }
}
function drawShows() {
    for (let i = 0; i < showList.length; i++) {
        fetch(getShowCall(showList[i])).then(data => data.json().then(d => makeShow(d)));
    }
}
drawShows();