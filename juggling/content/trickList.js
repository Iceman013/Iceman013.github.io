var FILTERS = [];

var b = new Filter("Juggling");
b.addSub("Quantity",["2","3","4","5","6"],false);
b.addSub("Symmetry",["Symmetrical","Asymmetrical","One Step"],false);
b.addSub("Prop",["Balls","Rings","Clubs","Mixed"],true);
FILTERS.push(b);

var b = new Filter("Yo-Yo");
b.addSub("Bearing",["Responsive","Unresponsive"],false);
b.addSub("Axis",["Vertical","Horizontal"],false);
FILTERS.push(b);

var b = new Filter("Poi");
FILTERS.push(b);

var b = new Filter("Unicycle");
b.addSub("Type",["Regular","Giraffe","Ultimate"],false);
b.addSub("Type",["Riding","Stationary","Mount"],true);
FILTERS.push(b);

var b = new Filter("Lasso");
b.addSub("Axis",["Horizontal","Vertical"],false);
FILTERS.push(b);

var b = new Filter("Diabolo");
b.addSub("Quantity",["1-Diabolo","2-Diabolo"],false);
b.addSub("Axis",["Vertical","Horizontal"],false);
FILTERS.push(b);

var b = new Filter("Cigar Boxes");
b.addSub("Quantity",["3","4"],false);
FILTERS.push(b);

var b = new Filter("Devil Sticks");
FILTERS.push(b);

var b = new Filter("Spinny Plates");
FILTERS.push(b);

var b = new Filter("Contact Ball");
b.addSub("Quantity",["1","2","3"],false);
FILTERS.push(b);

var b = new Filter("Rola Bola");
FILTERS.push(b);

var b = new Filter("Stilts");
FILTERS.push(b);

var b = new Filter("Slack Line");
FILTERS.push(b);

var TRICKS = [];

var a = new Trick("Cascade", 1);
a.addAlt("Inside Throws");
a.setLink("cascade.html");
a.setDescription("The cascade, also known as inside throws, is the basic 3 ball juggling technique. It is typically the first form of juggling one learns. This is a simple trick that serves as an introduction to more juggling.");
a.addTags("Juggling","3","Symmetrical","Balls");
TRICKS.push(a);

var a = new Trick("Reverse Cascade", 1);
a.addAlt("Outside Throws");
a.setLink("reverse.html");
a.setDescription("This is a small variation of the basic 3 ball juggling pattern. It it typically the second trick people learn. This is a prerequisite for many variations of the classic 3 ball pattern.");
a.addTags("Juggling","3","Symmetrical","Balls");
a.addPrereqs("Cascade");
TRICKS.push(a);

var a = new Trick("Tennis", 2);
a.setLink("tennis.html");
a.setDescription("This is a small variation of the basic 3 ball juggling pattern. It resembles a game of tennis, hence the name.");
a.addTags("Juggling","3","Symmetrical","Balls");
a.addPrereqs("Reverse Cascade");
TRICKS.push(a);

var a = new Trick("Reverse Tennis", 2);
a.setLink("reverseTennis.html");
a.setDescription("This trick is a classic next step implied by the tennis trick. It uses the same idea but is swapped.");
a.addTags("Juggling","3","Symmetrical","Balls");
a.addPrereqs("Tennis");
TRICKS.push(a);

var a = new Trick("Half Shower", 2);
a.setLink("halfShower.html");
a.setDescription("This is a small variation of the basic 3 ball juggling pattern. It is similar to shower in appearance which is why it has this name. This is often seen as the preparation step for learning shower.");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Reverse Cascade");
TRICKS.push(a);

var a = new Trick("3-Ball Shower", 4);
a.setLink("showerThree.html");
a.setDescription("This is a standard trick that might be people's first thought of what 3 ball juggling is. This trick is one of the most simple tricks and easily scalable to higher ball counts.");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Half Shower");
TRICKS.push(a);

var a = new Trick("Shuffle", 5);
a.setLink("shuffle.html");
a.setDescription("This is a stylistic trick that uses the same pattern as a shower with a unique throw.");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("3-Ball Shower");
TRICKS.push(a);

var a = new Trick("Under the Arm", 2);
a.setLink("underArm.html");
a.setDescription("This simple trick is just throwing the ball under your arm. This is a one motion trick that can be thrown in to a three ball pattern to spice it up.");
a.addTags("Juggling","3","One Step","Balls");
a.addPrereqs("Cascade");
TRICKS.push(a);

var a = new Trick("Arms Crossed", 3);
a.setLink("armCross.html");
a.setDescription("This trick is crossing your arms and juggling cascade.");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Under the Arm");
TRICKS.push(a);

var a = new Trick("Windmills", 2);
a.setLink("windmill.html");
a.setDescription("This trick results in the balls going in a circle pattern. This makes a windmill design.");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Under the Arm");
TRICKS.push(a);

var a = new Trick("Box", 4);
a.setLink("box.html");
a.setDescription("This trick is a classic three ball pattern that resembles the sides and bottom of a box.");
a.addTags("Juggling","3","Symmetrical","Balls");
a.addPrereqs("3-Ball Shower");
TRICKS.push(a);

var a = new Trick("3-Ball Mill's Mess", 4);
a.setLink("millsThree.html");
a.setDescription("This is a classic trick that will mess with your head. It is often the first complex trick jugglers learn.");
a.addTags("Juggling","3","Symmetrical","Balls");
a.addPrereqs("Windmills","Arms Crossed");
TRICKS.push(a);

var a = new Trick("Two in One Hand", 1);
a.setLink("twoInOne.html");
a.setDescription("Juggling 2 balls in one hand is the smallest about of balls a trick can have. It is one of the simplest tricks.");
a.addTags("Juggling","2","Asymmetrical","Balls");
TRICKS.push(a);

var a = new Trick("Four", 5);
a.addAlt("Fountain");
a.setLink("four.html");
a.setDescription("This is the basic four ball pattern. It is the first four ball trick and sometimes called a fountain.");
a.addTags("Juggling","4","Symmetrical","Balls");
a.addPrereqs("Two in One Hand");
TRICKS.push(a);

var a = new Trick("4-Ball Shower", 8);
a.setLink("showerFour.html");
a.setDescription("This is a challenging four ball pattern that uses the classic shower.");
a.addTags("Juggling","4","Asymmetrical","Balls");
a.addPrereqs("3-Ball Shower");
TRICKS.push(a);

var a = new Trick("Columns", 2);
a.setLink("columns.html");
a.setDescription("This is a basic trick that offers a different throw pattern from traditional three. It looks like 3 seperate columns.");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Two in One Hand");
TRICKS.push(a);

var a = new Trick("Crossovers", 3);
a.addAlt("Rainbow Cross");
a.setLink("crossover.html");
a.setDescription("This is a variation of the columns trick that involves crossing balls.");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Columns");
TRICKS.push(a);

var a = new Trick("Boston Mess", 4);
a.setLink("bostonMess.html");
a.setDescription("This trick has all 3 balls just go up and down while the hands go back and forth to support them.");
a.addTags("Juggling","3","Symmetrical","Balls");
a.addPrereqs("3-Ball Mill's Mess","Columns");
TRICKS.push(a);

var a = new Trick("Five", 8);
a.setLink("five.html");
a.setDescription("This is another classic trick for those going up in number. It has 5 balls and takes a lot of practice.");
a.addTags("Juggling","5","Symmetrical","Balls");
a.addPrereqs("Cascade","Four");
TRICKS.push(a);

var a = new Trick("Three in One Hand", 6);
a.setLink("threeInOne.html");
a.setDescription("This is one of the harder 3-ball tricks because it only uses one hand. It becomes part of other high ball tricks.");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Two in One Hand");
TRICKS.push(a);

var a = new Trick("Factory", 3);
a.setLink("unfinished.html");
a.setDescription("This trick is a smooth motion mimicing a factory's robotic motions. It has a different type of throw, making it different from most 3-ball patterns.");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Columns");
TRICKS.push(a);

var a = new Trick("Six", 8);
a.setLink("six.html");
a.setDescription("This is the classic six ball pattern.");
a.addTags("Juggling","6","Symmetrical","Balls");
a.addPrereqs("Three in One Hand","Four");
TRICKS.push(a);

var a = new Trick("4-Ball Mill's Mess", 8);
a.setLink("millsFour.html");
a.setDescription("");
a.addTags("Juggling","4","Symmetrical","Balls");
a.addPrereqs("Two in One Hand","Four","3-Ball Mill's Mess");
TRICKS.push(a);

var a = new Trick("Rings", 2);
a.setLink("rings.html");
a.setDescription("This is a new prop that must be spun.");
a.addTags("Juggling","3","Symmetrical","Rings");
a.addPrereqs("Cascade");
TRICKS.push(a);
/*
var a = new Trick("Inverted Box", 6);
a.setLink("unfinished.html");
a.setDescription("");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Two in One Hand");
TRICKS.push(a);

var a = new Trick("4-Ball Columns", 6);
a.setLink("unfinished.html");
a.setDescription("");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Two in One Hand");
TRICKS.push(a);

var a = new Trick("Back Crosses", 6);
a.setLink("unfinished.html");
a.setDescription("");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Two in One Hand");
TRICKS.push(a);

var a = new Trick("Behind the Back", 6);
a.setLink("unfinished.html");
a.setDescription("");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Two in One Hand");
TRICKS.push(a);

var a = new Trick("Takeouts", 6);
a.setLink("unfinished.html");
a.setDescription("");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Two in One Hand");
TRICKS.push(a);

var a = new Trick("Bear Claws", 6);
a.setLink("unfinished.html");
a.setDescription("");
a.addTags("Juggling","3","Asymmetrical","Balls");
a.addPrereqs("Two in One Hand");
TRICKS.push(a);
*/

var a = new Trick("Riding", 5);
a.setLink("unicycle.html");
a.setDescription("This is how to ride a unicycle. If you can't ride, start with this.");
a.addTags("Unicycle","Regular","Riding");
TRICKS.push(a);