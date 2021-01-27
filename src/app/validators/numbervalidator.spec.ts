import { numberValidator } from "./numbervalidator"

describe("numbervalidator Tests", () => {

    describe("valid integer numbervalidator Test", () => {
        it('should accept input 1 as a valid integer', () => {expect(numberValidator("1")).toBe(true);})
    })

    describe("invalid integer numbervalidator Test with letter", () => {
        it('should reject input 1a as invalid integer', () => {expect(numberValidator("1a")).toBe(false);});
    })

    describe("invalid integer numbervalidator Test with letter", () => {
        it('should reject  empty string  as invalid integer', () => {expect(numberValidator("")).toBe(false);});
    })

    describe("invalid integer numbervalidator Test with symbol", () => {
        it('should reject input 1! as invalid integer', () => {expect(numberValidator("1!")).toBe(false);});
    })
    


})