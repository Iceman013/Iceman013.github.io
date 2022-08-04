function createElement(idea) {
    var base = document.createElement("div");
    var head = document.createElement("h3");
    head.innerHTML = idea.name;

    var type = document.createElement("div");
    for (let i = 0; i < idea.type.length; i++) {
        var dem = document.createElement("text");
        dem.innerHTML = idea.type[i];
        type.appendChild(dem);
    }

    var tool = document.createElement("div");
    for (let i = 0; i < idea.tools.length; i++) {
        var dem = document.createElement("text");
        dem.innerHTML = idea.tools[i];
        tool.appendChild(dem);
    }

    var desc = document.createElement("text");
    desc.innerHTML = idea.description;

    base.append(head, type, desc, tool);
    return base;
}
function createElements() {
    for (let i = 0; i < ideaList.length; i++) {
        document.getElementById("list").appendChild(createElement(ideaList[i]));
    }
}
createElements();