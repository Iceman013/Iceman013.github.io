const widgetList = [
    new Widget("widget1", function(website) {
        let base = document.createElement("a");
        base.href = website.address;
        base.style.backgroundImage = "url('" + website.image + "')";

        let content = document.createElement("div");
        content.classList.add("widgetContent");
        base.appendChild(content);

        let des = document.createElement("div");
        des.classList.add("description");
        des.innerText = website.description;
        content.appendChild(des);

        let ibase = document.createElement("div");
        ibase.classList.add("icons");
        for (let i = 0; i < website.tags.length; i++) {
            let ico = document.createElement("img");
            let image = website.tags[i];
            for (let j = 0; j < tagList.length; j++) {
                if (tagList[j].name == image) {
                    ico.src = tagList[j].image;
                    ico.style.backgroundColor = tagList[j].color;
                }
            }

            ibase.appendChild(ico);
        }
        content.appendChild(ibase);

        let name = document.createElement("div");
        name.classList.add("name");
        name.innerText = website.name;
        base.appendChild(name);

        return base;
    }),

    new Widget("widget2", function(website) {
        let base = document.createElement("a");
        base.href = website.address;

        let content = document.createElement("code");
        content.innerText = JSON.stringify(website);
        base.appendChild(content);
        return base;
    })
]