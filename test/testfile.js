var expect = require('chai').expect;
var server = require('../app').default;
var request = require('supertest');

const userCredentials = {username: 'Josh', password: '1234'}

var logIn = request.agent(server);

/*
before(async function(done){
  await logIn
    .post('/users/login')
    .send(userCredentials)
    .end(function(err, response){
      expect(response.statusCode).to.equal(200);
      expect('Location', '/dashboard');
      done();
    });
});


describe('GET /dashboard', function(done){
  it('should return a 200 response if the user is logged in', function(done){
    logIn.get('/dashboard')
    .expect(200, done);
  });
});

*/

describe('Unprotected Routes', function(done){
  it('should return a 200 response if the user is at login route', function(done){
    request('http://localhost:3000').get('/login')
    .expect(200, done);
  });

  it('should return a 200 response if the user is at index route', function(done){
    request('http://localhost:3000').get('/')
    .expect(200, done);
  });

  it('should return a 200 response if the user is at register route', function(done){
    request('http://localhost:3000').get('/register')
    .expect(200, done);
  });
});


describe('Protected Routes', function(done){
  it('should return a 302 response if the user is at dashboard route while not logged in', function(done){
    request('http://localhost:3000').get('/dashboard')
    .expect('Location', '/')
    .expect(302, done);
  });
  it('should return a 302 response if the user is at userprofile route while not logged in', function(done){
    request('http://localhost:3000').get('/userprofile')
    .expect('Location', '/')
    .expect(302, done);
  });
});
