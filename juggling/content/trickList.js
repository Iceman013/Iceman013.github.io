var FILTERS = ["Symmetrical","Asymmetrical","3-Ball","4-Ball","5-Ball","6-Ball"];
var TRICKS = [];

var a = new Trick("Cascade");
a.addAlt("Inside Throws");
a.setLink("cascade.html");
a.setDescription("This is the basic 3 ball juggling technique.");
a.addTags("3-Ball", "Symmetrical");
TRICKS.push(a);

var a = new Trick("Reverse Cascade");
a.addAlt("Outside Throws");
a.setLink("reverse.html");
a.setDescription("This is the basic 3 ball juggling done in reverse.");
a.addTags("3-Ball", "Symmetrical");
a.addPrereqs("Cascade");
TRICKS.push(a);

var a = new Trick("3-Ball Shower");
a.setLink("showerThree.html");
a.setDescription("This trick involves passing from one side to the other in a circular pattern.");
a.addTags("3-Ball", "Asymmetrical");
TRICKS.push(a);