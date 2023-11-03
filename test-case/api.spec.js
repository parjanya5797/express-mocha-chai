var chai = require('chai')

var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

var server = require('../app')
let chaiHttp = require('chai-http');
const { response } = require('express');
chai.use(chaiHttp);

describe('Check Task API',() => {
    it('get User List',(done) => {
        chai.request(server)
        .get('/users')
        .end((err,res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).to.have.all.keys('data','statusText');
            done();
        })
    })
})