function start() {
    console.clear();
    console.time();
    console.log("Begining logs");
    console.error("Error message");
    console.group("Group");
    console.log("%cABC DEF %cGHI", "background: green", "background: red");
    console.log("B");
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