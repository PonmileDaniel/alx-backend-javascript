const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');

describe('calculateNumber', function () {
    describe('SUM', function () {
        it('should return 6 when inputs are 1.4 and 4.5', function () {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return 0 when inputs are -1.4 and 1.4', function () {
            expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
        });
    });

    describe('SUBTRACT', function () {
        it('should return -4 when inputs are 1.4 and 4.5', function () {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return 3 when inputs are 5.6 and 3.1', function () {
            expect(calculateNumber('SUBTRACT', 5.6, 3.1)).to.equal(3);
        });
    });

    describe('DIVIDE', function () {
        it('should return 0.2 when inputs are 1.4 and 4.5', function () {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when dividing by 0', function () {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });

        it('should return 5 when inputs are 10 and 2', function () {
            expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
        });
    });

    describe('Invalid type', function () {
        it('should throw an error for unsupported operation type', function () {
            expect(() => calculateNumber('MULTIPLY', 1, 3)).to.throw('Invalid type');
        });
    });
});
