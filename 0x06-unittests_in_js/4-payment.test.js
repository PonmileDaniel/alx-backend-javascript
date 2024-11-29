const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and verify its usage', () => {
    // Stub Utils.calculateNumber to always return 10
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify the stub was called with correct arguments
    sinon.assert.calledOnce(stub);
    sinon.assert.calledWithExactly(stub, 'SUM', 100, 20);

    // Verify console.log output
    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 10');

    // Restore the stub and spy
    stub.restore();
    consoleSpy.restore();
  });
});
