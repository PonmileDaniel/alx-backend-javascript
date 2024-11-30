const chai = require('chai');
const request = require('request');
const expect = chai.expect;

describe('API integration tests', () => {
  const baseUrl = 'http://localhost:7865';

  before((done) => {
    // Start the server
    const app = require('./api');
    this.server = app.listen(7865, done);
  });

  after((done) => {
    // Close the server
    this.server.close(done);
  });

  describe('Index page', () => {
    it('Correct status code?', (done) => {
      request.get(`${baseUrl}/`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Correct result?', (done) => {
      request.get(`${baseUrl}/`, (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('Cart page', () => {
    it('Correct status code when :id is a number?', (done) => {
      request.get(`${baseUrl}/cart/12`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Correct result when :id is a number?', (done) => {
      request.get(`${baseUrl}/cart/12`, (error, response, body) => {
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('Correct status code when :id is NOT a number?', (done) => {
      request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('Available payments', () => {
    it('Returns the correct object?', (done) => {
      request.get(`${baseUrl}/available_payments`, (error, response, body) => {
        const expectedResponse = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal(expectedResponse);
        done();
      });
    });
  });

  describe('Login', () => {
    it('Returns the correct message?', (done) => {
      const options = {
        url: `${baseUrl}/login`,
        method: 'POST',
        json: { userName: 'Betty' },
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});
