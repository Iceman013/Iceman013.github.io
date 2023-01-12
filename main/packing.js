const TRIES = 100_000;
const MAXWIDTH = window.innerWidth*0.85;

function makeRectangles(widgets) {
    var list = [];
    for (let i = 0; i < widgets.length; i++) {
        var rect = new Widget(widgets[i]);
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
function pack(base, wlist) {
    var list = makeRectangles(wlist);
    var best;
    while (best == null) {
        var temp = randomArrangement(list);
        if (temp.getWidth() <= MAXWIDTH) {
            best = temp;
        }
    }
    for (let i = 0; i < TRIES; i++) {
        var temp = randomArrangement(list);
        if (best == null || temp.getHeight() < best.getHeight()) {
            if (temp.getWidth() <= MAXWIDTH) {
                best = temp;
            }
        }
    }
    console.log(best.getWidth());
    base.appendChild(best.create(true));
}