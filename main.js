var g = new Guess();
window.addEventListener("keypress", function(event) {
    g.add(event.key);
});