const COUNT = 20;
const TRIES = 10_000;
const MAXWIDTH = 2;

function makeRectangles(count) {
    var list = [];
    for (let i = 0; i < count; i++) {
        var rect = new Rectangle(0.2 + 0.8*Math.random(), 0.2 + 0.8*Math.random());
        list.push(rect);
    }
    return list;
}
function fillUp(base, list) {
    var index = 0;
    var boxes = [base];
    while (index < list.length) {
        var target = boxes.pop();
        if (target.children.length != 2) {
            target.children.push(list[index]);
            index++;
        } else {
            boxes.push(target.children[1]);
            boxes.push(target.children[0]);
        }
    }
}
function show(base) {
    var elem = document.getElementById("box");
    elem.appendChild(base.create(true));
}
function randomArrangement(list) {
    var base = new Box([], (Math.random() < 0.5));
    var boxes = [base];
    for (let i = 0; i < list.length - 1; i++) {
        var pick = Math.floor(boxes.length*Math.random());
        while (boxes[pick].children.length != 0) {
            pick = Math.floor(boxes.length*Math.random());
        }
        var ba = new Box([], (Math.random() < 0.5));
        var bb = new Box([], (Math.random() < 0.5));
        boxes[pick].children[0] = ba;
        boxes[pick].children[1] = bb;
        boxes.push(ba);
        boxes.push(bb);
    }
    fillUp(base, list);
    return base;
}
function rngTry(tries) {
    var list = makeRectangles(COUNT);
    var best;
    while (best == null) {
        var temp = randomArrangement(list);
        if (temp.getWidth() <= MAXWIDTH) {
            best = temp;
        }
    }
    for (let i = 0; i < tries; i++) {
        var temp = randomArrangement(list);
        if (best == null || temp.getSize() < best.getSize()) {
            if (temp.getWidth() <= MAXWIDTH) {
                best = temp;
            }
        }
    }
    document.getElementById("score").innerHTML = best.getSize();
    show(best);
    console.log(best.getWidth());
}
console.time();
rngTry(TRIES);
console.timeEnd();