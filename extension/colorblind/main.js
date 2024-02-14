let butFun = [
    function() {blind(0)},
    function() {blind(1)},
    function() {blind(2)},
    function() {blind(3)},
    function() {blind(4)},
    function() {blind(5)},
];

function clearButtons() {
    for (let i = 0; i < blinders.length; i++) {
        let base = document.getElementById(blinders[i].tag);
        base.classList.remove("active");
    }
}

function makeButtons() {
    for (let i = 0; i < blinders.length; i++) {
        let button = document.createElement("button");
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

        button.addEventListener("click", async function() {
            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: butFun[i],
            });
        });
    }
}
makeButtons();
lightMode();