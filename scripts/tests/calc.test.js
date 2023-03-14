
const addition = require("./calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
        test("should return 77 for 44 + 33", () => {
            expect(addition(44, 33)).toBe(77);
        })
        test("should return error for no value provided", () => {
            expect(addition()).toBe(NaN);
        })
        test("should return error for one nonsense value", () => {
            expect(addition("panda", 22)).toBe(NaN);
        })
        test("should return error for two nonsense value", () => {
            expect(addition("panda", "moose")).toBe(NaN);
        })
    })
    /*
    describe("Subtraction function",() => {
        
    })
    describe("Multiply function",() => {
        
    })
    describe("Divide function",() => {
        
    })
    */
})