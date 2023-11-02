var chai = require('chai')
var expect = chai.expect;
var student = require('../controllers/studentController');
var studentObj = new student();
const nock = require('nock');
describe('Nock Test',() => {
    it('api test',function(done) {
        var obj = {status:'ok',statusCode:200,data:[]}

        const apiHit = nock('https://dummyjson.com')
        .get('/products')
        .reply(200,obj);

        studentObj.thirdPartyApi()
        .then((record) => {
            expect(record).to.be.eql(obj);
            done();
        })
        .catch(error=>{
            done(new Error('error:-'+error));
        })
    })
})
