'use strict';

const path = require('path');
const readData = require(path.resolve('lib/readData'));
const chai =  require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('readData', () => {

    it('should read data from from properties file', () => {
        let data = readData('test/test-data/test.properties');
        expect(data).to.eventually.to.have.property('a', 1);
        expect(data).to.eventually.to.have.property('b', 2);
    });

    it('should read data from from csv file', () => {
        let data = readData('test/test-data/test.csv');
        expect(data).to.eventually.to.have.property('id', '1');
        expect(data).to.eventually.to.have.property('user', 'foo');
        expect(data).to.eventually.to.have.property('pass', '123');
    });

     it('should read data from from json file', () => {
         let data = readData('test/test-data/test.json');
         expect(data.data).to.equal('data from json file');
     });
    //
    it('should read data from from yml file', () => {
        let data = readData('test/test-data/test.yml');
        expect(data).to.have.property('environment', 'production');
        expect(data).to.have.property('parameters', null);
    });

    it('should read data from from xlsx file', () => {
        let data = readData('test/test-data/test.xlsx', {sheetName: 'Sheet1'});
        expect(data.A1.v).to.equal(1);
        expect(data.B1.v).to.equal(2);
        expect(data.C1.v).to.equal(3);
    });
});