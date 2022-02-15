// npm init
// npm mocha chai
import {expect} from "chai";
import {UnitConverter} from "./unit-converter.js";

const unitConverter = new UnitConverter()

describe('Unit Converter Class Test Cases', () => {
    describe('Test Cases For Height' , ()=>{
        it('1 kgToOunce should return 35.274', function () {
            expect(unitConverter.kgToOunce(1)).equals(35.274)
        });
        it('1 kgToOunce should return 35.274', function () {
            expect(unitConverter.kgToOunce(1)).equals(35.274)
        });
    })

    describe('Test Cases For Weight' , ()=>{
        it('1 kgToOunce should return 35.274', function () {
            expect(unitConverter.kgToOunce(1)).equals(35.274)
        });
        it('1 kgToOunce should return 35.274', function () {
            expect(unitConverter.kgToOunce(1)).equals(35.274)
        });
    })


})