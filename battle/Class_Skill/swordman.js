


module.exports = {
    class: "swordman",
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