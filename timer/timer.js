



module.exports = class timer{

    constructor(){
        this.cooldown();
        this.pattle = [
            {name:"user",time: 60},
            {name:"process_user",time: 5},
            {name:"enemy",time: 10},
            {name:"process_enemy",time: 5}
        ];
    }

    async cooldown(diff = 1){
        setInterval(() => {
            diff++;
            console.log(diff);
        }, 1000);
    }


}