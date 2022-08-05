function createElement(idea) {
    var base = document.createElement("div");
    base.classList.add("idea");
    var head = document.createElement("h3");
    head.innerHTML = idea.name;

    var type = document.createElement("div");
    type.classList.add("typeList");
    for (let i = 0; i < idea.type.length; i++) {
        var dem = document.createElement("text");
        dem.classList.add("type");
        dem.innerHTML = idea.type[i];
        type.appendChild(dem);
    }

    var tool = document.createElement("div");
    tool.classList.add("toolList");
    for (let i = 0; i < idea.tools.length; i++) {
        var dem = document.createElement("text");
        dem.classList.add("tool")
        dem.innerHTML = idea.tools[i];
        tool.appendChild(dem);
    }

    var desc = document.createElement("div");
    desc.classList.add("description");
    var des = document.createElement("text");
    des.innerHTML = idea.description;
    desc.appendChild(des);

    base.append(head, type, desc, tool);
    return base;
}
function createElements() {
    for (let i = 0; i < ideaList.length; i++) {
        document.getElementById("list").appendChild(createElement(ideaList[i]));
    }
}
createElements();
//boxChecking();