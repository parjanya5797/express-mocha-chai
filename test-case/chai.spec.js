var chai = require('chai')

var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
//assert
let userName = 'Test';
let myList = {
    item:[
        {
            id:1,
            name:"demo"
        },
        {
            id:2,
            name:"demo2"
        },
    ]
}
describe('Assert Check',function(){
    
    it("check string",function() {
        assert.typeOf(userName,'string');
    }) 
    it("equal match",function() {
        assert.equal(userName,'Test');
    }) 
    it("check Length",() => {
        assert.lengthOf(myList.item,2)
    })
})


//Should 

describe("should check",() => {
    it('check string',function() {
        userName.should.be.a('string');
    })

    it('check equal',() => {
        userName.should.be.equal('Test')
    })

    it('check length',() => {
        myList.should.have.property('item').with.lengthOf(2);
    })
})


//expect 
describe('expect check',() => {

})