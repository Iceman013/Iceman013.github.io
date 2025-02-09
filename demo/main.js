function drawMap() {
    var location = [33.95561066337365, -83.3744229314417];
    var map = L.map('map').setView(location, 20);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = new L.Marker(location);
    marker.bindPopup("Juggling Club").openPopup();
    marker.addTo(map);
}
drawMap();