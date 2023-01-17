/*
function setBackground(url) {
    document.body.style.backgroundImage = "url(" + url + ")";
}
function getBackground() {
    var width = Math.ceil(window.innerWidth/100)*100;
    var height = Math.ceil(window.innerHeight/100)*100;
    var category = "random";
    var url = "https://source.unsplash.com/" + category + "/" + width + "x" + height;
    fetch(url).then(data => setBackground(data.url));
}
getBackground();
*/
function backColor() {
    var dim = 0.25;
    var r = Math.floor(256*(1 - dim + dim*Math.random()));
    var g = Math.floor(256*(1 - dim + dim*Math.random()));
    var b = Math.floor(256*(1 - dim + dim*Math.random()));
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
backColor();