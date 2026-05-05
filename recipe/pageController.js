import { showUnitPage } from "./units.js";

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
}

function start() {
    makePages();
    document.getElementById(pages[0].name + "-page-button").click();
}

start();