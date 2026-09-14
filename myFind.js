
if(!Array.prototype.myFind){
    Array.prototype.myFind = function(value){
        if(this.length === 0) return undefined

        for(let i=0; i<this.length; i++){
            let callbackSugnature = value(this[i], i, this)
            if(callbackSugnature){
                return this[i]
            }

        }

        return undefined

    }
}

let nums = [3,7,10,15]
let result = nums.myFind((num) => num>20)
console.log(result);
