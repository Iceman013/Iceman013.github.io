function Player() {
    this.xPosition = -1*ZOOM*((SIZE - ZOOM)/2);
    this.yPosition = -1*ZOOM*((SIZE - ZOOM)/2);
    this.direction = 0;
    this.moveSpeed = 0.5;
    this.rotationSpeed = 0.002;
    this.inventory = [];
    
    this.updateInventory = function() {
        var base = document.getElementById("inventory");
        while (base.firstChild) {
            base.removeChild(base.firstChild);
        }
        for (let i = 0; i < this.inventory.length; i++) {
            var contain = document.createElement("div");
            base.appendChild(contain);
            contain.classList.add("slot");

            var slot = document.createElement("div");
            contain.appendChild(slot);
            slot.classList.add("itemSlot");

            var item = document.createElement("div");
            slot.appendChild(item);
            item.classList.add("item");
            item.style.backgroundImage = "url('" + this.inventory[i].item.image + "')";

            var name = document.createElement("p");
            item.appendChild(name);
            name.innerHTML = this.inventory[i].item.name;

            var count = document.createElement("p");
            item.appendChild(count);
            count.innerHTML = this.inventory[i].quantity;
        }
    }
    this.addToInventory = function(item, quantity) {
        var found = false;
        for (let i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].item == item) {
                found = true;
                this.inventory[i].quantity += quantity;
            }
        }
        if (!found) {
            var slot = {
                item: item,
                quantity: quantity
            };
            this.inventory.push(slot);
        }
        this.updateInventory();
    }
}