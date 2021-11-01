var upgrades = new Array();

var up = new Upgrade("Lumber Hut");
up.setImage("Images/LumberHut.gif");
up.setDescription("This is a simple resource collection building. It collects wood.");
up.addResource("Forest");
up.addPrevious("None");
up.setCost("Wood", 4);
up.setProduction("Wood", 1);
upgrades.push(up);

var up = new Upgrade("Stone Based Lumber Hut");
up.setImage("Images/LumberHut.gif");
up.setDescription("This is a simple resource collection building. It collects wood.");
up.addResource("Forest");
up.addPrevious("None");
up.setCost("Rock", 2);
up.setProduction("Wood", 1);
upgrades.push(up);

var up = new Upgrade("Lumber Mill");
up.setImage("Images/LumberMill.gif");
up.setDescription("This is an upgraded resource collection building. It collects wood.");
up.addResource("Forest");
up.addPrevious("Lumber Hut");
up.addPrevious("Stone Based Lumber Hut");
up.setCost("Wood", 10);
up.setCost("Rock", 5);
up.setProduction("Wood", 3);
upgrades.push(up);

var up = new Upgrade("Mine");
up.setImage("Images/Mine.gif");
up.setDescription("This is a simple resource collection building. It collects rock.");
up.addResource("Rock");
up.addPrevious("None");
up.setCost("Wood", 6);
up.setProduction("Rock", 1);
upgrades.push(up);

var up = new Upgrade("Abandoned Mine");
up.setImage("Images/AbandonedMine.gif");
up.setDescription("This is an abandoned building.");
up.addResource("Rock");
up.addPrevious("NA");
upgrades.push(up);

var up = new Upgrade("Large Mine");
up.setImage("Images/LargeMine.gif");
up.setDescription("This is an upgraded resource collection building. It collects rock.");
up.addResource("Rock");
up.addPrevious("Mine");
up.addPrevious("Abandoned Mine");
up.setCost("Wood", 8);
up.setCost("Rock", 6);
up.setProduction("Rock", 4);
upgrades.push(up);

var up = new Upgrade("Clay Kiln");
up.setImage("Images/ClayKiln.gif");
up.setDescription("This is a simple resource collection building. It collects clay.");
up.addResource("Empty");
up.addPrevious("None");
up.addHeight("Meadow");
up.addHeight("Ground");
up.setCost("Wood", 4);
up.setCost("Rock", 6);
up.setProduction("Clay", 1);
upgrades.push(up);

var up = new Upgrade("Glass Factory");
up.setImage("Images/GlassFactory.gif");
up.setDescription("This is a simple resource collection building. It collects glass.");
up.addResource("Empty");
up.addPrevious("None");
up.addHeight("Sand");
up.setCost("Wood", 3);
up.setCost("Rock", 6);
up.setCost("Clay", 4);
up.setProduction("Glass", 1);
upgrades.push(up);

var up = new Upgrade("Deep Drill");
up.setImage("Images/DeepDrill.gif");
up.setDescription("This is a simple resource collection building. It collects rock.");
up.addResource("Empty");
up.addPrevious("None");
up.addHeight("Sand");
up.addHeight("Meadow");
up.addHeight("Ground");
up.addHeight("High Ground");
up.setCost("Wood", 4);
up.setCost("Rock", 20);
up.setProduction("Rock", 3);
upgrades.push(up);

var up = new Upgrade("Concrete Factory");
up.setImage("Images/ConcreteFactory.gif");
up.setDescription("This is a simple resource collection building. It collects concrete.");
up.addResource("Rock");
up.addPrevious("None");
up.addHeight("Sand");
up.setCost("Wood", 4);
up.setCost("Rock", 12);
up.setProduction("Concrete", 2);
upgrades.push(up);

var up = new Upgrade("Concrete Factory");
up.setImage("Images/ConcreteFactory.gif");
up.setDescription("This is a simple resource collection building. It collects concrete.");
up.addResource("Empty");
up.addPrevious("Deep Drill");
up.addHeight("Sand");
up.setCost("Wood", 4);
up.setCost("Rock", 12);
up.setProduction("Concrete", 2);
upgrades.push(up);