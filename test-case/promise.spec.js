var sinon = require('sinon')
var chai = require('chai')
var expect = chai.expect;
var student = require("../controllers/studentController");
var studentObj = new student();
var userController = require("../controllers/userController");
const chaiAsPromise = require('chai-as-promised')
chai.use(chaiAsPromise) //need to use to use eventually
var mocha = require('mocha')

describe('Promise test',() => {
    it('check Promise without chai as promise',(done) => {
    //    expect(studentObj.dbData()).to.be.equal(10); //Promise does not work on this test
        //Alternative
        studentObj.dbData().then(function(result) {
            expect(result).to.be.equal(10);
            done(); // Call done() to signal that the test is complete
        })

        //This works but too long code without using chai as promised

    })

    it('check Promise Function using chai As Promise',() => {
       return expect(studentObj.dbData()).to.eventually.equal(10); // uses chaiAs Promise
    })

    it('check Promise Function for OTP key',() => {
        return expect(userController.newsData()).to.eventually.have.deep.property('otp'); // uses chaiAs Promise
     })
})