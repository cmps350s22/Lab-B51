import {UnitConverter} from "./unit-converter.js";
import {expect} from "chai";

const unitConverter = new UnitConverter()

describe('Testing UnitConver Class', ()=>{
    it('1 kgToOunce should 35.274', function () {
        expect(unitConverter.kgToOunce(1)).equals(35.274)
    });
    it('1 kgToOunce should 35.274', function () {
        expect(unitConverter.kgToOunce(1)).equals(35.274)
    });
    describe('Inner Part' ,()=>{
        it('1 kgToOunce should 35.274', function () {
            expect(unitConverter.kgToOunce(1)).equals(35.274)
        });
        it('1 kgToOunce should 35.274', function () {
            expect(unitConverter.kgToOunce(1)).equals(35.274)
        });
    })
})
