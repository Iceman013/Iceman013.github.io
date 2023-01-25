var messageQ = [];
function Text(type, message) {
    this.type = type;
    this.message = message;
}

function addLetter() {
    var base = document.getElementById("typingMessages");
    var obase = document.getElementById("pastMessages");

    if (!base.hasChildNodes()) {
        var addition = document.createElement("p");
        addition.classList.add(messageQ[0].type);
        addition.innerHTML = "";
        base.appendChild(addition);
    }

    if (messageQ[0].message != "") {
        base.lastChild.innerHTML += messageQ[0].message.substring(0, 1);
        messageQ[0].message = messageQ[0].message.substring(1);
        setTimeout(addLetter, TICKSPEED);
    } else {
        messageQ.splice(0, 1);
        obase.appendChild(base.lastChild);
        if (base.hasChildNodes()) {
            base.remove(base.lastChild);
        }
        if (messageQ.length > 0) {
            setTimeout(addLetter, 20*TICKSPEED);
        }
    }
}
function sendMessage(type, message) {
    messageQ.push(new Text(type, message));
    if (messageQ.length == 1) {
        addLetter();
    }
}