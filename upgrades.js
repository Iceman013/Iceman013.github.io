var upgrades = new Array();

var up = new Upgrade("Lumber Hut");
up.setImage("Images/LumberHut.gif");
up.setDescription("This is a simple resource collection building. It collects wood.");
up.addResource("Forest");
up.addPrevious("None");
upgrades.push(up);

var up = new Upgrade("Lumber Mill");
up.setImage("Images/LumberMill.gif");
up.setDescription("This is a simple resource collection building. It collects wood.");
up.addResource("Forest");
up.addPrevious("Lumber Hut");
upgrades.push(up);

var up = new Upgrade("Mine");
up.setImage("Images/Mine.gif");
up.setDescription("This is a simple resource collection building. It collects rock.");
up.addResource("Rock");
up.addPrevious("None");
upgrades.push(up);