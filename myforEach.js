if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callbackfn){

        for(let i=0; i<this.length; i++){
            callbackfn(this[i], i, this)
        }
    }
}

const arr=["Raj","Vivek","Smit"];

arr.myForEach((name,index)=>{
    console.log(index,name);
});