class Hamming {

  compute(str1, str2) {
    if (str1 === str2) return 0;
    if (str1.length !== str2.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    let differences = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) differences++;
    }
    return differences;
  }
}

module.exports = Hamming;
