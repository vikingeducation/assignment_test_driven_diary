var DnaTranscriber = function() {

};

DnaTranscriber.prototype.toRna = function(str1) {
  var rnaMap = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }
  var rna =[];

  str1.split('').forEach((char) => {
    if(Object.keys(rnaMap).includes(char)){
      rna.push(rnaMap[char])
    } else {
      throw new Error('Invalid input')
    }
  })

  return rna.join('');
};

module.exports = DnaTranscriber;
