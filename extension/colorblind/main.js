function a() {
    blind(0);
}
function b() {
    blind(1);
}
function c() {
    blind(2);
}
function d() {
    blind(3);
}
function e() {
    blind(4);
}
function f() {
    blind(5);
}

function makeButtons() {
    for (let i = 0; i < blinders.length; i++) {
        var button = document.createElement("button");
        button.id = blinders[i].tag;
        button.innerHTML = blinders[i].tag;
        document.getElementById("buttons").appendChild(button);
        
        var buttfun = [a, b, c, d, e, f];
        button.addEventListener("click", async () => {
            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: buttfun[i],
            });
        });
    }
}
makeButtons();