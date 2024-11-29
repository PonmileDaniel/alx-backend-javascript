const Utils = {
    calculateNumber(type, a, b) {
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);
      if (type === 'SUM') {
        return roundedA + roundedB;
      }
    },
  };
  
  module.exports = Utils;
  