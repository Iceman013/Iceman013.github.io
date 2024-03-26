export function post(data, serverURL) {
    fetch(serverURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).catch(error => {
        // Ignore empty error
    });
}

export async function get(serverURL) {
    // Fetch data
    let response = await (fetch(serverURL));
    let text = await response.text();
    let parser = new DOMParser();

    // Convert to array of jsons
    let body = parser.parseFromString(text, "text/html").body.innerText;
    let array = body.split(",\n");
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] != "") {
            output.push(JSON.parse(array[i]));
        }
    }

    return output;
}

export async function getAll(serverURL, gameId) {
    let current = await get(serverURL);
    let output = [];
    current.forEach((i) => {
        if (i.game == gameId) {
            output.push(i);
        }
    });

    return output;
}