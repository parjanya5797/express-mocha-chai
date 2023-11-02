var sinon = require('sinon')
var chai = require('chai')
var expect = chai.expect;
var student = require("../controllers/studentController");
var studentObj = new student();

describe('Mock test',() => {
    it('count function',() => {
        var mock = sinon.mock(studentObj);

        var expt = mock.expects('getExternalMarks');
        expt.exactly(1); // must run getExternalMarks function exactly given number of times.
        expt.withArgs(40); // with exact arguments 
        studentObj.finalMarks(40); //must be same with the mocked attributes

        mock.verify();
    })
})