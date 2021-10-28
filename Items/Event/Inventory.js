const fs = require("fs");

const Inv = require("../../Config/inventory.json");
// const Copy = Inv;
const setting = require("../../Config/autosave.json");
const Item = require("../Item");
module.exports = class Inventory{
    constructor(value = 1){
        if (value !== 1) {
            this.AutoSave();
            console.log("[Auto Save] Inventory Config start.");
        }
    }

    New(id){
        Inv[id] = {
            "RIGHT_HAND": null,
            "LEFT_HAND": null,
            "SLOT_HEAD": null,
            "SLOT_CHEST": null,
            "SLOT_LEGS": null,
            "SLOT_FEET": null,
            "MAX_SLOT": 30,
            "INVENTORY": []
        }
    }
    addItem(id,item,count){
        var count = count;
        var im = new Item(item);
        for (let i = 0; i < Inv[id].INVENTORY.length; i++) {
        if (Inv[id].INVENTORY[i].item === im.getName()) {
            count+=Inv[id].INVENTORY[i].count;
            Inv[id].INVENTORY = Inv[id].INVENTORY.splice(i,i);
        }
        }
        Inv[id].INVENTORY.push(im.get(count));
        console.log(Inv[id]);
    }
    getSlot(id){
        return Inv[id].MAX_SLOT;
    }
    getInventory(id){
        return Inv[id].INVENTORY;
    }
    getSlot(id){
        return Inv[id].MAX_SLOT;
     }

    getFeet(id){
        return Inv[id].SLOT_FEET;
     }

    getLegs(id){
        return Inv[id].SLOT_LEGS;
     }

    getChest(id){
        return Inv[id].SLOT_CHEST;
     }

    getHead(id){
        return Inv[id].SLOT_HEAD;
     }

    getLeftHand(id){
        return Inv[id].LEFT_HAND;
     }

    getRightHand(id){
       return Inv[id].RIGHT_HAND;
    }



    save() {
        console.log("[Auto Save] Inventory Config start.");
         fs.writeFile("./Config/inventory.json", JSON.stringify(Inv,null,4), (err) => {
           if (err) console.error(err)
            });
       }

    AutoSave(){
        setInterval(() => {
          this.save();
        }, setting.InventoryConfig * 1000);
    }

}