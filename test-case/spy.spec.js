var sinon = require('sinon')

var chai = require('chai')

var expect = chai.expect;
var should = chai.should();
var assert = chai.assert;

var student = require('../controllers/studentController');
var studentObj = new student();

describe('Spy',function(){
    
    it('test userInfo Function',() => {
        expect(studentObj.userId()).to.be.equal(12);
        // studentObj.userId().should.be.equal(12) //Works
        // assert.equal(studentObj.userId(),12) //Works
    })
    
    // it('function count',() => {
    //     var spyObj = sinon.spy(studentObj,'getInfo');
    //     studentObj.home(5);
    //     expect(spyObj.calledOnce).to.be.true; //calledOne returns true if function is called once.
    //     // expect(spyObj.calledTwice).to.be.true; // calledTwice returns true if function is called twice.
    // })

    it('function arguments check', () => {
        var spyObj = sinon.spy(studentObj,'getInfo');
        studentObj.home(5);
        expect(spyObj.calledWith(5,1)).to.be.true; // calledWith returns true if the same parameters are passed to the spied function (must be exact)
    })
    
})