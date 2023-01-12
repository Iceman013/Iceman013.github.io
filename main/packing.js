const MAXWIDTH = document.getElementsByClassName("content")[0].clientWidth;
console.log(MAXWIDTH);

function shove(box) {
    for (let i = 0; i < box.children.length - 1; i++) {
        if (box.orientation) {
            if (box.children[i].getHeight() + box.children[i + 1].getHeight() <= box.max) {
                if (box.children[i].isContainer()) {
                    box.children[i].children.push(box.children[i + 1]);
                    box.children[i].max = Math.max(box.children[i].max, box.children[i + 1].getWidth());
                    box.children.splice(i + 1, 1);
                    shove(box.children[i]);
                    i = i - 1;
                } else {
                    var newb = new Box([box.children[i], box.children[i + 1]], !box.orientation, Math.max(box.children[i].getWidth(), box.children[i + 1].getWidth()));
                    box.children.splice(i, 2, newb);
                    i = -1;
                }
            }
        } else {
            if (box.children[i].getWidth() + box.children[i + 1].getWidth() <= box.max) {
                if (box.children[i].isContainer()) {
                    box.children[i].children.push(box.children[i + 1]);
                    box.children[i].max = Math.max(box.children[i].max, box.children[i + 1].getHeight());
                    box.children.splice(i + 1, 1);
                    shove(box.children[i]);
                    i = i - 1;
                } else {
                    var newb = new Box([box.children[i], box.children[i + 1]], !box.orientation, Math.max(box.children[i].getHeight(), box.children[i + 1].getHeight()));
                    box.children.splice(i, 2, newb);
                    i = -1;
                }
            }
        }
    }
}
function pack(base, children) {
    var list = [];
    for (let i = 0; i < children.length; i++) {
        list.push(new Widget(children[i]));
    }
    var core = new Box(list, false, MAXWIDTH);
    shove(core);
    base.appendChild(core.create(true));
}