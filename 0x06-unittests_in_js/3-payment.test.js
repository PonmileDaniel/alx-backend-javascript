// 3-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    // Check if the spy was called once
    sinon.assert.calledOnce(spy);
    // Check if it was called with the correct arguments
    sinon.assert.calledWithExactly(spy, 'SUM', 100, 20);

    spy.restore();
  });
});
