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
function g() {
    blind(6);
}
function h() {
    blind(7);
}
function j() {
    blind(8);
}

function clearButtons() {
    for (let i = 0; i < blinders.length; i++) {
        var base = document.getElementById(blinders[i].tag);
        base.classList.remove("active");
    }
}

function makeButtons() {
    for (let i = 0; i < blinders.length; i++) {
        var button = document.createElement("button");
        button.id = blinders[i].tag;
        button.innerHTML = blinders[i].tag;
        button.classList.add("mode");
        document.getElementById("buttons").appendChild(button);
        
        const capi = i;
        const btn = button;
        chrome.storage.sync.get(['choice'], function(result) {
            if (result.choice == capi) {
                btn.classList.add("active");
            }
        });

        button.addEventListener("click", function() {
            clearButtons();
            this.classList.add("active");
        });

        var buttfun = [a, b, c, d, e, f, g, h, j];
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