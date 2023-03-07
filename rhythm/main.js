function doThing() {
    var audio = document.getElementById("demoAudio");
    audio.play();
    setTimeout(function() {
        audio.pause();
        audio.currentTime = 0;
    }, 4.5*1000);
}