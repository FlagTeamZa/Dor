const CreateCharacterConfig = require("./Config/CreateCharacterConfig")

// const create = require("../Commands/cmd/create");
// CreateCharacterConfig
const CCc = new CreateCharacterConfig();
const Canvas = require("canvas");
const {MessageAttachment} = require("discord.js");
const fs = require("fs");
const CreateImg1_embed = require("../GUI/CreateImg1_embed");
const UserUniformEvent = require("./Config/UserUniformEvent");
const UserConfigEvent = require("./Config/UserConfigEvent");
const uniform = new UserUniformEvent();
const Users = new UserConfigEvent();
// UserConfigEvent
// UserUniformEvent
module.exports = {
    async create(user){
        // console.log(user);
        
        //         const path = './file.txt'
        var h = CCc.get("head",user) > 0 ? CCc.get("head",user) : 0;
        var s1 = CCc.get("shirt",user) > 0 ? CCc.get("shirt",user) : 0;
        var t = CCc.get("trousers",user) > 0 ? CCc.get("trousers",user) : 0;
        var s2 = CCc.get("shoe",user) > 0 ? CCc.get("shoe",user) : 0;
        var c = CCc.get("color",user) > 0 ? CCc.get("color",user) : 0;
        var e = CCc.get("eyes",user) > 0 ? CCc.get("eyes",user) : 0;
        var m = CCc.get("mouth",user) > 0 ? CCc.get("mouth",user) : 0;
        var g = CCc.get("gender",user);
        var j = CCc.get("job",user);
        // console.log(g);
        // console.log(h);
        const path = `./Img/File/h${h}s${s1}t${t}s${s2}c${c}e${e}m${m}g${g}j${j}.png`;
        if (fs.existsSync(path)) {
            return new MessageAttachment(path,`h${h}s${s1}t${t}s${s2}c${c}e${e}m${m}g${g}j${j}.png`);
        }
            
        const canvas = Canvas.createCanvas(2500, 2500);
        const context = canvas.getContext('2d');


        const background = await Canvas.loadImage('./Img/BG/bg.png');
        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        const sub_background = await Canvas.loadImage('./Img/BG/test2.png');
        context.drawImage(sub_background, 0, 0, canvas.width, canvas.height);

        const skin = await Canvas.loadImage(`./Img/${CCc.get("gender",user)}/${CCc.get("color",user)}.png`);
        context.drawImage(skin, 0, 0, canvas.width, canvas.height);
        if (CCc.get("head",user) !== 0) {
            const head = await Canvas.loadImage(`./Img/head/${CCc.get("head",user)-1}.png`);
            context.drawImage(head, 0, 0, canvas.width, canvas.height);  
            var h = CCc.get("head",user);
        }

        if (CCc.get("head",user) !== 0) {
            const semihead = await Canvas.loadImage(`./Img/semihead/${CCc.get("head",user)-1}.png`);
            context.drawImage(semihead, 0, 0, canvas.width, canvas.height);   
        }

        if (CCc.get("eyes",user) !== 0) {
            const eyes = await Canvas.loadImage(`./Img/eyes/${CCc.get("eyes",user)-1}.png`);
            context.drawImage(eyes, 0, 0, canvas.width, canvas.height);
            var e = CCc.get("eyes",user);
        }

        if (CCc.get("mouth",user) !== 0) {
            const mouth = await Canvas.loadImage(`./Img/mouth/${CCc.get("mouth",user)-1}.png`);
            context.drawImage(mouth, 0, 0, canvas.width, canvas.height); 
            var m = CCc.get("mouth",user);
        }

        if (CCc.get("shirt",user) !== 0) {
            const shirt = await Canvas.loadImage(`./Img/shirt/${CCc.get("shirt",user)-1}.png`);
            context.drawImage(shirt, 0, 0, canvas.width, canvas.height); 
            var s1 = CCc.get("shirt",user);
        }
  
        if (CCc.get("trousers",user) !== 0) {
            const trousers = await Canvas.loadImage(`./Img/trousers/${CCc.get("trousers",user)-1}.png`);
            context.drawImage(trousers, 0, 0, canvas.width, canvas.height); 
            var t = CCc.get("trousers",user);
        }

        const buffer = canvas.toBuffer('image/png');
        var file = `./Img/File/h${h}s${s1}t${t}s${s2}c${c}e${e}m${m}g${g}j${j}.png`;
        fs.writeFileSync(file, buffer);
        const attachment = new MessageAttachment(file,`h${h}s${s1}t${t}s${s2}c${c}e${e}m${m}g${g}j${j}.png`);;

        return attachment;
    },

    async profile(user){
        // console.log(user);
        
        //         const path = './file.txt'
        var h = CCc.get("head",user) ? CCc.get("head",user) : uniform.getHead(user);
        var s1 = CCc.get("shirt",user) ? CCc.get("shirt",user) : uniform.getShirt(user);
        var t = CCc.get("trousers",user) ? CCc.get("trousers",user) : uniform.getTrousers(user);
        var s2 = CCc.get("shoe",user) ? CCc.get("shoe",user) : uniform.getShoe(user);
        var c = CCc.get("color",user) ? CCc.get("color",user) : uniform.getColor(user);
        var e = CCc.get("eyes",user) ? CCc.get("eyes",user) : uniform.getEyes(user);
        var m = CCc.get("mouth",user) ? CCc.get("mouth",user) : uniform.getMouth(user);
        var g = CCc.get("gender",user) ? CCc.get("gender",user): uniform.getGender(user);
        var j = CCc.get("job",user) ? CCc.get("job",user) : Users.getJob(user);
        switch (j) {
            case "swordman":
                var j = "s";
            break;
        }
        // console.log(g);
        // console.log(h);
        const path = `./Img/File/h${h}s${s1}t${t}s${s2}c${c}e${e}m${m}g${g}j${j}.png`;
        // console.log(path);
        if (fs.existsSync(path)) {
            return new MessageAttachment(path,`h${h}s${s1}t${t}s${s2}c${c}e${e}m${m}g${g}j${j}.png`);
        }
            
        const canvas = Canvas.createCanvas(2500, 2500);
        const context = canvas.getContext('2d');


        const background = await Canvas.loadImage('./Img/BG/bg.png');
        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        const sub_background = await Canvas.loadImage('./Img/BG/test2.png');
        context.drawImage(sub_background, 0, 0, canvas.width, canvas.height);

        const skin = await Canvas.loadImage(`./Img/${g}/${c}.png`);
        context.drawImage(skin, 0, 0, canvas.width, canvas.height);
        if (h !== 0) {
            const head = await Canvas.loadImage(`./Img/head/${h-1}.png`);
            context.drawImage(head, 0, 0, canvas.width, canvas.height);  
            const semihead = await Canvas.loadImage(`./Img/semihead/${h-1}.png`);
            context.drawImage(semihead, 0, 0, canvas.width, canvas.height);  
        }

        if (e !== 0) {
            const eyes = await Canvas.loadImage(`./Img/eyes/${e-1}.png`);
            context.drawImage(eyes, 0, 0, canvas.width, canvas.height);
        }

        if (m !== 0) {
            const mouth = await Canvas.loadImage(`./Img/mouth/${m-1}.png`);
            context.drawImage(mouth, 0, 0, canvas.width, canvas.height); 
        }

        if (s1 !== 0) {
            const shirt = await Canvas.loadImage(`./Img/shirt/${s1-1}.png`);
            context.drawImage(shirt, 0, 0, canvas.width, canvas.height); 
        }
  
        if (t !== 0) {
            const trousers = await Canvas.loadImage(`./Img/trousers/${t-1}.png`);
            context.drawImage(trousers, 0, 0, canvas.width, canvas.height); 
        }

        const buffer = canvas.toBuffer('image/png');
        var file = `./Img/File/h${h}s${s1}t${t}s${s2}c${c}e${e}m${m}g${g}j${j}.png`;
        fs.writeFileSync(file, buffer);
        const attachment = new MessageAttachment(file,`h${h}s${s1}t${t}s${s2}c${c}e${e}m${m}g${g}j${j}.png`);;

        return attachment;
    }
}