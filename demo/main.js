function start() {
    console.clear();
    console.time();
    console.log("Begining logs");
    console.log("%cThis is how %ccolors work", "background: green",
    "background: red; color: yellow; font-size: 30px; text-shadow: 2px 4px orange; font-weight: 900")
    console.error("Error message");
    console.group("%cThe fun will never end", "font-size: 22px;");
    console.log("Oh my");
    console.group("Group");
    console.log("A");
    console.log("B");
    console.groupEnd();
    console.groupEnd();
    console.groupCollapsed("OwO");
    console.log("A");
    console.log("B");
    console.groupEnd();
    console.table([['red',4],['blue',8],['green',3]]);
    console.warn("Warning message");
    console.trace();
    console.timeEnd();
}
start();