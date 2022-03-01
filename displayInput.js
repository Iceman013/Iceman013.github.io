const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Backspace",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Enter",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "."
];
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    document.getElementById(button).addEventListener("click", function() {
        g.add(button);
    });
}