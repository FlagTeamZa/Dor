
const mt_rand = require("../../add-on/mt_rand");

module.exports = {
    class: "swordman",
    run: (r,p) =>{
        switch (r) {
            case 0:
                var ob = {
                    "type": "buff",
                    "name": "all-def-3-35",
                    "turn": 3,
                    "msg": "%user% : บัฟเกราะ 35 % 3 เทิร์นให้เพื่อนร่วมทีมทุกคน"
                }
            return ob;

            case 1:
                var cri = mt_rand(1,10) < 2 ? p.Dmg * 2 : 0;
                var dmg = (p.Dmg * 1.5) + cri;

                var ob = {
                    "type": "atk",
                    "dmg": dmg,
                    "msg": `%user% : สร้างความเสียหาย ${dmg} !`
                }      
            return ob;

            case 2:
                var dmg = p.HP - p.MaxHP;
                var ob = {
                    "type": "atk",
                    "dmg": dmg,
                    "msg": `%user% : สร้างความเสียหาย ${dmg} !`
                }      
            return ob;

            case 3:
                var dmg = p.Dmg;
                var ob = {
                    "type": "atk",
                    "dmg": dmg,
                    "msg": `%user% : สร้างความเสียหาย ${dmg} !`
                }   
            return ob;
        }
    },
    Skill: [
        {
            description: "ทำให้เพื่อนร่วมทีมได้รับดาเมจจากการโจมตีน้อยลง 35 % เป็นเวลา 3 เทิร์น",
            cooldown: 5,
            type: "all-def-3-35",
            dmg: 0
        },
        {
            description: "โจมตีด้วยดาบ (+150% DMG + 10% cri rate)",
            cooldown: 5,
            type: "cr10-atk",
            dmg_per: 1.5
        },
        {
            description: "สร้างความเสียหาย 100% HP ที่เสียไปของคุณ",
            cooldown: 5,
            type: "100hp-atk",
            dmg: 0
        },
        {
            description: "สร้างความเสียหาย 100%",
            cooldown: 0,
            type: "normal-atk",
            dmg: 0
        }
    ] 

}