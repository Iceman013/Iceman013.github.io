import { Card } from "./card.js";

const spill = 0.24

function makeShape(base, id, card, offset) {
    let CWIDTH = base.clientWidth;
    let CHEIGHT = base.clientHeight;
    const width = (CWIDTH/3)*(1 - spill);
    const height = CHEIGHT*(1 - spill);
    
    function scale(shape) {
        let out = [];
        for (let i = 0; i < shape.length; i++) {
            out[i] = [0,0];
            out[i][0] = width*(shape[i][0] + spill/2) + offset;
            out[i][1] = height*(shape[i][1] + spill/2);
        }
        return out;
    }

    let area;
    let areaGenerator;
    if (card.getShape() == "Oval") {
        let path = [
            [0.5, 0],
            [0.95, 0.2],
            [0.95, 0.8],
            [0.5, 1],
            [0.05, 0.8],
            [0.05, 0.2]
        ];
        areaGenerator = d3.line().curve(d3.curveCardinalClosed);
        area = areaGenerator(scale(path));
    } else if (card.getShape() == "Diamond") {
        let path = [
            [0.5, 0],
            [1, 0.5],
            [0.5, 1],
            [0, 0.5],
            [0.5, 0]
        ];
        areaGenerator = d3.line();
        area = areaGenerator(scale(path));
    } else if (card.getShape() == "Squiggle") {
        let path = [
            [0, 0.2],
            [0.25, 0],
            [1, 0.25],
            [0.6, 0.7],
            [1, 0.8],
            [0.75, 1],
            [0, 0.8],
            [0.4, 0.3]
        ];
        areaGenerator = d3.line().curve(d3.curveBasisClosed);
        area = areaGenerator(scale(path));
    }
    
    d3.select("g#" + id)
        .append("path")
        .attr("d", area)
        .attr("class", card.getColor() + " " + card.getFill());
}

export function makeCard(base, card) {
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }

    let svgbase = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgbase.style.width = base.clientWidth - 4;
    svgbase.style.height = base.clientHeight - 4;
    base.appendChild(svgbase);
    if (card == null) {
        return;
    }
    
    for (let i = 0; i < card.count + 1; i++) {
        let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.id = base.id + "c" + i;
        svgbase.appendChild(g);
        let offset = (2 - card.count)*(base.clientWidth/6) + i*(base.clientWidth/3);
        makeShape(base, g.id, card, offset);
    }
}