const CreatePartyConfig = require("../../Event/Config/CreatePartyConfig");
const UserSettingConfig = require("../../Event/Config/UserSettingConfig");
const SkillButtons = require("../../GUI/Buttons/SkillButtons");






const Party = new CreatePartyConfig();
const setting = new UserSettingConfig();



module.exports = {
    player: async (message,user,embed) => {
        var p = Party.getParty(user);
        var me = "";
        for (let i = 0; i < p.member.length; i++) {
         me+=`<@${p.member[i]}>`;
        }
        
        var userSetting = setting.get(user);
        var partyPage = p.msgID ? p.msgID : userSetting.pageID;
        var row = SkillButtons.get();
        message.channel.messages.fetch({around: partyPage, limit: 1})
        .then(messages => {

          messages.first().edit({content: `${me}`,files: [], components: [row],attachments: [], embeds: [embed]}).then(msg =>{
            msg.reactions.removeAll();
          });

        });
    },
    enemy: async (message,user,embed) => {
        // console.log(embed);
        var p = Party.getParty(user);
        var me = "";
        for (let i = 0; i < p.member.length; i++) {
         me+=`<@${p.member[i]}>`;
        }
        
        var userSetting = setting.get(user);
        var partyPage = p.msgID ? p.msgID : userSetting.pageID;
        message.channel.messages.fetch({around: partyPage, limit: 1})
        .then(messages => {
            // console.log("aa");
          messages.first().edit({content: `${me}`,files: [], components: [],attachments: [], embeds: [embed]}).then(msg =>{
            msg.reactions.removeAll();
          });

        });
    },
    done: async (message,user,embed) => {
      // console.log(embed);
      var p = Party.getParty(user);
      var me = "";
      for (let i = 0; i < p.member.length; i++) {
       me+=`<@${p.member[i]}>`;
      }
      
      var userSetting = setting.get(user);
      var partyPage = p.msgID ? p.msgID : userSetting.pageID;
      message.channel.messages.fetch({around: partyPage, limit: 1})
      .then(messages => {
          // console.log("aa");
        messages.first().edit({content: `${me}`,files: [], components: [],attachments: [], embeds: [embed]}).then(msg =>{
          msg.reactions.removeAll();
        });

      });
  }
}