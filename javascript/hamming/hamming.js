var Hamming = function() {}

Hamming.prototype.compute = function(a,b) {
    aSplit = a.split('');
    bSplit = b.split('');
    if (a === b) {
        return 0
    } else if (a.length === b.length) {
        var count = 0
        for (i in aSplit) {
            if (aSplit[i] !== bSplit[i]) {
                count += 1
            }
        }
        return count
    } else {
        throw new Error('DNA strands must be of equal length.')
    }
}





module.exports = Hamming
