function getResourceList() {
    var list = [];

    var item = new Resource(1, "Trees", 0.02, 0.07, [2], ["images/resources/treea.png","images/resources/treeb.png","images/resources/treec.png"]);
    list.push(item);

    var item = new Resource(2, "Rock", 0.03, 0, [2,3], ["images/resources/rocka.png","images/resources/rockb.png","images/resources/rockc.png"]);
    list.push(item);

    var item = new Resource(3, "Bush", 0.02, 0.05, [2], ["images/resources/busha.png","images/resources/bushb.png","images/resources/bushc.png"]);
    list.push(item);

    return list;
}