function read(blindness) {
    var output = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < blindness[i].length; j++) {
            output += blindness[i][j].toString() + " ";
        }
        output += "0 0\n\t\t\t ";
    }
    output += '0 0 0 1 0';
    return output;
}
function prepareFilters() {
    if (document.getElementsByTagName("svg").length == 0) {
        document.body.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
    }
    var svg = document.getElementsByTagName("svg")[0];
    svg.innerHTML = svg.innerHTML + '\n\t\t<filter id="red-green-blindness-filter">\n\t\t\t<feColorMatrix type="matrix" values="' + read(RED_GREEN) + '"></feColorMatrix>\n\t\t</filter>\n\t';
    svg.innerHTML = svg.innerHTML + '\n\t\t<filter id="blue-yellow-blindness-filter">\n\t\t\t<feColorMatrix type="matrix" values="' + read(BLUE_YELLOW) + '"></feColorMatrix>\n\t\t</filter>\n\t';
    svg.innerHTML = svg.innerHTML + '\n\t\t<filter id="monochrome-blindness-filter">\n\t\t\t<feColorMatrix type="matrix" values="' + read(MONOCHROME) + '"></feColorMatrix>\n\t\t</filter>\n\t';

    var style = document.createElement("style");
    style.textContent = "";
    style.textContent += '\n\t\t.red-green-blindness-filter {\n\t\t\tfilter: url(#red-green-blindness-filter);\n\t\t}\n\t';
    style.textContent += '\n\t\t.blue-yellow-blindness-filter {\n\t\t\tfilter: url(#blue-yellow-blindness-filter);\n\t\t}\n\t';
    style.textContent += '\n\t\t.monochrome-blindness-filter {\n\t\t\tfilter: url(#monochrome-blindness-filter);\n\t\t}\n\t';
    document.body.appendChild(style);
}

function blind(type) {
    var filters = ["red-green-blindness-filter","blue-yellow-blindness-filter","monochrome-blindness-filter"]
    var base = document.getElementsByTagName("html")[0];
    for (let i = 0; i < filters.length; i++) {
        base.classList.remove(filters[i]);
    }
    base.classList.add(filters[type]);
}

function main() {
    console.log("Begin fixing");

    prepareFilters();

    console.log("Done fixing");
}
main();
blind(2);