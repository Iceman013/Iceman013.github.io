var FILTERS = ["Juggling","Symmetrical","Asymmetrical","3-Ball","4-Ball","5-Ball","6-Ball"];
var TRICKS = [];

var a = new Trick("Cascade", 1);
a.addAlt("Inside Throws");
a.setLink("cascade.html");
a.setDescription("This is the basic 3 ball juggling technique.");
a.addTags("Juggling","3-Ball", "Symmetrical");
TRICKS.push(a);

var a = new Trick("Reverse Cascade", 1);
a.addAlt("Outside Throws");
a.setLink("reverse.html");
a.setDescription("This is the basic 3 ball juggling done in reverse.");
a.addTags("Juggling","3-Ball", "Symmetrical");
a.addPrereqs("Cascade");
TRICKS.push(a);

var a = new Trick("Tennis", 2);
a.setLink("tennis.html");
a.setDescription("This is a 3-Ball variation that looks like a tennis match.");
a.addTags("Juggling","3-Ball", "Symmetrical");
a.addPrereqs("Cascade","Reverse Cascade");
TRICKS.push(a);

var a = new Trick("Reverse Tennis", 2);
a.setLink("reverseTennis.html");
a.setDescription("This is a variation of tennis.");
a.addTags("Juggling","3-Ball", "Symmetrical");
a.addPrereqs("Tennis");
TRICKS.push(a);

var a = new Trick("Half Shower", 2);
a.setLink("halfShower.html");
a.setDescription("This is a cascade pattern that is close to the 3-Ball Shower.");
a.addTags("Juggling","3-Ball", "Asymmetrical");
a.addPrereqs("Cascade","Reverse Cascade");
TRICKS.push(a);

var a = new Trick("3-Ball Shower", 4);
a.setLink("showerThree.html");
a.setDescription("This trick involves passing from one side to the other in a circular pattern.");
a.addTags("Juggling","3-Ball", "Asymmetrical");
a.addPrereqs("Half Shower");
TRICKS.push(a);