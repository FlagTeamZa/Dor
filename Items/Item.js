

var Items = require("../Config/Items.json");

module.exports = class Item{
    constructor(Item){
        for (let i = 0; i < Items.length; i++) {
          if (Items[i].id === Item) {
            this.item = Items[i];
            break;
          }
        }
    }

    get(count){
        var ob = {
            "item": this.item.name,
            "count": count
        }
        return ob;
    }

    getName(){
        return this.item.name;
    }

    
}