import { Sign } from "./sign.js";
import { getRandom } from "./tools.js";

/**
 * 
 * @param {Sign} sign 
 * @param {Integer} method
 */
export function MakeQuestion(sign, method) {
    let base = document.createElement("div");
    base.classList.add("question");

    let viewer = document.createElement("div");
    viewer.classList.add("viewer");

    if (method == 1) {
        let image = document.createElement("img");
        image.src = "signs/" + getRandom(sign.images)
        viewer.appendChild(image);
    } else if (method == 2) {
        let name = document.createElement("h1");
        name.innerText = getRandom(sign.names);
        viewer.appendChild(name);
    }

    base.appendChild(viewer);

    return base;
}

export function ShowSign(sign) {
    let base = document.createElement("div");
    base.classList.add("answer");

    let namesList = document.createElement("div");
    namesList.classList.add("list");
    for (let i = 0; i < sign.names.length; i++) {
        let name = document.createElement("h3");
        name.innerText = sign.names[i];
        namesList.appendChild(name);
    }

    let imageList = document.createElement("div");
    imageList.classList.add("list");
    for (let i = 0; i < sign.images.length; i++) {
        let image = document.createElement("img");
        image.src = "signs/" + sign.images[i];
        imageList.appendChild(image);
    }

    base.appendChild(namesList);
    base.appendChild(imageList);

    return base;
}