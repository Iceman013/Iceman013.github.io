var showList = ["the owl house","the ghost and molly mcgee"];
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
    
    // Detail Section
    var dBase = document.createElement("div");
    dBase.classList.add("showDetails");
    base.appendChild(dBase);
    
    // Details
    var description = document.createElement("text");
    description.innerHTML = removeTags(data.summary);
    dBase.appendChild(description);
    
    // Next Episode stuff
    function addNextDate(nData) {
        var date = document.createElement("p");
        var airtime = new Date(nData.airstamp);
        date.innerHTML = getFull(airtime);
        tBase.appendChild(date);

        // Next Episode Summary
        var ne = document.createElement("p");
        ne.innerHTML = removeTags(nData.summary);
        dBase.appendChild(ne);
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