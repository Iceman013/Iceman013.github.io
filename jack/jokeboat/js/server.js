import { serverURL } from "./constants.js";

export function post(data) {
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

export function get(input) {
    fetch(serverURL + "/" + input)
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        // Initialize the DOM parser
        let parser = new DOMParser();

        // Parse the text
        let body = parser.parseFromString(html, "text/html").body.innerText;

        console.log(body);
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });
}