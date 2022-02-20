// npm init
// npm mocha chai
import {expect} from "chai";
import {UnitConverter} from "./unit-converter.js";

const unitConverter = new UnitConverter()
//add(1 , 1)  = 2
describe("UnitConverter Testing Methods", () => {

    describe('Weight Methods', () => {
        it("1 KG should be 2.0254 Pound", () => {
            expect(unitConverter.kgToPound(1)).equals(2.2046)
        })

        it("1 KG should be 2.0254 Ounce", () => {
            expect(unitConverter.kgToOunce(1)).equals(35.274)
        })
    })

    describe('Length Methods', () => {
        it("1 meterToInch should be 2.0254 meter", () => {
            expect(unitConverter.meterToInch(1)).equals(39.3701)
        })

        it("1 meter should be 2.0254 Foot", () => {
            expect(unitConverter.meterToFoot(1)).equals(3.2808)
        })
    })
})