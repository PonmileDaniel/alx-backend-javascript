const request = require('request');
const { expect } = require('chai');

describe('API Tests', function () {
  const BASE_URL = 'http://localhost:7865';

  it('GET / should return the correct status code and message', function (done) {
    request(`${BASE_URL}/`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id should return correct message for numeric id', function (done) {
    request(`${BASE_URL}/cart/12`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/:id should return 404 for non-numeric id', function (done) {
    request(`${BASE_URL}/cart/abc`, function (error, response) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('GET /available_payments should return correct JSON object', function (done) {
    request(`${BASE_URL}/available_payments`, function (error, response, body) {
      const expectedResponse = {
        payment_methods: { credit_cards: true, paypal: false },
      };
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });

  it('POST /login should return correct welcome message', function (done) {
    const options = {
      method: 'POST',
      url: `${BASE_URL}/login`,
      json: { userName: 'Betty' },
    };
    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

