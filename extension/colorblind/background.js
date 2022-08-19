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
    for (let i = 0; i < blinders.length; i++) {
        svg.innerHTML = svg.innerHTML + '\n\t\t<filter id="' + blinders[i].name + '">\n\t\t\t<feColorMatrix type="matrix" values="' + read(blinders[i].effect) + '"></feColorMatrix>\n\t\t</filter>\n\t';
    }

    var style = document.createElement("style");
    style.textContent = "";
    for (let i = 0; i < blinders.length; i++) {
        style.textContent += '\n\t\t.' + blinders[i].name + ' {\n\t\t\tfilter: url(#' + blinders[i].name + ');\n\t\t}\n\t';
    }
    document.body.appendChild(style);
}

function blind(type) {
    chrome.storage.sync.set({choice: type}, function() {
        console.log("Value is set to " + type);
    })
    var base = document.getElementsByTagName("html")[0];
    for (let i = 0; i < blinders.length; i++) {
        base.classList.remove(blinders[i].name);
    }
    base.classList.add(blinders[type].name);
}

function main() {
    console.log("Begin fixing");
    
    prepareFilters();
    chrome.storage.sync.get(['choice'], function(result) {
        console.log('Value currently is ' + result.choice);
        blind(result.choice);
    });

    console.log("Done fixing");
}
main();