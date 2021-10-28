var upgrades = new Array();

var lumberHut = new Upgrade("Lumber Hut");
lumberHut.addImage("Images/LumberHut.png");
lumberHut.addResource("Forest");
lumberHut.addPrevious("None");
upgrades.push(lumberHut);

var mine = new Upgrade("Mine");
mine.addImage("Images/Mine.gif");
mine.addResource("Rock");
mine.addPrevious("None");
upgrades.push(mine);