const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

const app = require('../app'); // Import your Express app


describe('Routes', () => {
  it('should return status 200 and a welcome message', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Welcome to the homepage!');
        done();
      });
  });

  it('should return status 404 for a non-existent route', (done) => {
    request(app)
      .get('/non-existent-route')
      .expect(404)
      .end(done);
  });
});
