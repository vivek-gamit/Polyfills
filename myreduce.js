if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(callbackfn, initialvalue){

        let acc;
        let startIndex;
        if(arguments.length >=2){
            acc = initialvalue
            startIndex = 0
        }else{
            acc = this[i]
            startIndex = 1
        }

        for(let i=startIndex; i<this.length; i++){
            acc = callbackfn(acc, this[i], i, this)
        }

        return acc
    }
}

const nums=[1,2,3,4];

//const sum=nums.myReduce((acc,current)=>acc+current,0);

//console.log(sum);

//10


const product=nums.myReduce((acc,current)=>acc*current,1);

console.log(product);

//24