function stateIncludes(array, goal) {
    var out = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == goal) {
            out = true;
        }
    }
    return out;
}
function copyStats() {
    var tagged = document.getElementsByClassName("tile");
    var output = "Retaildle #" + 0 + ": " + attempt.toString() + "/6";
    for (let i = 0; i < tagged.length; i++) {
        if (i % (maxG + today.length()) == 0) {
            output += "\n";
        }
        if (i % (maxG + today.length()) == today.length()) {
            output += " ";
        }
        if (stateIncludes(tagged[i].classList, "correct")) {
            output += ":green_square:";
        } else if (stateIncludes(tagged[i].classList, "yellow")) {
            output += ":yellow_square:";
        } else if (stateIncludes(tagged[i].classList, "incorrect")) {
            output += ":black_large_square:";
        }
    }
    output += "\nhttps://iceman013.github.io/retaildle/";
    navigator.clipboard.writeText(output);
}