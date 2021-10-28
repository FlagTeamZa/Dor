const ButtonsClass = require("../../add-on/ButtonsClass");
const CreateImg_embed = require("../../GUI/CreateImg_embed");
const CreateCharacterConfig = require("../Config/CreateCharacterConfig");
const createimg = require("../createimg");
const main = require("../../battle/main");
const main_ = new main();
// ButtonsClass
// createimg
// CreateCharacterConfig
const CCc = new CreateCharacterConfig();
// const UUe = new UserUniformEvent();
// UserUniformEvent
const name = "SelectSkillButtonEvent";
const set = require("../../Config/set.json");
const EnemyBattleClass = require("../../add-on/EnemyBattleClass");
const CreatePartyConfig = require("../Config/CreatePartyConfig");
const Party = new CreatePartyConfig();
// CreateP
module.exports = (client) => {
    console.log(`[System] Event/Buttons/${name} connect.`);
    client.on("interactionCreate", async i => {
        if (i.isButton()) {
          i.deferUpdate();
            switch (i.customId) {
                case "Skill1":
                  var p = Party.getParty(i.user.id);
                  if (!p) {
                    return;
                  }
                  if (p.msgID !== i.message.id) {
                    return;
                  }
                  if (main_.isUse(i.user.id)) {
                    return; 
                   }
                  if (main_.isCooldown(i.user.id,0)) {
                    return;
                  }
                  main_.PlayerATK(
                    i.user.id,
                    0,
                    i.message
                  )
                break;
               
                case "Skill2":
                  var p = Party.getParty(i.user.id);
                  if (!p) {
                    return;
                  }
                  if (p.msgID !== i.message.id) {
                    return;
                  }
                  if (main_.isUse(i.user.id)) {
                    return; 
                   }
                  if (main_.isCooldown(i.user.id,1)) {
                    return;
                  }
                  main_.PlayerATK(
                    i.user.id,
                    1,
                    i.message
                  )                    
                break;

                case "Skill3":
                  var p = Party.getParty(i.user.id);
                  if (!p) {
                    return;
                  }
                  if (p.msgID !== i.message.id) {
                    return;
                  }
                  if (main_.isUse(i.user.id)) {
                    return; 
                   }
                  if (main_.isCooldown(i.user.id,2)) {
                    return;
                  }
                  main_.PlayerATK(
                    i.user.id,
                    2,
                    i.message
                  )                     
                break;

                case "Skill4":
                    
                break;
                                
            }
        }
    });
}