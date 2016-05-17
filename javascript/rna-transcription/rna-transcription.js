var dnaTranscriber = function() {}


dnaTranscriber.prototype.toRna = function(dna) {
    var dnaArray = dna.split('');
    var result = []
    for (i in dnaArray) {
        if (dna[i] === 'C') {
            result.push('G')
        } else if (dna[i] === 'G') {
            result.push('C');
        } else if (dna[i] === 'A') {
            result.push('U');
        } else if (dna[i] === 'T') {
            result.push('A');
        }
    }
    return result.join('')

}

module.exports = dnaTranscriber
