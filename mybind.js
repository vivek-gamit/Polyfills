if(!Function.prototype.mybind){
    Function.prototype.mybind = function(thisArg, ...args){

        const orignalfunction = this
        return function(...exargs){
            return orignalfunction.call(thisArg, ...args, ...exargs)
        }
    }
}

const Person = {
    name : "Rahul",
    greet : function(message, city){
        console.log(`${message} ${this.name} from ${city}` );
        
    }
}


const student = {
    name : "Vivek"
}

const syahello = Person.greet.mybind(student, "Hello")

syahello("surat");
