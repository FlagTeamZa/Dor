

const name = "CreateCharacterConfig";
console.log(`[System] Event/Config/${name} connect.`);
const users = [];
const messages = [];
const values = [];
const eyes = [];
const mouth = [];
const head = [];
const shirt = [];
const trousers = [];
const shoe = [];
const color = [];
const gender = [];
const msg = [];
const job = [];
const createmode = [];
module.exports = class CreateCharacterConfig{
    get(type = null, id){
        switch (type) {
            case "createmode":
                if (typeof createmode[id] === 'undefined') {
                    return false;
                }
                return createmode[id];
            case "job":
                if (typeof job[id] === 'undefined') {
                    return false;
                }
                return job[id];

            case "head":
            if (typeof head[id] === 'undefined') {
                return false;
            }
            return head[id];

            case "shirt":
            if (typeof shirt[id] === 'undefined') {
                return false;
            }
            return shirt[id];

            case "trousers":
            if (typeof trousers[id] === 'undefined') {
                return false;
            }
            return trousers[id];

            case "shoe":
            if (typeof shoe[id] === 'undefined') {
                return false;
            }
            return shoe[id];        
            
            case "color":
            if (typeof color[id] === 'undefined') {
                return false;
            }
            return color[id];        
            
            case "eyes":
            if (typeof eyes[id] === 'undefined') {
                return false;
            }
            return eyes[id];                  

            case "gender":
            if (typeof gender[id] === 'undefined') {
                return false;
            }
            return gender[id];   

            case "msg":
            if (typeof msg[id] === 'undefined') {
                return false;
            }
            return msg[id];   

            case "mouth":
            if (typeof mouth[id] === 'undefined') {
               return false;
            }
            return mouth[id];   
                
            case "users":
            if (typeof users[id] === 'undefined') {
                return false;
            }
            return users[id];

            case "messages":
            if (typeof messages[id] === 'undefined') {
               return false;
            }
            return messages[id];  

            case "values":
            if (typeof values[id] === 'undefined') {
              return false;
            }
            return values[id];       
        }
    }

    set(type = null,id,value){
        switch (type) {
            case "createmode":
            createmode[id] = value;
            // console.log(createmode[id]);
            break;

            case "job":
            job[id] = value;
            break;

            case "users":
            users[id] = value;
            break;

            case "messages":
            messages[id] = value;
            break;  
            
            case "values":
            values[id] = value;
            break;   

            case "head":
            head[id] = value;
            break;  

            case "shirt":
            shirt[id] = value;
            break;  

            case "trousers":
            trousers[id] = value;
            break; 

            case "shoe":
            shoe[id] = value;
            break;         
            
            case "eyes":
            eyes[id] = value;
            break;       

            case "mouth":
            mouth[id] = value;
            break;      

            case "color":
            color[id] = value;
            break;   

            case "gender":
            gender[id] = value;
            break;  

            case "msg":
            msg[id] = value;
            break; 
        }
    }
}