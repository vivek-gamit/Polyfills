if(!Function.prototype.myapply){
    Function.prototype.myapply = function(thisArg, Arrayarg){

        const sym = Symbol()
        thisArg[sym] = this
        let res = thisArg[sym](...Arrayarg)
        delete thisArg[sym]
        return res
    }
}

const Person = {
    name : "Rahul",
    greet : function(message,city){
        console.log(`${message} ${this.name} from ${city}`);
        
    }
}

const Student = {
    name : "vivek"
}

Person.greet.myapply(Student, ["hello", "Bharuch"])