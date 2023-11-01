var sinon = require('sinon');

var chai = require('chai');

var expect = chai.expect;

var student = require('../controllers/studentController')

var studentObj = new student();

describe('Stub Test',() => {
    it('check total marks is correct',() => {
        var stubObj = sinon.stub(studentObj,'getExternalMarks'); //Mocking getExternalMarks function to return a customized response
        stubObj.withArgs(40).returns(5);
        // var interalStubObj = sinon.stub(studentObj,'getInternalMarks')
        // interalStubObj.withArgs(40).returns(55);
        expect(studentObj.finalMarks(40)).to.be.equal(54);
    })
})
