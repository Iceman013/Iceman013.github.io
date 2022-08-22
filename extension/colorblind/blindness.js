var blinders = [
    new Blind("Normal", "normal", [[1, 0, 0],[0, 1, 0],[0, 0, 1]]),

    new Blind("Protanomaly", "protanomaly-blindness-filter", [[0.152286, 1.052583, -0.204868],[0.114503, 0.786281, 0.099216],[-0.003882, -0.048116, 1.051998]]),
    new Blind("Deuteranomaly", "deuteranomaly-blindness-filter", [[0.367322, 0.860646, -0.227968],[0.280085, 0.672501, 0.047413],[-0.011820, 0.042940, 0.968881]]),
    new Blind("Tritanomaly", "tritanomaly-blindness-filter", [[1.255528, -0.076749, -0.178779],[-0.078411, 0.930809, 0.147602],[0.004733, 0.691367, 0.303900]]),
    new Blind("Achromatopsia", "achromatopsia-blindness-filter", [[0.33333, 0.33333, 0.33333],[0.33333, 0.33333, 0.33333],[0.33333, 0.33333, 0.33333]]),

    //new Blind("Red Green", "red-green-blindness-filter", [[0.5, 0.5, 0],[0.5, 0.5, 0],[0, 0, 1]]),
    //new Blind("Blue Yellow", "blue-yellow-blindness-filter", [[1, 0, 0],[0, 0.5, 0.5],[0, 0.5, 0.5]]),
];