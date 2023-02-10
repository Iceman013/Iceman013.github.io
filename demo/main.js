const RSS_URL = "https://rss.app/feeds/ahp2p8UMMzz6A8Xs.xml";
fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data))