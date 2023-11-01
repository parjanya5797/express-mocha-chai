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
    ],
    title:"Title",
    address:{
        country:"Nepal",
        phoneNumber:['987654310','8765464694']
    }
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
    it('match string',()=> {
        expect(userName).to.be.a('string')
    })

    it('equal string',function(){
        expect(userName).to.equal('Test');
    })

    it('string length',() => {
        expect(userName).to.lengthOf(4);
    })
    it('object matching',()=> {
        expect(myList).to.have.property('item').with.lengthOf(2);
    })

    it('object matching key',() =>{
        expect(myList).to.have.all.keys('item','title','address');
    })
    
    it('contains phone number',() => {
        expect(myList).to.have.nested.property('address.phoneNumber[1]')
    })

    it('contains country nepal',() => {
        expect(myList).to.have.nested.include({'address.country':'Nepal'})
    })

    it('contains phone number',() => {
        expect(myList).to.have.nested.include({'address.phoneNumber.0':'987654310'})
        // expect(myList).to.have.nested.include({'address.phoneNumber[0]':'987654310'}) //both works
    })
})