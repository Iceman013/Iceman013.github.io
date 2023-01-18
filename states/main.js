function drawState() {
    var state = statelist[Math.floor(statelist.length*Math.random())];
    console.log(state.name);
    // /var state = statelist[5];
    makeMap(state);
    function fixScale() {
        var padding = 50;
        var path = document.getElementsByTagName("path").item(0);
        var rect = path.getBoundingClientRect();
        var iw = rect.width;
        var ih = rect.height;
        var scale = 650/(Math.max(iw, ih) + padding);
        path.style.transform = "scale(" + scale + ")";

        rect = path.getBoundingClientRect();
        var ix = -1*(((rect.left - 0) + (rect.right - 650))/2)+ 10;
        var iy = -1*(((rect.top - 0) + (rect.bottom - 650))/2)+ 10;
        path.style.transform = "translate(" + ix + "px," + iy + "px) scale(" + scale + ")";
    }
    function doStuff() {
        fixScale();
        var turn = Math.random();
        document.getElementById("box").style.transform = "rotate(" + turn + "turn)";
    }
    setTimeout(doStuff, 100);
}
drawState();