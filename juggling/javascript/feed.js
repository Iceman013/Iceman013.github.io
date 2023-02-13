const RSS_URL = "https://rss.app/feeds/ahp2p8UMMzz6A8Xs.xml";

function makeItem(item) {
    function removeJunk(text) {
        if (text.includes("<img src=")) {
            var ender = ' style="width: 100%;" />';
            text = text.substring(0, text.indexOf("<img src=")) + text.substring(text.indexOf(ender) + ender.length);
        }
        return text.substring(9, text.length - 3);
    }

    var base = document.createElement("div");
    base.classList.add("post");
    document.getElementById("insta").appendChild(base);

    // Title
    var title = document.createElement("h3");
    title.innerHTML = removeJunk(item.querySelectorAll("title")[0].innerHTML);
    base.appendChild(title);

    var imgUrl = item.querySelectorAll("content")[0].attributes.url.nodeValue;
    // Description
    var description = document.createElement("div");
    description.innerHTML = removeJunk(item.querySelectorAll("description")[0].innerHTML);
    base.appendChild(description);

    // Date
    var date = document.createElement("p");
    date.classList.add("date");
    var time = new Date(item.querySelectorAll("pubDate")[0].innerHTML);
    date.innerHTML = getTime(time);
    base.appendChild(date);
    //var finalUrl = "https://cors-anywhere.azm.workers.dev/" + imgUrl;
}
fetch(RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const items = data.querySelectorAll("item");
        for (let i = 0; i < items.length; i++) {
            makeItem(items[i]);
        }
});