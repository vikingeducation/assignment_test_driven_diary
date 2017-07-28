class DnaTranscriber {
  toRna(dna) {
    let transcriber = {
      C: "G",
      G: "C",
      A: "U",
      T: "A"
    };
    let rna = dna.split("").map(base => {
      if (!transcriber[base]) {
        throw "Invalid input";
      }
      return transcriber[base];
    });
    return rna.join("");
  }
}

module.exports = DnaTranscriber;
