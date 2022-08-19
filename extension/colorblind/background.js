function rgba(color) {
    var nc = color.substring(color.indexOf("(") + 1);
    var list = [0, 0, 0, 1];
    if (color.substring(0, 4) == "rgb(") {
        for (let i = 0; i < 2; i++) {
            list[i] = parseFloat(nc.substring(0, nc.indexOf(",")));
            nc = nc.substring(nc.indexOf(" ") + 1);
        }
        list[2] = parseFloat(nc.substring(0, nc.length - 1));
    } else if (color.substring(0, 4) == "rgba") {
        for (let i = 0; i < 3; i++) {
            list[i] = parseFloat(nc.substring(0, nc.indexOf(",")));
            nc = nc.substring(nc.indexOf(" ") + 1);
        }
        list[3] = parseFloat(nc.substring(0, nc.length - 1));
    }
    return list;
}

function bw(color) {
    var list = rgba(color);
    var avg = Math.floor((list[0] + list[1] + list[2])/3);
    var output = "rgba(" + avg.toString() + "," + avg.toString() + "," + avg.toString() + "," + list[3] + ")";
    return output;
}
function rg(color) {
    var list = rgba(color);
    var avg = Math.floor((list[0] + list[1])/2);
    var output = "rgba(" + avg.toString() + "," + avg.toString() + "," + list[2] + "," + list[3] + ")";
    return output;
}
var flist = [bw,rg];
function blind(type) {
    var elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
        var color;
        // Background Color
        color = window.getComputedStyle(elements[i]).backgroundColor;
        if (color != "") {
            elements[i].style.backgroundColor = flist[type](color);
        }

        // Text Color
        color = window.getComputedStyle(elements[i]).color;
        if (color != "") {
            elements[i].style.color = flist[type](color);
        }

        // Border Color
        color = window.getComputedStyle(elements[i]).borderColor;
        if (color != "") {
            elements[i].style.borderColor = flist[type](color);
        }

        // Outline Color
        color = window.getComputedStyle(elements[i]).outlineColor;
        if (color != "") {
            elements[i].style.outlineColor = flist[type](color);
        }
    }
}

function main() {
    console.log("Begin fixing");

    blind(1);

    console.log("Done fixing");
}
document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
        main();
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        main();
    }
});