function handlePages() {
    function showPage(number) {
        let pages = ["welcome", "terms-and-conditions", "main"];
        for (let i = 0; i < pages.length; i++) {
            document.getElementById(pages[i]).classList.add("hidden");
        }
        document.getElementById(pages[number]).classList.remove("hidden");
    }

    document.getElementById("start").addEventListener("click", function() {
        showPage(2);
    });
    document.getElementById("terms").addEventListener("click", function() {
        showPage(1);
    });
    document.getElementById("endTerms").addEventListener("click", function() {
        let base = document.getElementById("agrees");
        let children = base.getElementsByTagName("input");
        let allC = true;
        for (let i = 0; i < children.length; i++) {
            if (children[i].checked == false) {
                allC = false;
            }
        }
        if (allC) {
            showPage(0);
        }
    });

    showPage(0);
}

function addNewImage() {
    // let url = "https://100k-faces.glitch.me/random-image";
    let url = "https://thispersondoesnotexist.com/";
    let base = document.getElementById("images");

    let img = document.createElement("img");
    img.classList.add("image");
    img.id = "chosenImage";

    if (!base.firstChild) {
        base.appendChild(img);
    }

    document.getElementById("chosenImage").src = url;
}
function main() {
    handlePages();
    addNewImage();

    document.getElementById("submit").addEventListener("click", addNewImage);
}
main();