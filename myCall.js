if(!Function.prototype.mycall){
    Function.prototype.mycall = function(thisArg, ...args){

        let sym = Symbol()
        thisArg[sym] = this
        let res = thisArg[sym](...args)
        delete thisArg[sym]

        return res
    }
}

const Person = {
    name : "Rahul",
    greet : function(message){
        console.log(`${message} ${this.name}`);
        
    }
}


const student = {
    name : "Vivek"
}

Person.greet.mycall(student, "Hello")