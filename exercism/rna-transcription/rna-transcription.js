var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function (strand) {
	let rna = [];
	let temp = strand.toUpperCase().split('');

	temp.forEach(item => {
		if (!(['C', 'G', 'T', 'A'].includes(item))) {
			throw new Error('Invalid input');
			return rna;
		}	
	});

	temp.forEach(item => rna.push(getComplement(item)));
		
	return rna.join('');
};

var getComplement = function(letter) {
	switch(letter) {
		case 'G': return 'C';
		case 'C': return 'G';
		case 'T': return 'A';
		case 'A': return 'U';
	}	
}

module.exports = DnaTranscriber;