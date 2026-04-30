// Service worker ?
const registerServiceWorker = async () => {
    try {
        await navigator.serviceWorker.register('/recipe/sw.js', { scope: '/recipe/'});
        console.log('Service worker registered');
    } catch (e) {
        console.log(`Registration failed: ${e}`);
    }
}
  
if (navigator.serviceWorker) {
    registerServiceWorker();
}



// Create IndexedDB
const dbName = "RecentFiles";

let db;
const dbReq = window.indexedDB.open(dbName, 1);

// Load db
function startDB(event) {
    db = event.target.result;
    db.createObjectStore("handles", {autoIncrement: true});
}
dbReq.onupgradeneeded = function(event) {
    startDB(event);
};
dbReq.onsuccess = function(event) {
    startDB(event);
}

async function createFileStorage() {
    // Make new file
    const options = {
        suggestedName: "recipes.json",
        types: [
            {
                description: "Cooking Files",
                accept: {
                    "application/json": [".json"],
                },
            },
        ],
    };
    const handle = await window.showSaveFilePicker(options);
    let transaction = db.transaction(["handles"], "readwrite");
    let storage = transaction.objectStore("handles");
    storage.add(handle);

    let publicData = await readPublicData();
    await writeToFile(publicData);

    return handle;
}

async function getStoredFileHandle() {
    let transaction = db.transaction(["handles"], "readwrite");
    let storage = transaction.objectStore("handles");
    const storageRequest = await storage.getAll();
    const myPromise = new Promise((resolve, reject) => {
        storageRequest.onsuccess = function(event) {
            let handleList = event.target.result;
            let fileHandle = handleList.at(-1);
            resolve(fileHandle);
        }
    });
    return myPromise;
}

async function verifyPermission(handle) {
    const opts = {
        writable: true,
        mode: "readwrite"
    };
    // Check if we already have permission, if so, return true.
    if (await handle.queryPermission(opts) === 'granted') {
        return true;
    }
    // Request permission to the file, if the user grants permission, return true.
    if (await handle.requestPermission(opts) === 'granted') {
        return true;
    }
    // The user did nt grant permission, return false.
    return false;
}

async function readPublicData() {
    let response = await fetch("./recipes.json");
    let json = await response.json();
    return json;
}

async function writeToFile(data) {
    let handle = await getStoredFileHandle();
    const writable = await handle.createWritable();
    await writable.write(JSON.stringify(data));
    await writable.close();
}

async function getFileHandle() {
    let handle = await getStoredFileHandle();
    if (!handle) {
        handle = await createFileStorage();
    }
    let verified = await verifyPermission(handle);
    if (verified) {
        return handle;
    }
    console.log("Why you say no? Trust me with your files pls :(");
    // Uhhhhh if they dont give permission, I have no clue mate
}

async function readFile() {
    let handle = await getFileHandle();
    let file = await handle.getFile();
    console.log(file);
    let cont = await file.text();
    console.log(cont);
    let oby = JSON.parse(cont);
    console.log(oby);
    document.getElementById("output").innerText = JSON.stringify(oby);
}

// document.getElementById("b3").addEventListener("click", verifyPermission);


let butOpenFile = document.getElementById("b1");
butOpenFile.addEventListener('click', readFile);