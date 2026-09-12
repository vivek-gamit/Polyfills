if(!Array.prototype.myFirst){
    Array.prototype.myFirst = function(arr){

        return this.length === 0 ? undefined : this[0];
    }
}


let empty = []
let arr = ["vivek", "raj", "smit"]
console.log(arr.myFirst());
console.log(empty.myFirst());
