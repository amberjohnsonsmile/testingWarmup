var assert = require("assert");
var index = require("../index");

describe("Array", function() {
    describe("#sumTwoNum()", function() {
        it("should return the sum of two numbers", function () {
            assert.equal(index.sumTwoNum(2,3), 5);
        });
    });
});

describe("#findArrayLength()", function() {
    it("should return length of the array", function(){
        const arr = [1, 2, 3, 5, 7, 3];
        assert.equal(index.findArrayLength(arr), 6);
    });
});
