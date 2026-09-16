if (!Array.prototype.myUnique) {
    Array.prototype.myUnique = function () {
        let result = []
        let seen = {}

        for (let i = 0; i < this.length; i++) {
            let ch = this[i]

            if (!seen[ch]) {
                seen[ch] = true
                result.push(ch)
            }
        }

        return result
    }

}

const arr = [1, 2, 2, 3, 4, 4, 5];

console.log(arr.myUnique());

//[1,2,3,4,5]