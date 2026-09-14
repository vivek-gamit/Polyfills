if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(value){
        let res = []

        for(let i=0; i<this.length; i++){
            let callbackSugnature = value(this[i], i, this)
            if(callbackSugnature){
                res.push(this[i])
            }
        }

        return res
    }
}

let nums = [1,2,3,4,5,6]

let even = nums.myFilter((num) => num % 2 == 0)
console.log(even);
