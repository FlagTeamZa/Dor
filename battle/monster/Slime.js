





module.exports = {
    class: "Slime",
    Level: 1,
    HP: 11,
    Skill: [
        {
            description: "พุ่งชน",
            cooldown: 5,
            type: "atk-basic",
            dmg: 15
        },
        {
            description: "หลบการโจมตี",
            cooldown: 5,
            type: "miss-1",
            turn: 1
        },
        {
            description: "หมุนตัวโจมตี",
            cooldown: 5,
            type: "atk-basic",
            dmg: 20
        }
    ],
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