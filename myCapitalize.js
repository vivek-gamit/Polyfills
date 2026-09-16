if(!String.prototype.myCapitalize){
    String.prototype.myCapitalize = function(){

        if(this.length < 1){
            return ""
        }

        let first = this.charCodeAt(0)
        let last = this.slice(1)
        if(first >= 97 && first <= 122){
            let uperDigit = first - 32
            let uperlatter = String.fromCharCode(uperDigit)
             return uperlatter + last
            
        }
        return this
    }
}

console.log("vivek".myCapitalize());
