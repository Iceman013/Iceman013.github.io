var blinders = [
    new Blind("Normal", "normal", [[1, 0, 0],[0, 1, 0],[0, 0, 1]]),
    new Blind("Red Green", "red-green-blindness-filter", [[0.5, 0.5, 0],[0.5, 0.5, 0],[0, 0, 1]]),
    //new Blind("Red Green Fix", "red-green-vision-filter", [[0, 2.02344, -2.52581],[0, 1, 0],[0, 0, 1]]),
    new Blind("Blue Yellow", "blue-yellow-blindness-filter", [[1, 0, 0],[0, 0.5, 0.5],[0, 0.5, 0.5]]),
    new Blind("Monochrome", "monochrome-blindness-filter", [[0.33333, 0.33333, 0.33333],[0.33333, 0.33333, 0.33333],[0.33333, 0.33333, 0.33333]]),
    //new Blind ("Monochrome Fix", "monochrome-vision-filter", [[1, 0, 0],[0, 1.5, 0],[0, 0, 0.6]])
];