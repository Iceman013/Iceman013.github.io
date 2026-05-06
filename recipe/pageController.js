import { showUnitPage } from "./units.js";
import { readFile, writeToFile } from "./fileReader.js";


class Page {
    constructor(name, applier) {
        this.name = name;
        this.applier = applier;
    }
}

const pages = [
    new Page("Home", makeHomePage),
    new Page("Recipes", function() {}),
    new Page("Food", function() {}),
    new Page("Products", function() {}),
    new Page("Units", showUnitPage),
];

function clearPages() {
    pages.forEach(page => {
        document.getElementById(page.name + "-page-button").classList.remove("selected");
    });
    let pps = document.getElementsByClassName("a-page");
    for (let i = 0; i < pps.length; i++) {
        pps[i].style.display = "none";
    }
}

let currentPage;
function makePages() {
    let navbar = document.getElementById("navbar");
    pages.forEach(page => {
        let base = document.createElement("div");
        base.id = page.name + "-page-button";
        base.innerText = page.name;
        base.classList.add("nav-link");
        base.addEventListener("click", function() {
            clearPages();
            currentPage = page;
            base.classList.add("selected");
            page.applier();
        });
        navbar.appendChild(base);
    });
}

function makeHomePage() {
    document.getElementById("home-page").style.display = "block";
    document.getElementById("allow-file").addEventListener("click", async function() {
        let data = await readFile();
        document.getElementById("json-holder").innerText = JSON.stringify(data);
    });
    document.getElementById("refresh-data").addEventListener("click", async function() {
        if (window.confirm("Download data from GitHub?")) {
            const url = "https://raw.githubusercontent.com/Iceman013/Iceman013.github.io/refs/heads/main/recipe/recipes.json";
            const req = await fetch(url);
            const obby = await req.json();
            await writeToFile(obby);
        }
    });
}

function start() {
    makePages();
    document.getElementById(pages[0].name + "-page-button").click();
}

start();