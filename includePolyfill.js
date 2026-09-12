if (!Array.prototype.Myinclude) {
    Array.prototype.Myinclude = function (value) {

        for (let i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return true
            }
        }

        return false
    }

}

let arr = [10, 20, 30]
//console.log(arr.Myinclude(20))

if(!Array.prototype.eat){
    console.log("this function is not valid");
    
}


