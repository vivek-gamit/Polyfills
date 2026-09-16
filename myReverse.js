if(!String.prototype.myReverse){
    String.prototype.myReverse = function(){
        let result = ""
        for(let i=this.length-1; i>=0; i--){
            result += this[i]
        }
        return result
    }
}

console.log("vivek".myReverse());
