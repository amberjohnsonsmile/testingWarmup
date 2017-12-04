var assert = require("assert");
var index = require("../index");

describe("Array", function() {
	describe("#sumTwoNum()", function() {
		it("should return the sum of two numbers", function () {
			assert.equal(index.sumTwoNum(2,3), 5);
			assert.equal(index.sumTwoNum(1,9), 10);
			assert.equal(index.sumTwoNum(3,4), 7);
		});
	describe("#findArrayLength()", function(){
		it("should return length of the array", function(){
			assert.equal(index.findArrayLength(arr), 6);
			assert.equal(index.findArrayLength(arr2), 2);
		});
	});
	});
});
