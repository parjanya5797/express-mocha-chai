 var chai = require('chai')
 var expect = chai.expect;
 var sinon = require('sinon');

 let string = "Test Data";
 
 describe('Hooks Test',()=> {
    
    after(()=> {
        console.log('-------last--------');
    })

    before(() => {
        console.log('---------first-----------');
    })

    afterEach(() => {
        console.log("--------After Every Cases-----");
    })

    beforeEach(() => {
        sinon.restore();
        console.log("--------Before Every Cases-----");
    })



    it.only('Check String Match',()=> {   // Only runs this testcase regardless of number of test cases.
        expect(string).to.be.equal('Test Data');
    })

    it.skip('Check String Length ',() => {  // Skips this test using it.skip
        expect(string).to.be.length(9);
    })

    it('Check String Length 2',() => {
        expect(string).to.be.length(9);
    })
 })

 describe.skip("Skipped hook",() => { //skips the whole test suite
    it('Check String Length Hook 2',() => {
        expect(string).to.be.length(9);
    })
 })

 describe.only("Skipped hook",() => { //runs this whole test suite only
    it('Check String Length Hook 2',() => {
        expect(string).to.be.length(9);
    })
 })