if(!Array.prototype.myMap){
    Array.prototype.myMap = function(value){

        let res = []

        for(let i=0; i<this.length; i++){
            let mapSignature = value(this[i], i, this)
            //dekho multiplication me sirf this[i] chahiye so bakike parameters ko ignore karege 
            // lekin dusre call me hume teen chijhe chahiye so thin chijhe retuen karege simple....
            res.push(mapSignature)
        }

        return res
    }
}

let arr = [10,20,30,40]

//first call
let result = arr.myMap((num) => num*2)
console.log(result);

//second call 
arr.myMap((num, index, arr) => {
    console.log(num, index, arr);
    
})
