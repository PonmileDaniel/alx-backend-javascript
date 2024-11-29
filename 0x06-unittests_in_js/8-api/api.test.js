const chai = require('chai');
const request = require('request');
const expect = chai.expect;

describe('Index page', () => {
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

  it('Other?', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(response.headers['content-type']).to.contain('text/html');
      done();
    });
  });
});
