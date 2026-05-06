import { readFile, writeToFile } from "./fileReader.js";

class Unit {
    constructor(object) {
        this.id = object.id;
        this.name = object.name;
        this.singular = object.singular;
        this.plural = object.plural;
        this.description = object.description;
    }
}

// Make a unit converter

export async function getUnits() {
    let json = await readFile();
    let readUnits = json.units;
    let units = [];
    readUnits.forEach(item => {
        units.push(new Unit(item));
    });
    return units;
}

function showUnits(units) {
    let base = document.getElementById("unit-list");
    while (base.hasChildNodes()) {
        base.removeChild(base.firstChild);
    }
    units.forEach(unit => {
        let element = document.createElement("div");
        element.classList.add("unit-box");
        let title = document.createElement("div");
        title.classList.add("unit-title");
        title.innerText = unit.name;
        element.appendChild(title);
        let slash = document.createElement("div");
        slash.classList.add("unit-units");
        slash.innerText = "(" + unit.singular + "/" + unit.plural + ")";
        element.appendChild(slash);
        let desc = document.createElement("div");
        desc.classList.add("unit-desc");
        desc.innerText = unit.description;
        element.appendChild(desc);
        
        base.appendChild(element);
    });
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal-content").style.display = "none";
}

async function addUnit(unit) {
    let data = await readFile();
    data.units.push(unit);
    await writeToFile(data);
    showUnitPage();
}

export async function showUnitPage() {
    document.getElementById("units-page").style.display = "block";
    let units = await getUnits();
    showUnits(units);
    document.getElementById("add-unit").addEventListener("click", function() {
        let modal = document.getElementById("modal");
        modal.style.display = "block";
        // modal.addEventListener("click", closeModal);

        let base = document.getElementById("modal-content");
        base.style.display = "block";
        while (base.hasChildNodes()) {
            base.removeChild(base.firstChild);
        }

        let nameInputLabel = document.createElement("label");
        nameInputLabel.innerText = "Name";
        nameInputLabel.for = "nameInput";
        base.appendChild(nameInputLabel);
        base.appendChild(document.createElement("br"));
        let nameInput = document.createElement("input");
        nameInput.id = "nameInput";
        base.appendChild(nameInput);

        base.appendChild(document.createElement("br"));

        let singLabel = document.createElement("label");
        singLabel.innerText = "Singular";
        singLabel.for = "singInput";
        base.appendChild(singLabel);
        base.appendChild(document.createElement("br"));
        let singInput = document.createElement("input");
        singInput.id = "singInput";
        base.appendChild(singInput);

        base.appendChild(document.createElement("br"));

        let pluLabel = document.createElement("label");
        pluLabel.innerText = "Plural";
        pluLabel.for = "pluInput";
        base.appendChild(pluLabel);
        base.appendChild(document.createElement("br"));
        let pluInput = document.createElement("input");
        pluInput.id = "pluInput";
        base.appendChild(pluInput);

        base.appendChild(document.createElement("br"));

        let descLabel = document.createElement("div");
        descLabel.innerText = "Description";
        base.appendChild(descLabel);
        let descInput = document.createElement("textarea");
        base.appendChild(descInput);

        let submit = document.createElement("button");
        submit.innerText = "Add";
        base.appendChild(submit);

        submit.addEventListener("click", function() {
            let uni = new Unit({
                "id": units.length + 1,
                "name": nameInput.value,
                "singular": singInput.value,
                "plural": pluInput.value,
                "description": descInput.value
            });
            addUnit(uni);
            closeModal();
        })
    });
}
