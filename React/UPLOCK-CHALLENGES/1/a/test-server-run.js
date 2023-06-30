// const
// chai
// require
// chai.expect
// http
const chai = require('chai');
const expect = chai.expect;
const http = require('http');

describe('Server', function () {
  let server;

  before(function (done) {
    // Start your server before running the tests
    server = http.createServer().listen(3000, done);
  });

  after(function (done) {
    // Close the server after running the tests
    server.close(done);
  });

  it('should return status code 200', function (done) {
    http.get('http://localhost:3000', function (res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
