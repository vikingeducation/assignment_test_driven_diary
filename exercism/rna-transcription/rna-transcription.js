class DnaTranscriber {
	toRna(dna) {
		var conversionObj = {
			G: "C",
			C: "G",
			T: "A",
			A: "U"
		};

		var rnaArray = [];

		var dnaSplit = dna.split("");
		dnaSplit.forEach(character => {
			if (!conversionObj[character]) {
				throw "Invalid input";
			}
			rnaArray.push(conversionObj[character]);
		});

		var rna = rnaArray.join("");
		return rna;
	}
}

module.exports = DnaTranscriber;
