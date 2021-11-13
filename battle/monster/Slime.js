





module.exports = {
    class: "Slime",
    Level: 1,
    HP: 11,
    run: (skill) =>{
        switch (skill) {
            case 0:
                var ob = {
                    "type": "atk",
                    "dmg": 15,
                    "msg": "%user% : พุ่งชน %player% สร้างความเสียหาย %dmg% !"
                }
            return ob;

            case 1:
                var ob = {
                    "type": "buff",
                    "name": "miss",
                    "turn": 1,
                    "msg": `%user% : บัฟหลบการโจมตีให้ตัวเอง !`
                }      
            return ob;

            case 2:
                var ob = {
                    "type": "atk",
                    "dmg": 20,
                    "msg": "%user% : หมุนตัวโจมตี %player% สร้างความเสียหาย %dmg% !"
                }      
        }
    },
    Drop: {
        EXP: {
            min: 10,
            max: 15
        },
        Money: {
            min: 20,
            max: 40
        },
        Uncommon: {
            rate: 100,
            Item: "SLIME_BALL",
            min: 1,
            max: 5
        },
        Common: {
            rate: 20,
            Item: "SLIME_WATER",
            min: 1,
            max: 3
        }
    }

    
}