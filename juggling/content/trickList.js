var FILTERS = ["Juggling","Other","Symmetrical","Asymmetrical","One Step","One Hand","3-Ball","4-Ball","5-Ball","6-Ball"];
var TRICKS = [];

var a = new Trick("Cascade", 1);
a.addAlt("Inside Throws");
a.setLink("cascade.html");
a.setDescription("The cascade, also known as inside throws, is the basic 3 ball juggling technique. It is typically the first form of juggling one learns. This is a simple trick that serves as an introduction to more juggling.");
a.addTags("Juggling","3-Ball","Symmetrical");
TRICKS.push(a);

var a = new Trick("Reverse Cascade", 1);
a.addAlt("Outside Throws");
a.setLink("reverse.html");
a.setDescription("This is a small variation of the basic 3 ball juggling pattern. It it typically the second trick people learn. This is a prerequisite for many variations of the classic 3 ball pattern.");
a.addTags("Juggling","3-Ball","Symmetrical");
a.addPrereqs("Cascade");
TRICKS.push(a);

var a = new Trick("Tennis", 2);
a.setLink("tennis.html");
a.setDescription("This is a small variation of the basic 3 ball juggling pattern. It resembles a game of tennis, hence the name.");
a.addTags("Juggling","3-Ball","Symmetrical");
a.addPrereqs("Cascade","Reverse Cascade");
TRICKS.push(a);

var a = new Trick("Reverse Tennis", 2);
a.setLink("reverseTennis.html");
a.setDescription("This trick is a classic next step implied by the tennis trick. It uses the same idea but is swapped.");
a.addTags("Juggling","3-Ball","Symmetrical");
a.addPrereqs("Tennis");
TRICKS.push(a);

var a = new Trick("Half Shower", 2);
a.setLink("halfShower.html");
a.setDescription("This is a small variation of the basic 3 ball juggling pattern. It is similar to shower in appearance which is why it has this name. This is often seen as the preparation step for learning shower.");
a.addTags("Juggling","3-Ball","Asymmetrical");
a.addPrereqs("Cascade","Reverse Cascade");
TRICKS.push(a);

var a = new Trick("3-Ball Shower", 4);
a.setLink("showerThree.html");
a.setDescription("This is a standard trick that might be people's first thought of what 3 ball juggling is. This trick is one of the most simple tricks and easily scalable to higher ball counts.");
a.addTags("Juggling","3-Ball","Asymmetrical");
a.addPrereqs("Half Shower");
TRICKS.push(a);

var a = new Trick("Under the Arm", 2);
a.setLink("underArm.html");
a.setDescription("This simple trick is just throwing the ball under your arm. This is a one motion trick that can be thrown in to a three ball pattern to spice it up.");
a.addTags("Juggling","3-Ball","One Step");
a.addPrereqs("Cascade");
TRICKS.push(a);

var a = new Trick("Arms Crossed", 3);
a.setLink("armCross.html");
a.setDescription("This trick is crossing your arms and juggling cascade.");
a.addTags("Juggling","3-Ball","Asymmetrical");
a.addPrereqs("Under the Arm");
TRICKS.push(a);

var a = new Trick("Windmills", 2);
a.setLink("windmill.html");
a.setDescription("This trick results in the balls going in a circle pattern. This makes a windmill design.");
a.addTags("Juggling","3-Ball","Asymmetrical");
a.addPrereqs("Under the Arm");
TRICKS.push(a);

var a = new Trick("3-Ball Mill's Mess", 4);
a.setLink("millsThree.html");
a.setDescription("This is a classic trick that will mess with your head. It is often the first complex trick jugglers learn.");
a.addTags("Juggling","3-Ball","Symmetrical");
a.addPrereqs("Windmills","Arms Crossed");
TRICKS.push(a);